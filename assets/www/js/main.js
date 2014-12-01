(function (window) {
    var search = document.location.search.toLowerCase().replace("?", "");
    var arrInputControls = [],
        xmlString,contentType, randomCopyArray, isSuffleLoaded, isTypeAnsLoaded, isCmbLoaded, isShowAnsLoaded, isRandSelLoaded, objResult, selectedFile, currentPage, selAnswerOption = 2;
    var headerProp={};
    var ansIntervalCounter, ansCounter = 0,isLocalFolderContents,currExerciseName,
        shuffleIntervalCounter, shuffleCounter = 0,
        clkIntervalCounter, clkCounter = 0,
        randomIntervalCounter, randomCounter = 0,
        smartIntervalCounter,smartRandomCounter =0;
  
    var strimg, appDataBase, domainID, isUserLogin = false,isSaveToLocal = false,isSaveToLocalSmartPaper = false,isSketcherAdded = false;
    var typeAnsStopWatch,shuffleStopWatcher,randStopWatcher,multiSelectStopWatcher,smartPaperWatcher;
    var isTypeEditStart = false,isShuffleEdit = false,isSelectEdit = false,isRandomEdit = false;
    
    //Priya June2014
    var feedbackText='';
  //  var feedbackFlag='0';
    var sticker='1';
    var grade='1';
    var rework='0';
    
    $(document).ready(function () {
        readXml()
    });
    openLocalDatabase = function () {
        try {
            appDataBase = window.sqlitePlugin.openDatabase({
                name: "attachments"
            });
            appDataBase.transaction(getFiles, transaction_error)
        } catch (ex) {
            console.log('db error occured' + ex)
        }
    }
    getFiles = function (tx) {
        var sql = "SELECT _id,filename,content from mail_attachments";
        tx.executeSql(sql, [], getFile_success)
    }
    transaction_error = function (tx, error) {
        $.ui.hideMask();
        $('#errorMsg').show()
    }
    getFile_success = function (tx, results) {
        $('#errorMsg').hide();
        objResult = results;
        var len = objResult.rows.length;
        while (len >= 1) {
            var file = objResult.rows.item(len - 1);
            var filename = file.filename;
            filename = filename.split(".")[0];
            var id = parseInt(file._id);
            $("#fileList").append("<li><a href='#main' onclick='getContents(" + id + ");' >" + filename + "</a></li>");
            len--
        }
        $.ui.hideMask()
    }
    var readXml = function () {
        var div = document.getElementById("main")
    }
    
    barreportsloadedPanelinmain = function()
    {
    	barreportsloadedPanel(window.innerWidth,window.innerHeight);
    
    }
    getContents = function (id, currentItem) {
        setSelectedItemColor(currentItem);
        try {
            $.ui.hideMask();
            if (selectedFile != id) {
                selectedFile = id;
              //  initStage();
                resetTimers();
                resetAllControls();
                if (objResult != null) {
                    var len = objResult.rows.length;
                    while (len >= 1) {
                        var file = objResult.rows.item(len - 1);
                        if (parseInt(file._id) == id) {
                            xmlString = file.content;
                            break
                        }
                        len--
                    }
                }
                if (id == 'map') {
                    sapi.getData(2, 30, getDataResponse);
                    return
                } else if (id == 'heart') {
                    sapi.getData(2, 31, getDataResponse);
                    return
                }
            } else {
                $.ui.loadContent('#main', false, false, "slide");
            }
        } catch (ex) {
            alert(ex)
        }
    }
    setSelectedItemColor = function (currentItem) {
     /*   if (currentItem.parentElement.nextElementSibling) {
            currentItem.parentElement.nextElementSibling.style.backgroundColor = ''
        }
        if (currentItem.parentElement.previousElementSibling) {
            currentItem.parentElement.previousElementSibling.style.backgroundColor = ''
        }
        currentItem.parentElement.style.backgroundColor = '#3f9ae5'*/
    }
    getDataResponse = function (data) {

        try {
            clearLayers();
            xmlString = '<?xml version="1.0" standalone="yes"?>' + data;
             isLocalFolderContents = false;
            //createdummyCanvas();
            initiateControls(xmlString);
            //console.log(xmlString)
        } catch (ex) {
            alert(ex)
        }
    };
    getLocalDataResponse = function (data) {

        try {
        	console.log(' priya getLocalDataResponse');
        	console.log(data);
            clearLayers();
            xmlString = data;
          //  sticker
             isLocalFolderContents = true;
            //createdummyCanvas();
            initiateControls(xmlString);
           // console.log(xmlString)
        } catch (ex) {
            alert(ex)
        }
    };
    getLocalFolderAnswers = function(){
         
        localFolderWorkObject = $(dataString).find('Work');
        if(localFolderWorkObject.text().length){
            localFolderWorkObject = JSON.parse(localFolderWorkObject.text());
        }
        return localFolderWorkObject;
    }
    clearLayers = function(){
    	feedbackText=''; // Priya June2014
    	sticker='1';
    	grade='1';
     
        resetTimers();
        resetAllControls(); 
        watcherStop();
    }
    getContentType = function(){
        return contentType;
    }
    setLocaltoSave = function(blnSave){
        isSaveToLocal = blnSave;
    }
    setSmartPaperLocalToSave = function(blnSave){
        isSaveToLocalSmartPaper = blnSave;
    }
    setTypeEdit = function(blnEdit){
        isTypeEditStart  = blnEdit;
    }
    setShuffleEdit = function(blnEdit){
        isShuffleEdit  = blnEdit;
    }
    setSelectEdit = function(blnEdit){
        isSelectEdit  = blnEdit;
    }
    setRandomEdit = function(blnEdit){
        isRandomEdit  = blnEdit;
    }
    initiateControls = function (xmlString) {
        dataString = $(xmlString);
       
       $(dataString).find('DisplayAreaProperties').each(function () {
       //$(xmlString).siblings('NewDataSet').find('DisplayAreaProperties').each(function () {
            strimg = $(this).find('ImgString').text();
            contentType = $(this).find('ContentType').text();
            createCanvas($(this).find('ImgString').text(), $(this).find('PctWidth').text(), $(this).find('PctHeight').text(), $(this).find('Zoom').text());
        });
    }

    imgLoadDone = function(){
        initBuildControls(xmlString);
    }

    
    updateFeedback= function(value,fdbackflag,stickerVal,gradeVal,reworkVal)
    {    
    	console.log('In Main for updating feedback variables');
    	
    	
    	 feedbackText= value;
    	 console.log('feedbackText');
     	 console.log(feedbackText);
     	
    	 sticker=stickerVal;
    	 console.log('sticker');
     	 console.log(sticker);
     	
    	 grade= gradeVal;
    	 console.log('grade');
     	 console.log(grade);
     	 
     	 rework=reworkVal;
     	 console.log('rework');
     	 console.log(rework);
     		 
    	 console.log('From Main update backpack variables ');
    	 updateFeedbackvarinbackpack(feedbackText,'1',sticker,grade,rework);
    	 
    }
    /*
    updateFeedbackinMain= function(value,stickerVal,gradeVal,reworkval)
    {    
    	console.log('In Main for updating feedback variables');
    	
    	
    	 feedbackText= value;
    	 console.log('feedbackText');
     	 console.log(feedbackText);
     	
    	 sticker=stickerVal;
    	 console.log('sticker');
     	 console.log(sticker);
     	
    	 grade= gradeVal;
    	 console.log('grade');
     	 console.log(grade);
     	 
     	 rework=reworkval; 
     	
     	 
    	 console.log('From Main update backpack variables ');
    	 updateFeedbackvarinbackpack(feedbackText,'1',sticker,grade,rework);
    	 
    }*/
    
    // SL builds control from json response from server
    initBuildControls = function(xmlString){
       // resetAllControls();
        dataString = $(xmlString);
        console.log('In initBuildControls');
        console.log(dataString);
        var feedbackFlag= $(dataString).find('FeedbackFlag').text();
        
        // updateFeedbackinMain after page load in SmartLabel
        feedbackText= $(dataString).find('FeedbackText').text();
        sticker=  $(dataString).find('Sticker').text();
        grade = $(dataString).find('Grade').text();
        // Uncomment it later priya13Oct2014
        rework = $(dataString).find('Rework').text();
       // rework='0';
       // // 8October2014 update it
        // assign rework some value here
       console.log('FeedbackFlag');
       console.log(feedbackFlag);
       console.log('FeedbackText');
       console.log(feedbackText);
       console.log('sticker');
       console.log(sticker);
       console.log('Grade');
       console.log(grade);
       console.log('Rework');
       console.log(rework);
       
      // Update Feedback in backpack.js
       updateFeedbackvarinbackpack(feedbackText,'1',sticker,grade,rework);
       
       $(dataString).find('HeaderProperties').each(function () {
        //$(xmlString).siblings('NewDataSet').find('HeaderProperties').each(function () {
            headerProp.worksheetName = $(this).find('WorksheetName').text();
            headerProp.worksheetMode = $(this).find('WorksheetMode').text();
            headerProp.courseName = $(this).find('CourseName').text();
            headerProp.noOfItems = $(this).find('NoOfItems').text();
            headerProp.showFeedback = $(this).find('ShowFeedback').text();

        });
        
        //$(xmlString).siblings('NewDataSet').find('DetailProperties').each(function () {
        $(dataString).find('DetailProperties').each(function () {
            var arrObj = {};
            arrObj.ctrlID = $(this).find('CtlID').text();
            arrObj.id = $(this).find('CtlName').text();
            arrObj.left = $(this).find('CtlX').text();
            arrObj.top = $(this).find('CtlY').text();
            arrObj.value = $(this).find('CtlDefaultValue').text();
            arrObj.width = $(this).find('CtlWidth').text();
            arrObj.height = $(this).find('CtlHt').text();
            arrObj.fontFamily = $(this).find('CtlFontFamily').text();
            arrObj.fontSize = $(this).find('CtlFontSize').text();
            arrObj.fontStyle = $(this).find('CtlFontStyle').text();
            arrObj.fontColor = $(this).find('fontColor').text();
            arrInputControls.push(arrObj);
            console.log($(this).find('CtlDefaultValue').text())
        });
        buildviewforDisplay();
        exerciseActicity = getExerciseActivity();
        //if(headerProp.showFeedback.toUpperCase() =='ON'){
    //exerciseActicity = 1 is a test mode otherwise practiceMode
            if(exerciseActicity==0){
            //Practice mode
            enableDisableFooter(false);
            showHederControls(true);
            $.ui.loadContent('#main', false, false, "slide");
             
        }else{ //test mode
            enableDisableFooter(true);
            hideHederControls();
            switch(headerProp.worksheetMode.toUpperCase()){
                case 'RANDOM':
                $('#navbar_randSel').prop('disabled',false);
                 $('#navbar_randSel').css( "color", "white" );
                $.ui.loadContent('#randomSelect', false, false, "slide");
                break;
                case 'SHUFFLE':
                $('#navbar_shuffle').prop('disabled',false);
                $('#navbar_shuffle').css( "color", "white" );
                isShuffleMode = false;
                //buildExerciseControls();
                 $.ui.loadContent('#shuffle', false, false, "slide");
                
                break;
                case 'SELECT':
                $('#navbar_multiSel').prop('disabled',false);
                $('#navbar_multiSel').css( "color", "white" );
                 $.ui.loadContent('#multiSelect', false, false, "slide");
                break;
                default:
                $('#navbar_main').prop('disabled',false);
                $('#navbar_main').css( "color", "white" );
                 $.ui.loadContent('#main', false, false, "slide");
                 
                 document.getElementById("main").appendChild(document.getElementById('container'));
                

                
            }
        }
    }

    buildviewforDisplay = function(){
        if (xmlString) {
            console.log('load main panel');
            if (!isTypeAnsLoaded) {
                $.ui.showMask("building Exercise...");
                document.getElementById('typAnsResult').innerHTML = "0";
                document.getElementById('questTotal').innerHTML = "/" + arrInputControls.length;
                buildControls(xmlString,callbackControlBuild);
               
            }
            isTypeAnsLoaded = true;
            
         //   hideQuestionLayer(false);
           disablebody('type');
            //watchStart ('#totalTime',ansIntervalCounter,typeAnsStopWatch);
            //ansIntervalCounter = setTimer('#totalTime', ansCounter);   
        }
    }

   
    enableDisableFooter = function(isEnabled){
        if(isEnabled){
            $('#navbar_main').css( "color", "#A9A9A9" );
            $('#navbar_shuffle').css( "color", "#A9A9A9" );
            $('#navbar_multiSel').css( "color", "#A9A9A9" );
            $('#navbar_randSel').css( "color", "#A9A9A9" );
            $('#navbar_showAns').css( "color", "#A9A9A9" );
        }else{
            $('#navbar_main').css( "color", "white" );
            $('#navbar_shuffle').css( "color", "white" );
            $('#navbar_multiSel').css( "color", "white" );
            $('#navbar_randSel').css( "color", "white" );
            $('#navbar_showAns').css( "color", "white" );
        }
        $('#navbar_main').prop('disabled',isEnabled);
        
        $('#navbar_shuffle').prop('disabled',isEnabled);
        
        $('#navbar_multiSel').prop('disabled',isEnabled);
        
        $('#navbar_randSel').prop('disabled',isEnabled);
        
        $('#navbar_showAns').prop('disabled',isEnabled);
        
    }
    showHederControls = function(){
        $('#textLeftHdrEditCtrl').show();
        $('#textRightHdrEditCtrl').show();
        $('#shuffleLeftHdrEditCtrl').show();
        $('#shuffleRightHdrEditCtrl').show();
        $('#selectleLeftHdrEditCtrl').show();
        $('#selectleRightHdrEditCtrl').show();
        $('#randomleLeftHdrEditCtrl').show();
        $('#randomleRightHdrEditCtrl').show();
        $('#questionOptionSettings').show();
    }
    hideHederControls = function(){
        $('#textLeftHdrEditCtrl').hide();
        $('#textRightHdrEditCtrl').hide();
        $('#shuffleLeftHdrEditCtrl').hide();
        $('#shuffleRightHdrEditCtrl').hide();
        $('#selectleLeftHdrEditCtrl').hide();
        $('#selectleRightHdrEditCtrl').hide();
        $('#randomleLeftHdrEditCtrl').hide();
        $('#randomleRightHdrEditCtrl').hide();
        $('#questionOptionSettings').hide();
    }

    getPracticeMode = function(){
        
        //if(headerProp.showFeedback.toUpperCase() =='ON'){
            //if(headerProp.showFeedback.toUpperCase() =='ON'){
    //exerciseActicity = 1 is a test mode otherwise practiceMode
    exerciseActicity = getExerciseActivity();
        //if(headerProp.showFeedback.toUpperCase() =='ON'){
        if(exerciseActicity ==0){
            return true;
        }
        return false;
    }
    navigateToTypeView = function(){
       if($('#navbar_main').is(':disabled')){
      
       }else{
             $.ui.loadContent('#main', false, false, "slide");
       }
    }
    navigateToShuffleView = function(){
       if($('#navbar_shuffle').is(':disabled')){
      
       }else{
             $.ui.loadContent('#shuffle', false, false, "slide");
       }
    }
    navigateToSelectView = function(){
       if($('#navbar_multiSel').is(':disabled')){
      
       }else{
             $.ui.loadContent('#multiSelect', false, false, "slide");
       }
    }
    navigateToRandomView = function(){
       if($('#navbar_randSel').is(':disabled')){
      
       }else{
             $.ui.loadContent('#randomSelect', false, false, "slide");
       }
    }
    navigateToAnserView = function(){
       if($('#navbar_showAns').is(':disabled')){
        
       }else{
             $.ui.loadContent('#showAnswer', false, false, "slide");
       }
    }
    //"<div style='max-height:125px'><div id='scrollPopup' style='overflow:auto' class='table-thing with-label widget uib_w_2 d-margins' data-uib='app_framework/radio_button_group' data-child-name='af-group-0'><label class='narrow-control label-inline'>Group</label><div class='wide-control'><div class='widget uib_w_3 d-margins' data-uib='app_framework/radio_button'><input value='0' type='radio' id='af-radio-0' name='af-group-0'><label class='content-box' for='af-radio-0'>Radio0</label></div><div class='widget uib_w_6 d-margins' data-uib='app_framework/radio_button'><input value='1' type='radio' id='af-radio-4' name='af-group-0'><label class='content-box' for='af-radio-4'>Radio1</label></div><div class='widget uib_w_7 d-margins' data-uib='app_framework/radio_button'><input value='2' type='radio' id='af-radio-5' name='af-group-0'><label class='content-box' for='af-radio-5'>Radio2</label></div><div class='widget uib_w_8 d-margins' data-uib='app_framework/radio_button'><input value='3' type='radio' id='af-radio-6' name='af-group-0'><label class='content-box' for='af-radio-6'>Radio3</label></div><div class='widget uib_w_9 d-margins' data-uib='app_framework/radio_button'><input value='4' type='radio' id='af-radio-7' name='af-group-0'><label class='content-box' for='af-radio-7'>Radio4</label></div><div class='widget uib_w_10 d-margins' data-uib='app_framework/radio_button'><input value='5' type='radio' id='af-radio-8' name='af-group-0'><label class='content-box' for='af-radio-8'>Radio5</label></div><div class='widget uib_w_11 d-margins' data-uib='app_framework/radio_button'><input value='6' type='radio' id='af-radio-9' name='af-group-0'><label class='content-box' for='af-radio-9'>Radio6</label></div></div></div></div>",
    
    ClickMe = function() 
    {
    	
    	
    	   
     var strDiv ="<div  id='myPopup1'  style='height:380px;width330px;color:#000000;background-color:#000000;padding:0;margin:0;'>";

        strDiv = strDiv.concat("<table width='100%' >");

        strDiv = strDiv.concat("<tr><td width='35%'> <span style='color: #FFFFFF;display: block;font-size:20px;left:40px;vertical-align: middle;position: absolute;text-decoration: none;'>Select Feedback</span> </td>");

        strDiv= strDiv.concat("<td  width='65%'><select id='stickerdropdown' size='3'></select></td></tr>");

        strDiv= strDiv.concat("<tr style='height:20px;'></tr> ");

       strDiv= strDiv.concat("<tr><td  width='35%'> <span style='color: #FFFFFF;display: block;font-size:20px;left:40px;vertical-align: middle;position: absolute;text-decoration: none;'>Select Grade</span> </td>");
   
        strDiv= strDiv.concat("<td  width='65%' ><select id='gradesdropdown' size='3' ></select></td></tr>");
       strDiv= strDiv.concat("<tr style='height:10px;'></tr><tr><td colspan='2'>");
       strDiv= strDiv.concat("<tr> <td width='35%'> <span style='color: #FFFFFF;display: block;font-size:20px;left:40px;vertical-align: middle;position: absolute;text-decoration: none;'>Rework</span> </td>");
            strDiv= strDiv.concat(" <td width='65%'><input id='toggle1' type='checkbox' name='toggle1' value='0' ><label for='toggle1' width='100px' >abc</label></td>");
        strDiv= strDiv.concat("<tr style='height:20px;'></tr><tr><td colspan='2'>");

        strDiv= strDiv.concat("<textarea id='inputbx' cols='25' rows='11'   placeholder='Add Comments!' style='background-color:#FFFFFF;' overflow:'scroll'  onchange='updateFeedbackText();' >"+feedbackText+"</textarea></td></tr></table></div>");
       // <label for='foo2' style='color: #FFFFFF;display: block;font-size:20px;'>.</label>
        console.log('strDiv');
       // console.log(strDiv);
    //    var strDiv = document.getElementById('myPopup1').innerHTML;
        console.log(strDiv);
    //	string divhtml=  "<div  id='myPopup1'  style='height:270px;width300px;color:#838B8B;background-color:#000000;'><table style='width:100%;height:100%'><tr><td> <select id='stickerdropdown' size='4'></select></td></tr><tr><td><textarea id='inputbx'   placeholder='Type Feedback!' style='background-color:#FFFFFF;' overflow:'scroll' cols='30' rows='14' onchange='updateFeedbackText();' >"+feedbackText+"</textarea></td></tr></table></div>";
        
    	//alert(feedbackText);
    	//$.ui.showModal("#myPopup1","fadeout");
    	$("#afui").popup({
            title: "  Feedback",
            suppressTitle: true,
            message:strDiv,
          //  message:"<div  id='myPopup1'  style='height:280px;width330px;color:#000000;background-color:#000000;'><table ><tr><td > <select id='stickerdropdown' size='3'></select></td><td width='10px'></td><td><select id='gradesdropdown' size='3'></select></td></tr><tr style='height:10px;'></tr><tr><td colspan='3'><textarea id='inputbx' cols='25' rows='11'   placeholder='Type Feedback!' style='background-color:#FFFFFF;' overflow:'scroll'  onchange='updateFeedbackText();' >"+feedbackText+"</textarea></td></tr></table></div>",
            	cancelText: " OK ",
            cancelClass:"okbutton",
            addCssClass: "popupdecor",
           cancelCallback: function(){var sb=document.getElementById('toggle1'); console.log('toggle1'); console.log(sb);console.log(sb.checked);if(sb.checked){rework='1';}else{rework='0';}updateFeedback(feedbackText,'1',sticker,grade,rework);},
          //  cancelCallback: function(){updateFeedback(feedbackText,'1',sticker,grade);},
            
            // doneText: "Ok",
          //  doneCallback: function(){alert($('input[name="af-group-0"]:checked').val());},
            cancelOnly: true
        });
    	console.log('Rework in Popup');
    	console.log(rework);
    	
    	
    	if(rework=='1')
    	{
    		//console.log('check rework to true');
    		document.getElementById('toggle1').checked=true;
    		//document.getElementById('toggle1').checked='true';
    	}
    	else
        {
    		//console.log('check rework to false');
    	//	console.log(document.getElementById('toggle1').checked);
    		document.getElementById('toggle1').checked=false;
    		//document.getElementById('toggle1').checked='false';
    	}
    	
    	//document.getElementById('toggle1').checked='true';
    	loadStickers();
    	var stickerdropdown = document.getElementById('stickerdropdown');
    //	stickerdropdown
    	loadGrades();
    	
     //	 var $element = $('.afPopup');
    	//$element
     	// console.log('header');
     //	 console.log( $element.children('header'));
     //	  $element.children('header').style('color: #00FF00;');
    // 	$element.children('header').children('header').className='color: #00FF22';
     //	 console.log( 'afeter assigning class');
     //	 console.log( $element.children('header').className);
      	// $element.children('header').style='color: #FFFFFF;display: block;font-size:20px;left:40px;vertical-align: middle;position: absolute;text-decoration: none;';
        $("#scrollPopup").scroller();
    }  
   
    loadStickers = function()
    {
	    var ddInkData =[];
	    var ddInkObject ={};
	
	 //   ddInkObject.text= "Good Work";
	    ddInkObject.value= 1;
	  //  ddInkObject.description=".";
        ddInkObject.imageSrc= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAAyCAIAAACbCCTYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARsSURBVHhe7ZlbdiMrDEUzLg/I48loMpkeTLqQeAgQUGm7l+Ni759UoSegOu5178c3AEAH0gAADkgDADggDQDggDQAgAPSAAAOSAMAOCANAOCANACAA9IAAA5IAwA4IA0A4IA0AIAD0gAADkgDADggDQDggDSc5Ov+kbh/xbWN+PN5yzu3z+/OlfbyZC4oDeYjjtw+/0TbP6IDlEAadpEGHaWHx+c92UIaAo/cr2Z8wrfwvh/Vf5KGlx8I0jDkqtJgrlNv/4EblgRPmY+Xfwn/jO38ibt4+YHMG0AarkUrDQeP/ezL+CANufMn7uLlBzJv4LG5eXP2kAYdgLKmV54wVy+G8K4RR8xN/xay9zCJkBIowVr7B9qYH+I3EFer3LqW99/3lhltyn5C9lkZRakhvNuSyV5HBWzOiATa2xxUzwu2Uj0GXTPHc5stmTRQO7S1NmILaYj3rVdcjU4iuXfTOpCGaZI+S+B+71YfmLlZA9V2D6oB93tbnozarF9KP4vSav3O1dy3kls2iFc+2lyuuGoNffV2l2M74xFU70U9mtTmfSs2kIY0EXLDMgr1XdvpqHwT4mASLpLoYxUQ8gabLfUI8wYOzExXx7HqbZjTpu+eh1H5PEtBtaYQ6ztCciSXGN6uaP5YraSri6VmbDnTgJqt8VR7l+Wq0tCh9+vbAma42lEwwyfMkzgTlnnSqK12UXz0BzuvTnpb5LSdd5+Th9YUe12vOoMzB1L5hIT3L5s2PJtiTTIb7DST7V7sufYuyxbSUO62tyWGoxwHJH9eiyTTaXrSqK12oSSvUm5WfpHThprnVSdibwratVMHIk4lX/AOf9sKfi6xj5vRIEW9LKfauyp7/GfIxPKqvemxo5lfh0mm1ueM2sksspeDU52vclp7eV524p2nXVsmEHJEeFDn8BQ2Jgl0yc8lsXoEtnBCgz7un/GvY/VH6frsJQ1q68an4E1PNyDzJDOrP70/ZrWLgPjc7vdQMPc+CVzktJ2b51UnYm/Mdu3kgcSQ8Cf5hufb55e9GvFqktkCtnCi28uuQtCzmTTE+28mJMzHeHp0fGzCeZJorTo41optOX06rxO/eQMHpY7mSqkmvc1zahq12edFJ2KubM2avCwPRNzkfxaVXHmpREuy1qcsyFvTjN1LfGlddmU3acjj0qLz4E2PTkydcJrEt4otDl9kMINnJnTWgMbnhut0495O5FQ/+7w4CjEmz0i1FpuLNJ6F5GYdYuHqYrxmsoPXTL2XlCCF6Nuwq2uznzQE6oE0l+9Nj3r3CYdJBJ2qhLEZw2DmTmxAcBuIi1XquFZ/IxnPNZOMuq5v9lkZRbnn2a6tD+Sgr5kC25iql+oUvWbGewlrfoVNuKA0vDsyjyeUAeB/gjT8NuRXa9MfKvhFIA2/jKAM/JMBXg/SAAAOSAMAOCANAOCANACAA9IAAA5IAwA4IA0A4IA0AIAD0gAADkgDADggDQDggDQAgAPSAAAOSAMAOCANAOCANABAx/f3X2BqXHICAXzQAAAAAElFTkSuQmCC";
	    if(sticker == '1')
	    {
	       	 ddInkObject.selected= true;
	    }
	    else
        {
	    	ddInkObject.selected= false;
	    }
	    ddInkData.push(ddInkObject);
	
	    var ddInkObject ={};
	 //   ddInkObject.text = "See Me";
	    ddInkObject.value = 2;
	  //  ddInkObject.description=".";
	    ddInkObject.imageSrc= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAAyCAIAAACbCCTYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAXKSURBVHhe7Z0/dtpAEMZxzgIp8nICcgJI4yptOlziJp1LH8AuzRFSpYk5gTmBX4qYu5CdnV1pR/tJSEhgePl+hWN2dufverRIei9Xu91uRAghlg/hX0IISWBrIIQA2BoIIQC2BkIIgK2BEAJgayCEANgaCCEAtgZCCICtgRACYGsghADYGgghALYGQgiArYEQAmBrIIQA2BoIIQC2hsHZPn65urq6WYePnVnf9FpOyCAc3Br8Bk748rgNEnIBaP9i0Ugth7QGv63mq/ApsLmdnMelru9F+/L5rzLAch+L7q1hfTO53cgvi+ddwtvD1IvJRTBevriivSzH4TMhFbq2hu3jvRwXpg9vu6eZDimy1+wIIeSC0Wt+W8LZwB4YcswRQtpIwfPCjcjyOEV+h4Pl9IKqWXtSKTQZqmscflnqlepJZxYeeYydveFUtUWRWdhAoTMNJlmce5uOtcpARUkWhZAtS4VWbCRnV24hm5jOy/wRrKLctA512UX10WUOpErejY6tQaNr9txmQClSmAlFFxyslCNQr0hYLLJR5KtfW1Y1L4ifED4iQ43h2C2iM5AXdSCDQjSab8F0LF8NbRslfk2euzJD2CddjUSN+cGDRRUM9YqEluVudD9KG8IHq4swyhxF/0sPVK9+bIwuM4CjODHdWoMGWKYDEMIsgwtJCQMxCyZ4NOiX2RSpJj8WlBpPnBaRJbNq8QbjlKCrOqK6DwgncUDFqbAFQWcam/ECBWjG0IQqZk6MojSpYqsQZtt4JtiVUXMpd6BBv8zMSl1scCCZVc/zojLBuxDVRX9qwjdzhWBZBVFxWFId0XX+V+tC6nd0wM54b4ZuDRrlnixUUwAGY7ZyxDqyEkmt1WHmiLLFc+qD/K5BIkP7wolytLYNSGfqCArQjKEJVcwcYDGVNwSCRNnS6kowqHoQQ5Rb0ZkJcR8Df1qFb0zLrOZdhEjkwMD70u025PjjZ/dz8+dNP+Zs/766n4tre4fSr3r9O9gzdGilC+Ov31xV1aP1r5Woml27+pQjo88fx73CWc3l8e704ccwt2Ynnyr7+shokJ6GbF9IufUlnPBgrRVJ+KPZD2kBq7lTIZTPSdvuogul4xMK3aGrX8d+jBx2A2qkgzxw86X3LS7U1O0AV9XNz99btd1nIyqLB7ejNrcTPnLfz3HLHZ6qpfrrr+MA/6C3OHP4HqFFbbmLjr2Zj0TH1qCNcrS6r3mNTrttpXVoajo1UKinoFnaCt/enYaipkVV179/bkbTTxMZ6hHO4nq5fJEduJoP8c7h2x93yQtenZiGbF9EubdSUPnL7PVsXV8EcfiuEpzpsYvOn67vNYyXd5Ka/N1HeSvNjfhkuT+HUhhekep4GY56rJVgpJCaPzp3ahSZFmLvedareL1315PCM63qvdT021fd2D3DmT3JxcYcHfTtvW6vKLs1/tuJehV2WtKdt4/f08Nyywy0piHbPfNTEPUco9z5X+b6pvoubxPBUMR8tfOetd5FOLo6Dtkpg6KtsBPZ/ZyInpnQYS3e8cF3XOBg3aEvzINSL7PuZWojcVo6ISgtvBWQocZwVHE5qArCkmC11isHjMw4VTOj0NoiA8ZJFIUdgxZVikRnVu5s8XQqa6KXyJ9kDJguaxGtp8vDgqRgUImQWMg8D6qNmlPS9dQg+LNVNVaJTE9ssydbLontkO9UTk+l7t5KOBaK1PoQZc69mkIYwncjc3nT9m4Pw73DKY4Oco3QLwb7b076OxUlLrbEpnMpiVAcsnlqmYEO1Ge7f34CYuJI5bb5klzeyUGiJVq/EhdgGV+HXdQQ3VnC/0T/pLjD6Xxl9hYh58khpwZyKHrb+o59gZw/bA0nRO6VD/amAyFHhV8oCCEAnhoIIQC2BkIIgK2BEAJgayCEANgaCCEAtgZCCICtgRACYGsghADYGgghALYGQgiArYEQAmBrIIQA2BoIIQC2BkIIgK2BEJIxGv0D3YdBCS9IhxsAAAAASUVORK5CYII=";
	
	    if(sticker == '2')
	        {
	        	 ddInkObject.selected= true;
	        }
	        else
	        {
	        	 ddInkObject.selected= false;
	        }
	
	    ddInkData.push(ddInkObject);
	
	    
	
	    var ddInkObject ={};
	   // ddInkObject.text="Awesome";
	    ddInkObject.value= 3;
	 //   ddInkObject.description=".";
	    ddInkObject.imageSrc= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAAyCAIAAACbCCTYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAXJSURBVHhe7Z0/dho/EMfx7yyQIi8nICeANK7SpluXuEnn0gewS3OEVGliTmBO4Jci5i78NBppd2Y1K7Rg8Bp/P0UCGmn+aTKrZfe9XGy32xEAAGj+C38DAIAArQEAYIDWAAAwQGsAABigNQAADNAaAAAGaA0AAAO0BgCAAVoDAMAArQEAYIDWAAAwQGsAABigNQAADNAaAAAGaA3nwOrq4uLiahW+gYGzuf/6Dvarb2vwRSj4er8JEnDmcEFjwz8KPVqDL435MnwLrK8nw2h/76MTD5UPlT2UShHFrWF1Nble04fqcSt4uZt6MTh7xosnt+FPi3H4Ds6bwtawub+l48L07mX7MOMhhupFjwAAzgG++O8gnA30gSFFHSGojdQ8Vm6Elscp9NkcbKbXtM3qk0qtSdFeE0gmynmJP4RWlJrmIRkszzEVM53RJQ5IJTnqhVK18Cl1SY5pfwjTrlKSuEoky6RQi5VkcKXil/XZU2VnZzhtbVGkFr45Za2B8ykzk5LmXMSaCEmXOaizHOlWRFRVMmr7aq+OU7001ZWzXYfR7KoogQDr5a/Z6BIDdhQphmeeqLhdi0Qzlq427SolHFN3rjp84tWWqDvLpoteUTaZHQ6UlYpf2wQTDTVT/YTw1TKUDUdvB8+wvHhbiloDhyK2PSVkoAkwZLOVPZUAa9Av02kSiQxKlSdOC8nErG4eq9YE70JUF/1JSoIXqblEsMyCqDgsaY/wOv9RuyD9jg7oGQWEhS3nCFYljUTUmDWhjZoTXe3IVfwmPaI1JFWeEXpl1NzIHdagX6ZmSRczDohZnXiDcUrQ1R5h3XuEIxxgsRQOhldqDVaEIgE60xFjMCYyhazn8iit5Qlb1xADM/xJYrAsKNM0q3qUquizqiIDITcM7MRcyNb8qJUcNWZNaJOEmVEobLexRMnS9kpjkPVYvEapJMHm91Qr2xVOlFtrh0PRz5DjT1/cn+u/L/w1ZfPv2f1ZXepfKP2q53+v9hzctNIL/1ZGeNJSBMfAzH7Sji7nTgXRPPwaf/vuBBzo6veSPJxdul1vRkZfPp3+d/3JZyrA0yFyldmpd1IqpXt6QDjLOb0JML37uX89H5WyJxRcZcvfx34UHBJttdFXeGgWHrNI/dy3C/FP77jjO3yP4P7gS8F3zlBFro+4Olr/+rPhkLh0jhvdB+PYySzc00Oo7lwtra8nA33Doqw1cA8dLW87XoXjNtlqHbx5va6Xpp6avHQnmz+/3HHBFdNBD1v56b7Dd5XgjL+guM91FdV1tCKj088TGjrQ/768/HXhBtMnJhPpuygV4oA9LQunulwsnqiKlvNBvmJa+F7DeHFD/xLSdx/pzTI34vPoYmyE4RWpnr016tFWgpFaqjLpbhJIxnuUO8Slu7i6ar/cmSMYiqjzuvfs+dadSuqAuY5uqYq+f+MiyUfXCb+91+8VZbfGH1fZdAhddPbN/Q95X7U7e/3I7FQUNSEPr1Q8XkXxnu4ZzuyBjqHy6LDPbh8HvgSWUB+l2/Cpzjqbxx/4zB9j7MGuM36YZ0q9TLuXqCWSxdMprYleWv6IMcN0HV9tXS4PC5pJDkMJISwkngfVybigQ6uw3DGj1lqQPZ4SRJaresy0yFJLNLBSIQ7Z02w4KpMOVhCWBKvKwptQeGog/FG6nQaKjw/oswedcoptn7s+p6e1d95KuAsgqfYhypx71h5J3GIxxS18uqHrRyHc4BtcgE184ZZLXSr4gqIPlvnoTPjGYPevVf7WtYHCa9KvQ6e90V4UZK8n3TtFoqGXCtFjTw8Lpz465E+PJwb/U/bQcafg+VK1IQBOQI9TA3gL+NfwG/QFcGLQGoYNPVYZ7qNvcMbghgIAYIBTAwDAAK0BAGCA1gAAMEBrAAAYoDUAAAzQGgAABmgNAAADtAYAgAFaAwDAAK0BAGCA1gAAMEBrAAAYoDUAAAzQGgAABmgNAAADtAYAQMJo9D/TUkEJRfib/AAAAABJRU5ErkJggg==";
	    if(sticker == '3')
	        {
	        	 ddInkObject.selected= true;
	        }
	        else
	        {
	        	 ddInkObject.selected= false;
	        }
	    ddInkData.push(ddInkObject);
	
	    
	
	    var ddInkObject ={};
	   // ddInkObject.text= "Great";
	    ddInkObject.value= 4;
	  //  ddInkObject.description=".";
	    ddInkObject.imageSrc= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAAyCAIAAACbCCTYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAP+SURBVHhe7do7VttAFIBhlLUYihxWYFZg0lBlCXIJTTpKFgAlLCFVmtgrgBVwUoD34sxTmsfVmEHBOcj/VwCe0dwri9H1WFKz3W6PACD2xf0GgAClAYCA0gBAQGkAIKA0ABBQGgAIKA0ABJQGAAJKAwABpQGAgNIAQEBpACCgNAAQUBoACCgNAASUBgACSsMBWS+bplmu3avP5PPu+ec17dJgZlTg7G7jegAUTbY0bO7Omub8wb1ynq6OD+azxxyAj323e0iB/2aipWG9PL560n+0q23g9XZuugHsMMnSsLm70cuF+e3r9n5hm6zZ5WPSAkA0xdKw+f1Trxja68uZbZDZ5bATXoXo18ndtQrf3Y/JLlvE1zV2rLKj3PHG5ThvzKI2s8umh3Np0zB9FmN8iuEIcY+ShS8cGe19e2469Gs/PBuKnFtqT8mq1W8s/iqRstvE9CpDs1875vP4y0e7Ssf0GcQvKj5cRsjtQpXjVGTJU+gMprVt074gxOgU5QjCOw8P43D3yD3PAvc5MWSCpcFOEnk+O26q9BPETSzb4GdZF6Kbdl2LDeDGm+54stkR8gQ0Y8PdUw1my3KcyixSpz9D+uR2I7/V+BQ7IqzaJFJ4LOyG0ZHpDs3IPffDk+woOcjSYGfK4EwKJ5VlWtI561v8vMvJ+yBl18pxarMI78LGGHzb/yDFmyLYUQHbZ8fmh8UYuefCcOwywWsNs5NT9fPpz6t9mdu8PKuf7UV8hdKMen75+AcfFj/0pJYvAuydfdv7Yr7zu3tHCfGfUrLfPT9AU7wMefxVf548/NrPOefmtPSR9ChfB9X3SfrPTlMjVH0ox6nPUm18ih0R3I2jcIPhj/saezg4B2iKpWH27bupDTcDzz7az5ukdNjpdXpSPZPEaLuZ+qCZs0MNL8d5Z5Ya41OUI9gbR+oEFm8fj8m+h4NzgCb5XMPs8lqfb/mzj/relWpZXJjT8bzvdI9IVaxnez5anMulEqhVddhh1zhKOU5tFne+1HxDGp+iGCE/gdfL4HFVPza6K5wcqyHVe27ofoWn5wfYj67pyS52eXbdKa1k/aWy7OqabYmuxZnxXcvAulhc4kob+0DlOFVZ0iOgtzIBks3jttEpihGyPnuDuHwY+5HJXsRtpbzi8G7vo/8rOpNcNWhmwZ7OFz077HJ2cR/Paz0/3v+9VEVLThOTS37wcnEfb6pS+8zlOFVZzBEYOF+GjU9RiqD6gs1V6+O1Xkh09Ng4XiF3onLPsVOjyoP7EwC8ya4aAIxBaQAgoDQAEFAaAAgoDQAElAYAAkoDAAGlAYCA0gBAQGkAIKA0ABBQGgAIKA0ABJQGAAJKAwABpQGAgNIAIHN09BdQdhC3upVAvQAAAABJRU5ErkJggg==";
		if(sticker == '4')
	        {
	        	 ddInkObject.selected= true;
	        }
	        else
	        {
	        	 ddInkObject.selected= false;
	        }
		ddInkData.push(ddInkObject);
		
		  var ddInkObject ={};
		   // ddInkObject.text= "Great";
		    ddInkObject.value= 5;
		  //  ddInkObject.description=".";
		    ddInkObject.imageSrc= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAAyCAIAAACbCCTYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARkSURBVHhe7Zs9WhsxEIbtnMVQ5OEE5gRAQ8UR7JI0dClzANxyBCoa8AngBDwpwHdx9OuVtCNp1+CAve9bOFlpZjS2Rt9qZTxer9cjAICYH+5fAIAApAEABJAGABBAGgBAAGkAAAGkAQAEkAYAEEAaAEAAaQAAAaQBAASQBgAQQBoAQABpAAABpAEABJAGABBAGgBAAGn4WlaL0/F4PF+6y2EwyDe9dxy8NCznqgrlMrQVerpYuWs4IOy8M7nbc/DScHY5U693D21tWD3ev4xG06uLiWuA7wGbim/B4T9Q5LQBZQAoMICzBqsNr2/x1tIqw+z3NcpwwJwcM73bMoRjSKMNL/ePoTY4Zbg8c9cK+3TqCfazpkNf252ueoI9FQ4pjFXp2dZ7W3L75cgqCVeIkE2+M1Hw+UJfRcOXEqv1hulVclOWR7/U1IzuzgOHT5oC6MN6CDzpfcP09t1dKkzL7Mldrd9vp+bTiPAOxjZk9lQNmNAKodHWdmDvJ5lls9i4FZPvhBghjFFKrNbbDj6dhm86ph1L27Vaq1NgPeQxoAvDkAZbKEEdRVVkizeuonDJ2iqLLcoBE9ziSOtYmwvjNFGcn2lIB/QBasl3QErPtPmWYmKVXim49cjmZ12ibjdG1GjagrjmemMgBIFeDEQakjqKq8jXXRvrEFs7SgETbHy5N6hgyazpzgWx7RLRaiwgLiLT6CL0T6zpzQdPGxuEbjNI6mAac1NQGQOqDOGsQROdNywf7lTVhOcM/QkDrhZ/CgFXb6/qtTqcaDY5PlGv+gj17EbXevQA/km8/9Xf1Pw8cpctyolV0q4F/wjdpwC2YCjSENZRogyuuKX7y3Ph+wuzVk1Ac6Q5vb3ZbVlOrp/9vVBhNELpw5bJt9jpUf6uglenYEeaNAwGIw2NNqR7BnuLk/4oqszk4soU5tKUZf7vIzrGF83sym+WltEHjdk+K+Ntk08pRCgn1iXtj6eXoTAF5pPqpY6QYCttENhnU+F03HSkrfoGbRuSp9iGzT288lzv4kdGqk2HDB+JnVkzUtjg7D2NnzOKeoPkN1nmU2yN6328SzGxvr0unbApxfikn5bssIlWmQLozZCkwZepUGSbnpigusVC9oWZr3KHGF972QjeXzJzJS90JSs3xQV1OZZSbNZXTLPaConVenPBCxnFLtrOjCA6eNu00+ZUetdQ5rClIS0MV8NywaQ1vLHK16Xz6VaA8QJyPq0AURbN6lPE+UVdheTtsIm1QJidsjbx8sO34pV7w+AqM2tc/NQCD21nLmWHTDAboDgGFBnUruHzKZTsN8FkWFeGlC3dvoDvPwV7ynCOIXfAHnxjZg4Ee/9SZDk/V29sH356xpeWOwNp2J7/86Xlh9Ap1jOMf5uh0MKwFz8924Mp2FvGaufg/gsA4GHXAAACSAMACCANACCANACAANIAAAJIAwAIIA0AIIA0AIAA0gAAAkgDAAggDQAggDQAgADSAAACSAMAtBiN/gEwXRjL5JWQOgAAAABJRU5ErkJggg==";
			if(sticker == '5')
		        {
		        	 ddInkObject.selected= true;
		        }
		        else
		        {
		        	 ddInkObject.selected= false;
		        }
	    ddInkData.push(ddInkObject);
	
	   // var stickerdropdown = document.getElementById('stickerdropdown');
	    //   console.log('stickerdropdown');
	       //console.log(stickerdropdown);
	       $('#stickerdropdown').ddslick({
	   
	        data: ddInkData,
	        width:"350px",
	        ctrlHeight: "40px",
	        ctrlWidth:"350px",
	        imagePosition: "center",
	        selectText: "Select Feedback",
	
	        onSelected: function (selectedData) {
	        console.log('updated sticker selectedData in main');
	        console.log(selectedData.selectedData.value);
	        sticker=selectedData.selectedData.value;
    	    }
	
	    });
	
	

    }
    
    loadGrades = function()
    {
    	//Dropdown plugin data
    
    	var ddInkData =[];
    	var ddInkObject ={};
    	        
    	ddInkObject.text = "A";
    	ddInkObject.value= 1;
        if(grade == '1')
        {
        	 ddInkObject.selected= true;
        }
        else
        {
        	 ddInkObject.selected= false;
        }
    	ddInkData.push(ddInkObject);
    	
    	 var ddInkObject ={};
    	ddInkObject.text ="B";
    	ddInkObject.value = 2;
    	if(grade == '2')
        {
        	 ddInkObject.selected= true;
        }
        else
        {
        	 ddInkObject.selected= false;
        }
    	ddInkData.push(ddInkObject);
    	
    	 var ddInkObject ={};
    	ddInkObject.text= "C";
    	ddInkObject.value= 3;
    	if(grade == '3')
        {
        	 ddInkObject.selected= true;
        }
        else
        {
        	 ddInkObject.selected= false;
        }
    	ddInkData.push(ddInkObject);
    	
    	 var ddInkObject ={};
    	ddInkObject.text= "D";
    	ddInkObject.value= 4;
    	if(grade == '4')
        {
        	 ddInkObject.selected= true;
        }
        else
        {
        	 ddInkObject.selected= false;
        }
    	ddInkData.push(ddInkObject);
    	
    	 var ddInkObject ={};
        ddInkObject.text= "E";
        ddInkObject.value= 5;
        if(grade == '5')
        {
        	 ddInkObject.selected= true;
        }
        else
        {
        	 ddInkObject.selected= false;
        }
    	ddInkData.push(ddInkObject);
    	
    	
    		    
    	    
    	
    	
   	$('#gradesdropdown').ddslick({
    	    data: ddInkData,
    	    width: "350px",
    	    ctrlHeight: "40px",
    	    ctrlWidth: "350px",
    	//    imagePosition: "center",
    	  //  selectText: "Select Grade",
    	 //   imagePosition: "left",
    	  //  selectText: "Select your favorite social network",
    	    onSelected: function (selectedData) {
    	    	console.log(' updated grades selectedData in main');
    	        console.log(selectedData.selectedData.value);
    	       
    	        //console.log(selectedData.value);
    	        grade=selectedData.selectedData.value;
    	    }
    	});
   	
	//$('#gradesdropdown').dd-options { max-height: 100px; overflow-y: auto; }
    }
    updateFeedbackText= function()
    {
    	// local variable used in page load
    	feedbackText = document.getElementById('inputbx').value;
    	console.log('Updated Feedback Text in main');
    	console.log(feedbackText);
    }
   
   
    
        resetAllControls = function () {
        try {
         //   clearAllLayers();
            $('#multiNoAttempts').text('');
            $('#randomNoAttempts').text('');
            $('#noAttempts').text('');
            $('#shuffleNoAttempts').text('');
            for (var prop = 0, len = arrInputControls.length; prop < len; prop++) 
            {
                var inputCtrl = document.getElementById(arrInputControls[prop].id);
                $("#" + arrInputControls[prop].id).remove();
                
                //Priya 
                var dragInputCtrl = document.getElementById('drag' + inputCtrl.id);
                if (typeof dragInputCtrl != 'undefined' && dragInputCtrl != null) {
                    document.getElementById('shuffle').removeChild(dragInputCtrl);
                }
                // Changes end
                var lblInputCtrl = document.getElementById('lbl' + inputCtrl.id);
                if (typeof lblInputCtrl != 'undefined' && lblInputCtrl != null) {
                    document.getElementById('showAnswer').removeChild(lblInputCtrl)
                }
                var cmbInputCtrl = document.getElementById('cmb' + inputCtrl.id);
                if (typeof cmbInputCtrl != 'undefined' && cmbInputCtrl != null) {
                    document.getElementById('multiSelect').removeChild(cmbInputCtrl)
                }
                var lblSelectCtrl = document.getElementById('lblSelect' + inputCtrl.id);
                if (typeof lblSelectCtrl != 'undefined' && lblSelectCtrl != null) {
                    document.getElementById('multiSelect').removeChild(lblSelectCtrl)
                }
                var clkInputCtrl = document.getElementById('clk' + inputCtrl.id);
                if (typeof clkInputCtrl != 'undefined' && clkInputCtrl != null) {
                    document.getElementById('randomSelect').removeChild(clkInputCtrl)
                }
                if (typeof document.getElementById('randAnswerDiv') != 'undefined' && document.getElementById('randAnswerDiv') != null) {}
            }
            $("#randAnswerDiv").fadeIn();
            arrInputControls = [];
            xmlString = null;
            randomCopyArray = null;
            isSuffleLoaded = isTypeAnsLoaded = isCmbLoaded = isShowAnsLoaded = isRandSelLoaded = false
        } catch (ex) {
            console.log('error while resetting all contols' + ex)
        }
    }

    resetTimers = function () {
        stopCounters();
        
        $('#totalTime').text('');
        $('#shuffletotalTime').text('');
        $('#multitotalTime').text('');
        $('#randomtotalTime').text('')
    }
    stopCounters = function () {
       watcherStop();
        clearInterval(ansIntervalCounter);
        clearInterval(shuffleIntervalCounter);
        clearInterval(randomIntervalCounter);
        clearInterval(clkIntervalCounter);

    }
    var x,$time,objWatcherName;
    
    initiateWatcher = function(){
        //x = new clsStopwatch(); 
        //counterName = ctrlNameCounter;
    }
    watchStart = function(ctrlName,counterName,stopWatcherObject){
        $time = ctrlName;
        objWatcherName = stopWatcherObject;
         counterName = setInterval("watcherUpdate()",1);
         stopWatcherObject.start();
    }
    watcherUpdate = function () {
    //$time.innerHTML = formatTime(x.time());
    if(objWatcherName){
        $($time).text(formatTime(objWatcherName.time()));
        }
    }
    watcherStop = function (){
        if(objWatcherName){
        objWatcherName.stop();
        clearInterval(ansIntervalCounter);
        }
    }
    setExerciseName = function(exerciseName){

        currExerciseName = exerciseName;
    }
    setTimer = function (ctrlName, counterName) {
       // $(ctrlName).text(getUpdateTime());
       /* return setInterval(function () {
            $(ctrlName).text(setTime())
        }, 1000)*/
        //$time = ctrlName;
        //watchStart(ctrlName);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }

    function setTime() {
        var currentDate = new Date();
        var m = currentDate.getMinutes();
        var s = currentDate.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        return m + ":" + s
    }
    // Priya June2014 updated this function to disable controls 
    restCurrentPage = function (currentPage) {
    	console.log('restCurrentPage');
        setLocaltoSave(false);
        switch (currentPage) {

        case 'type':
            isTypeEditStart = false;
            $('#totalTime').text('');
            $('#noAttempts').text('');
            for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
                $("#" + arrInputControls[prop].id).remove()
            }
            isTypeAnsLoaded = false;
            console.log('b4 type panel load');
            typeAnsloadedPanel();
            console.log('after type panel load');
            console.log('b4 disable body');
            disablebody('type');
            console.log('after disable body ');
            break;
        case 'shuffle':
            isShuffleEdit = false;
            $('#shuffletotalTime').text('');
            $('#shuffleNoAttempts').text('');
            $('#shuffleResult').text('0'); // Priya added this line
          // Priya commented this clearShuffleLayers();
            for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
            	 var inputCtrl = document.getElementById(arrInputControls[prop].id);
                 var dragCtrl = document.getElementById('drag' + inputCtrl.id);
                /* console.log('inputCtrl.id');
                 console.log(inputCtrl.id);
                 console.log('dragCtrl');
                 console.log(dragCtrl);*/
                 if (typeof dragCtrl != 'undefined' && dragCtrl != null) {
                	var shuff= document.getElementById("shuffle");
                	/*console.log('shuff');
                	console.log(shuff);
                	console.log('dragCtrl.remove()');*/
                	dragCtrl.remove();
                 }
            }
            isSuffleLoaded = false;
            shuffleloadedPanel();
            disablebody('shuffle');
            break;
        case 'pick':
            isSelectEdit = false;
            $('#multitotalTime').text('');
            $('#multiNoAttempts').text('');
            for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
                var inputCtrl = document.getElementById(arrInputControls[prop].id);
                var cmbInputCtrl = document.getElementById('cmb' + inputCtrl.id);
                if (typeof cmbInputCtrl != 'undefined' && cmbInputCtrl != null) {
                    document.getElementById('multiSelect').removeChild(cmbInputCtrl)
                }
                var lblSelectCtrl = document.getElementById('lblSelect' + inputCtrl.id);
                if (typeof lblSelectCtrl != 'undefined' && lblSelectCtrl != null) {
                    document.getElementById('multiSelect').removeChild(lblSelectCtrl)
                }
            }
            isCmbLoaded = false;
            multiSelloadedPanel();
            disablebody('select');
            break;
        case 'random':
            isRandomEdit = false;
            $('#randomtotalTime').text('');
            $('#randomNoAttempts').text('');
            for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
                var inputCtrl = document.getElementById(arrInputControls[prop].id);
                var clkInputCtrl = document.getElementById('clk' + inputCtrl.id);
                if (typeof clkInputCtrl != 'undefined' && clkInputCtrl != null) {
                    document.getElementById('randomSelect').removeChild(clkInputCtrl)
                }
            }
            isRandSelLoaded = false;
            randSelloadedPanel();
            $("#randAnswerDiv").fadeIn();
            disablebody('random');
            break
        }
    }
    typeAnsloadedPanel = function () {
    	console.log('typeAnsloadedPanel');
    	// 5Nov2014
    	if(device.platform !=null){
            try{
    	      console.log('lock orientation to landscape');
              window.screen.lockOrientation("landscape");
            }
            catch(ex){
                //catch exception
                console.log(ex);
                } 
        }
        $('#typeExerciseName').text(currExerciseName);
        stopCounters();
        setLocaltoSave(false);
        localFolderAnsObj = getLocalFolderAnswers();
        if(localFolderAnsObj.listExcerciseModes){
            if(localFolderAnsObj.listExcerciseModes[0].Attempts){
                $('#noAttempts').text(localFolderAnsObj.listExcerciseModes[0].Attempts);

            }
            if(localFolderAnsObj.listExcerciseModes[0].TimeTaken){
                typeAnsStopWatch = new clsStopwatch();
                $('#totalTime').text(localFolderAnsObj.listExcerciseModes[0].TimeTaken);
            }
            if(localFolderAnsObj.listExcerciseModes[0].Score){
                $('#typAnsResult').text(localFolderAnsObj.listExcerciseModes[0].Score);
            }
        }

        if ($('#totalTime').text().length == 0) {
            $('#totalTime').text("00:00");
            ansCounter = 0;
             typeAnsStopWatch = new clsStopwatch();
        } else {
            ansCounter = parseInt($('#totalTime').text());
        }
         watchStart ('#totalTime',ansIntervalCounter,typeAnsStopWatch);
        
        currentPage = 'main';
        typeAnsBuildView()
    }
    
    typeAnsBuildView = function () {
        if (xmlString) {
            isTypeEditStart = false;
            console.log('load main panel');
            if (!isTypeAnsLoaded) {
                $.ui.showMask("building Exercise...");
                document.getElementById('typAnsResult').innerHTML = "0";
                document.getElementById('questTotal').innerHTML = "/" + arrInputControls.length;
                buildControls(xmlString,callbackControlBuild);
               
            }
            isTypeAnsLoaded = true;
            document.getElementById("main").appendChild(document.getElementById('container'));
           // hideQuestionLayer(false);
            
            /*
            var objCanvas = document.createElement("canvas");

            objCanvas.id='canv1';

            //var objCanvas= new Kinetic.Canvas(canvasBackgroundImage.width,canvasBackgroundImage.height,1);

            console.log('objCanvas');

            console.log(objCanvas.id);

         // Make it visually fill the positioned parent
           // objCanvas.style.width ='100%';
           // objCanvas.style.height='100%';
            // ...then set the internal size to match
           
           
            
            
            console.log(' document.getElementById("container")');
            console.log( document.getElementById("container"));
            console.log( document.getElementById("container").style.width);
            console.log( document.getElementById("container").style.height);
           
            var canvasWidth=document.getElementById("container").style.width;
            var canvasHeight=document.getElementById("container").style.height;
            var canvasTop=document.getElementById("container").style.top;
            var canvasLeft=document.getElementById("container").style.left;
            
            objCanvas.style.width=canvasWidth;
            objCanvas.style.height = canvasHeight;
            objCanvas.style.left=canvasLeft;
            objCanvas.style.top=canvasTop;
            
            console.log('objCanvas');
            objCanvas.style.zIndex   = 8;
            objCanvas.style.position = "absolute";
            objCanvas.style.border   = "1px solid";
            
            var context = objCanvas.getContext('2d');
            context.strokeStyle = 'blue';
            context.lineWidth = '5';
            context.fillRect(canvasLeft, canvasTop,canvasWidth,canvasHeight);//strokeRect(0, 0,1225,768);
            context.strokeRect(canvasLeft, canvasTop,canvasWidth,canvasHeight);
            context.fillStyle = "#FF0000";
            document.getElementById("main").appendChild(objCanvas);

            
            var sketcher = new Sketcher("canv1");

          console.log('sketcherobjCanvas');

          console.log(sketcher);
           */
           
            //watchStart ('#totalTime',ansIntervalCounter,typeAnsStopWatch);
            //ansIntervalCounter = setTimer('#totalTime', ansCounter);   
        }
    }
    callbackControlBuild = function(){
        alert('callback done');
       // shuffleloadedPanel();
    }
    checkAnsCounterNeedsStop = function (typeAnsCounter) {
        if (typeAnsCounter == arrInputControls.length) {
            clearInterval(ansIntervalCounter)
        }
    }
    unloadedTypeAns = function () {

        if (getExerciseColl('typeAns').length) {
            //console.log(JSON.stringify(getExerciseColl('typeAns')))
        }
    }
    unloadedShuffleAns = function () {

        if (getExerciseColl('shuffleAns').length) {
            //console.log(JSON.stringify(getExerciseColl('shuffleAns')))
        }
    }
    unloadedMultiSelAns = function () {
        if (getExerciseColl('multiSelAns').length) {
            //console.log(JSON.stringify(getExerciseColl('multiSelAns')))
        }
    }
    unloadedRandSel = function () {
        if (getExerciseColl('randSelAns').length) {
            //console.log(JSON.stringify(getExerciseColl('randSelAns')))
        }
    }
    shuffleloadedPanel = function () {
    	console.log('shuffleloadedPanel priya');
    	// 5Nov2014
    	if(device.platform !=null){
            try{
    	 console.log('lock orientation to landscape');
         window.screen.lockOrientation("landscape");
            }
            catch(ex){
                //catch exception
                console.log(ex);
                } 
        }
        $('#shuffleExerciseName').text(currExerciseName);
        setLocaltoSave(false);
        stopCounters();
        localFolderAnsObj = getLocalFolderAnswers();
        console.log('localFolderAnsObj');
        console.log(localFolderAnsObj);
        
        if(localFolderAnsObj.listExcerciseModes){
        	if(localFolderAnsObj.listExcerciseModes.length== '1')
        		{
        		  if(localFolderAnsObj.listExcerciseModes[0].Attempts){
                      $('#shuffleNoAttempts').text(localFolderAnsObj.listExcerciseModes[0].Attempts);
                  }
                //  console.log('here time2');
                  //console.log(localFolderAnsObj.listExcerciseModes[1].TimeTaken);
                  if(localFolderAnsObj.listExcerciseModes[0].TimeTaken){
                      shuffleStopWatcher = new clsStopwatch();
                      console.log('here time');
                      console.log(localFolderAnsObj.listExcerciseModes[0].TimeTaken);
                      $('#shuffletotalTime').text(localFolderAnsObj.listExcerciseModes[0].TimeTaken);
                      $('#shuffletotalTime').text=localFolderAnsObj.listExcerciseModes[0].TimeTaken;
                      	 $('#shuffletotalTime').innerHTML=localFolderAnsObj.listExcerciseModes[0].TimeTaken;
                      	 $('#shuffletotalTime').innerText=	 localFolderAnsObj.listExcerciseModes[0].TimeTaken;
                  }
                  if(localFolderAnsObj.listExcerciseModes[0].Score){
                      $('#shuffleResult').text(localFolderAnsObj.listExcerciseModes[0].Score);
                  }

        		}
        	else
        		{
        		  if(localFolderAnsObj.listExcerciseModes[1].Attempts){
                      $('#shuffleNoAttempts').text(localFolderAnsObj.listExcerciseModes[1].Attempts);
                  }
                //  console.log('here time2');
                  //console.log(localFolderAnsObj.listExcerciseModes[1].TimeTaken);
                  if(localFolderAnsObj.listExcerciseModes[1].TimeTaken){
                      shuffleStopWatcher = new clsStopwatch();
                      console.log('here time');
                      console.log(localFolderAnsObj.listExcerciseModes[1].TimeTaken);
                      $('#shuffletotalTime').text(localFolderAnsObj.listExcerciseModes[1].TimeTaken);
                      $('#shuffletotalTime').text=localFolderAnsObj.listExcerciseModes[1].TimeTaken;
                      	 $('#shuffletotalTime').innerHTML=localFolderAnsObj.listExcerciseModes[1].TimeTaken;
                      	 $('#shuffletotalTime').innerText=	 localFolderAnsObj.listExcerciseModes[1].TimeTaken;
                  }
                  if(localFolderAnsObj.listExcerciseModes[1].Score){
                      $('#shuffleResult').text(localFolderAnsObj.listExcerciseModes[1].Score);
                  }

        		}
                  }
        console.log('localFolderAnsObjTime');
      //  console.log(localFolderAnsObj.listExcerciseModes[1].TimeTaken);
        
        console.log('shuffletotalTime');
        console.log($('#shuffletotalTime').text());
        console.log($('#shuffletotalTime').text().length);
        
        if ($('#shuffletotalTime').text().length == 0)
        {
            shuffleCounter = 0;
             $('#shuffletotalTime').text("00:00");
             shuffleStopWatcher = new clsStopwatch();
        } else
        {
            shuffleCounter = parseInt($('#shuffletotalTime').text())
        }
        
        currentPage = 'shuffle';
        console.log('shuffleloadedPanel');
        
        console.log('shuffletotalTime2');
        console.log($('#shuffletotalTime').text());
       
    //    console.log('xmlString');
      //  console.log(xmlString);
        if (xmlString) {
        	// console.log('inside xmlString');
            isShuffleEdit = false;
            //priya commented this
    //        showQuestionLayer(true);
            randomCopyArray = arrInputControls.slice();
            if (!isSuffleLoaded) {
            	console.log('document.getElementById(shuffletotalTime).innerText.length');
            	console.log(document.getElementById('shuffletotalTime').innerText.length);
                if(document.getElementById('shuffletotalTime').innerText.length==0) 
                {
                document.getElementById('shuffletotalTime').innerHTML = "0";
                }
                //priya addedthis
                if(document.getElementById('shuffleResult').innerText.length==0) 
                {
                document.getElementById('shuffleResult').innerHTML = "0";
                }
                //changes end
                document.getElementById('shuffleQuestTotal').innerHTML = "/" + arrInputControls.length;
                //$(xmlString).siblings('NewDataSet').find('DetailProperties').each(function () {
                    dataString = $(xmlString);
                    controlCount =0;
                    localFolderAnsObj = getLocalFolderAnswers();
                    $(dataString).find('DetailProperties').each(function () {
                    var defaultCtrlVal ='';
                    var ctlAns='';
                    
                    if(localFolderAnsObj.listExcerciseModes){
                        var ctrlID = parseInt($(this).find('CtlID').text());
                        
                        if(localFolderAnsObj.listExcerciseModes.length == '1')
                        	{
                        	if(localFolderAnsObj.listExcerciseModes[0].listControls.length>0)
                            {
                                ansObject = $.grep(localFolderAnsObj.listExcerciseModes[0].listControls, function(e){ return e.CtlID == ctrlID });
                                 if(ansObject && ansObject[0].CtlValue)
                                 ctlAns = ansObject[0].CtlValue; //localFolderAnsObj.listExcerciseModes[1].listControls[controlCount].CtlValue;
                             }}
                        else
                        	{if(localFolderAnsObj.listExcerciseModes[1].listControls.length>0)
                            {
                                ansObject = $.grep(localFolderAnsObj.listExcerciseModes[1].listControls, function(e){ return e.CtlID == ctrlID });
                                 if(ansObject && ansObject[0].CtlValue)
                                 ctlAns = ansObject[0].CtlValue; //localFolderAnsObj.listExcerciseModes[1].listControls[controlCount].CtlValue;
                             }}
                        
                        
                    }
                    if(ctlAns.length){
                    	// 05Nov2014 commented and replaced following line
                    	//defaultCtrlVal = $(this).find('CtlDefaultValue').text();
                    	defaultCtrlVal = ctlAns;
                    }else{
                        defaultCtrlVal = randomSelectItem($(this).find('CtlDefaultValue').text());
                        if (defaultCtrlVal) {
                            defaultCtrlVal = defaultCtrlVal.value
                        }
                    }
                    var rightAns = $(this).find('CtlDefaultValue').text(); //Priya
                  //  console.log(defaultCtrlVal);
                   // createDragControls($(this).find('CtlID').text(),$(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), defaultCtrlVal, $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text(),ctlAns)
                    createDragControls($(this).find('CtlID').text(),$(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), defaultCtrlVal, $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text(),rightAns)
                     controlCount++;
                });
            }
            console.log('shuffletotalTime2');
            console.log(document.getElementById('shuffletotalTime').innerText);
            		
            document.getElementById("shuffle").appendChild(document.getElementById('container'));
            isSuffleLoaded = true;
            //shuffleIntervalCounter = setTimer('#shuffletotalTime', shuffleCounter);
            watchStart ('#shuffletotalTime',shuffleIntervalCounter,shuffleStopWatcher);
      //      hideQuestionLayer(false);
            console.log('shuffletotalTime3');
            console.log(document.getElementById('shuffletotalTime').innerText);
          //  console.log('shuffletotalTime3');
            //console.log(document.getElementById('shuffletotalTime').text());
            console.log('shuffletotalTime4');
            console.log(document.getElementById('shuffletotalTime').innerHTML);
        }
        
        disablebody('shuffle');
    }
    checkShuffleCounterNeedsStop = function (typeAnsCounter) {
        if (typeAnsCounter == arrInputControls.length) {
            clearInterval(shuffleIntervalCounter)
        }
    }
    multiSelloadedPanel = function () {
    	console.log('multiSelloadedPanel');
    	// 5Nov2014
    	if(device.platform !=null){
            try{
    	 console.log('lock orientation to landscape');
         window.screen.lockOrientation("landscape");
            }
            catch(ex){
                //catch exception
                console.log(ex);
                } 
        }
        $('#selectExerciseName').text(currExerciseName);
        setLocaltoSave(false);
        stopCounters();
        localFolderAnsObj = getLocalFolderAnswers();
        console.log('localFolderAnsObj');
        console.log(localFolderAnsObj);
        
      
        
        if(localFolderAnsObj.listExcerciseModes){
        	
        	if(localFolderAnsObj.listExcerciseModes.length== '1') // Priya put this if and else because it was failing fro test
        		{
        		 if(localFolderAnsObj.listExcerciseModes[0].Attempts){
                     $('#multiNoAttempts').text(localFolderAnsObj.listExcerciseModes[0].Attempts);
                 }
                 if(localFolderAnsObj.listExcerciseModes[0].TimeTaken){
                     multiSelectStopWatcher = new clsStopwatch();
                     $('#multitotalTime').text(localFolderAnsObj.listExcerciseModes[0].TimeTaken);
                 }
                 if(localFolderAnsObj.listExcerciseModes[0].Score){
                     $('#multiSelectResult').text(localFolderAnsObj.listExcerciseModes[0].Score);

                 }
        		}
        	else
        		{ 
            if(localFolderAnsObj.listExcerciseModes[2].Attempts){
                $('#multiNoAttempts').text(localFolderAnsObj.listExcerciseModes[2].Attempts);
            }
            if(localFolderAnsObj.listExcerciseModes[2].TimeTaken){
                multiSelectStopWatcher = new clsStopwatch();
                $('#multitotalTime').text(localFolderAnsObj.listExcerciseModes[2].TimeTaken);
            }
            if(localFolderAnsObj.listExcerciseModes[2].Score){
                $('#multiSelectResult').text(localFolderAnsObj.listExcerciseModes[2].Score);

            }
        		}
        }
        if ($('#multitotalTime').text().length == 0) {
            clkCounter = 0;
            $('#multitotalTime').text("00:00");
            multiSelectStopWatcher = new clsStopwatch();
        } else {
            clkCounter = parseInt($('#multitotalTime').text())
        }
        
        currentPage = 'multiSelect';
        if (xmlString) {
            if (!isCmbLoaded) {
                isSelectEdit = false;
                if(document.getElementById('multiSelectResult').innerText.length==0){
                document.getElementById('multiSelectResult').innerHTML = "0";}
                document.getElementById('mulQuestTotal').innerHTML = "/" + arrInputControls.length;
                //$(xmlString).siblings('NewDataSet').find('DetailProperties').each(function () {
                    dataString = $(xmlString);
                    localFolderAnsObj = getLocalFolderAnswers();
                    var controlCount =0;
                    var ctrlAns ='';
                    $(dataString).find('DetailProperties').each(function () {
                        if(localFolderAnsObj.listExcerciseModes){
                        	if(localFolderAnsObj.listExcerciseModes.length== '1') // Priya put this if and else because it was failing fro test
                    		{
                    		
                        		  if(localFolderAnsObj.listExcerciseModes[0].listControls.length>0)
                        		  {
                                  	if(localFolderAnsObj.listExcerciseModes[0].listControls[controlCount].CtlValue)
                                  	{
                                      	ctrlAns =localFolderAnsObj.listExcerciseModes[0].listControls[controlCount].CtlValue;
                                  	}
                                  }
                    		}
                        	else
                        		{
                        		  if(localFolderAnsObj.listExcerciseModes[2].listControls.length>0)
                        		  {
                                  	if(localFolderAnsObj.listExcerciseModes[2].listControls[controlCount].CtlValue)
                                  	{
                                      	ctrlAns =localFolderAnsObj.listExcerciseModes[2].listControls[controlCount].CtlValue;
                                  	}
                                  	else // Priya 27June2014 added this else
                                  	{
                                  		ctrlAns ="";
                                  	}
                                  }
                        		  else // Priya 27June2014 added this else
                        		  {
                        			  ctrlAns ="";
                        		   }
                        		
                        		}
                      
                    }
                    var cmbControl = creatComboControls($(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), $(this).find('CtlDefaultValue').text(), $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text(),ctrlAns);
                    document.getElementById("multiSelect").appendChild(cmbControl);
                    var lblControl = creatReadClickControls($(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), $(this).find('CtlDefaultValue').text(), $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text(),ctrlAns);
                    document.getElementById("multiSelect").appendChild(lblControl);
                    controlCount++;
                });
                selOptionAnswers();
                isCmbLoaded = true
            }
            multiOptionsAdd();
            document.getElementById("multiSelect").appendChild(document.getElementById('container'));
          //  hideQuestionLayer(false);
           // clkIntervalCounter = setTimer('#multitotalTime', clkCounter);
            watchStart ('#multitotalTime',clkIntervalCounter,multiSelectStopWatcher);
        }
        
        disablebody('select');
    }
    checkMultiCounterNeedsStop = function (typeAnsCounter) {
        if (typeAnsCounter == arrInputControls.length) {
            clearInterval(clkIntervalCounter)
        }
    }
    randSelloadedPanel = function () {
    	console.log('randSelloadedPanel');
    	// 5Nov2014
    	if(device.platform !=null){
            try{
    	 console.log('lock orientation to landscape');
         window.screen.lockOrientation("landscape");
            }
            catch(ex){
                //catch exception
                console.log(ex);
                } 
        }
        stopCounters();
        setLocaltoSave(false);
        localFolderAnsObj = getLocalFolderAnswers();
        if(localFolderAnsObj.listExcerciseModes){
        	if(localFolderAnsObj.listExcerciseModes.length == '1')
        		{
        		   if(localFolderAnsObj.listExcerciseModes[0].Attempts){
                       $('#randomNoAttempts').text(localFolderAnsObj.listExcerciseModes[0].Attempts);
                   }
                   if(localFolderAnsObj.listExcerciseModes[0].TimeTaken){
                       randStopWatcher = new clsStopwatch();
                       $('#randomtotalTime').text(localFolderAnsObj.listExcerciseModes[0].TimeTaken);
                   }
                   if(localFolderAnsObj.listExcerciseModes[0].Score){
                       $('#randSelectResult').text(localFolderAnsObj.listExcerciseModes[0].Score);
                   }
        		}
        	else
        		{
        		   if(localFolderAnsObj.listExcerciseModes[3].Attempts){
                       $('#randomNoAttempts').text(localFolderAnsObj.listExcerciseModes[3].Attempts);
                   }
                   if(localFolderAnsObj.listExcerciseModes[3].TimeTaken){
                       randStopWatcher = new clsStopwatch();
                       $('#randomtotalTime').text(localFolderAnsObj.listExcerciseModes[3].TimeTaken);
                   }
                   if(localFolderAnsObj.listExcerciseModes[3].Score){
                       $('#randSelectResult').text(localFolderAnsObj.listExcerciseModes[3].Score);
                   }
        		}
         
        }
        if ($('#randomtotalTime').text().length == 0) {
            randomCounter = 0;
            $('#randomtotalTime').text("00:00");
            randStopWatcher = new clsStopwatch();
        } else {
            randomCounter = parseInt($('#randomtotalTime').text())
        }
        
        currentPage = 'randomSelect';
        if (xmlString) {
            isRandomEdit = false;
          //  showQuestionLayer(false);
            randomCopyArray = arrInputControls.slice();
            var defaultCtrlVal = randomSelectItem();
            if (defaultCtrlVal) {
                defaultCtrlVal = defaultCtrlVal.value
            }
            if (!isRandSelLoaded) {
                if(document.getElementById('randSelectResult').innerText.length==0){
                document.getElementById('randSelectResult').innerHTML = "0";}
                document.getElementById('randQuestTotal').innerHTML = "/" + arrInputControls.length;
                //$(xmlString).siblings('NewDataSet').find('DetailProperties').each(function () {
                 dataString =   $(xmlString); 
                 var controlCount =0;
                 localFolderAnsObj = getLocalFolderAnswers();
                $(dataString).find('DetailProperties').each(function () {
                    var ctrlAns ='';
                    
                    if(localFolderAnsObj.listExcerciseModes){
                    	if(localFolderAnsObj.listExcerciseModes.length=='1')
                    		{
                    		 if(localFolderAnsObj.listExcerciseModes[0].listControls.length>0 && localFolderAnsObj.listExcerciseModes[0].listControls[controlCount].CtlValue)
                             {
                                 ctrlAns =localFolderAnsObj.listExcerciseModes[0].listControls[controlCount].CtlValue;
                             }
                    		}
                    	else
                    		{
                    		 if(localFolderAnsObj.listExcerciseModes[3].listControls.length>0 && localFolderAnsObj.listExcerciseModes[3].listControls[controlCount].CtlValue)
                             {
                                 ctrlAns =localFolderAnsObj.listExcerciseModes[3].listControls[controlCount].CtlValue;
                             }
                    		}
                       
                    }
                    console.log(defaultCtrlVal);
                    //createDragControls($(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), defaultCtrlVal, $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text())
                   setHeaderSource(); // Priya May2014
                    document.getElementById("randomSelect").appendChild(creatClickControls($(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), $(this).find('CtlDefaultValue').text(), $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text(),ctrlAns))
                    controlCount++;
                });
                createRandDivControl(defaultCtrlVal, randomCopyArray);
                ctrlFontSize = '20px'; // Priya changed it from 15 to 30
               
                if ((window.innerWidth) <= 360) {
                    $('#randAnswerDiv').css("margin-left", '65px');
                    ctrlFontSize = '8px'
                }
                //Priya May2014
            //    $('#randAnswerDiv').addEventListener('click',tapRandomAnswerDiv,true);
                
                $('#randAnswerDiv').css("fontSize", ctrlFontSize);
                $('#randAnswerDiv').text(defaultCtrlVal)
            }
            isRandSelLoaded = true;
            document.getElementById("randomSelect").appendChild(document.getElementById('container'));
            //randomIntervalCounter = setTimer('#randomtotalTime', randomCounter);
            watchStart ('#randomtotalTime',randomIntervalCounter,randStopWatcher);
        }
        
        disablebody('random');
    }
    
  
    randomMultiCounterNeedsStop = function (typeAnsCounter) {
        if (typeAnsCounter == arrInputControls.length) {
            clearInterval(randomIntervalCounter)
        }
    }
    showAnsloadedPanel = function () {

        currentPage = 'showAnswer';
     // 5Nov2014
    	if(device.platform !=null){
            try{
    	 console.log('lock orientation to landscape');
         window.screen.lockOrientation("landscape");
            }
            catch(ex){
                //catch exception
                console.log(ex);
                } 
        }
        if (xmlString) {
            if (!isShowAnsLoaded) {
                dataString = $(xmlString);
                //$(xmlString).siblings('NewDataSet').find('DetailProperties').each(function () {
                    $(dataString).find('DetailProperties').each(function () {
                    document.getElementById("showAnswer").appendChild(creatReadOnlyTextControls($(this).find('CtlName').text(), $(this).find('CtlX').text(), $(this).find('CtlY').text(), $(this).find('CtlWidth').text(), $(this).find('CtlHt').text(), $(this).find('CtlDefaultValue').text(), $(this).find('CtlFontFamily').text(), $(this).find('CtlFontSize').text(), $(this).find('CtlFontStyle').text(), $(this).find('CtlFontColor').text()))
                })
            }
            isShowAnsLoaded = true;
            document.getElementById("showAnswer").appendChild(document.getElementById('container'));
           // hideQuestionLayer(false)
        }
    }
    showAnswer = function () {}
    randomSelectItem = function (ctrlDefaultValue) {
        if (randomCopyArray.length) {
            defaultCtrlIndex = Math.floor(Math.random() * randomCopyArray.length);
            defaultCtrlvalue = randomCopyArray[defaultCtrlIndex];
            if (defaultCtrlvalue.value == ctrlDefaultValue) {
                defaultCtrlIndex = Math.floor(Math.random() * randomCopyArray.length);
                return randomCopyArray.splice(defaultCtrlIndex, 1)[0]
            } else {
                return randomCopyArray.splice(defaultCtrlIndex, 1)[0]
            }
            return null
        }
    }
    var actionSheetListItems =[];
    var arrSelectCopy=null;
    getLookUpActionSheet = function(ctrlId){
        for(prop in actionSheetListItems){
           if(actionSheetListItems[prop].id == ctrlId){
                return actionSheetListItems[prop].arrAnswer;
                break;
            } 
        }
    }
    multiOptionItems = function(defaultValue,ctrlId){
        exerciseActicity = getExerciseActivity();
        //if(headerProp.showFeedback.toUpperCase() =='ON'){
    //exerciseActicity = 1 is a test mode otherwise practiceMode
        //if(headerProp && headerProp.showFeedback.toUpperCase()=='OFF'){
            if(headerProp && exerciseActicity==1){
                selAnswerOption = parseInt(headerProp.noOfItems);
            }
            //for (var i = 0; i <= arrInputControls.length - 1; i++) {
                arrAnswer = [];
                //var defaultValue = defaultValue;//arrInputControls[i].value;
                if(arrSelectCopy ==null){
                    arrSelectCopy = arrInputControls.slice();
                }
                //var copy = arrInputControls.slice();
                var index = 0;
                answersCount = selAnswerOption;
                arrAnsObj = setRandomAnswers(arrAnswer, answersCount, arrSelectCopy, index, defaultValue);
                if (arrAnsObj) {
                    arrAnsObj.push(defaultValue);
                    arrAnswer = [];
                    var copyAnswerObj = arrAnsObj.slice();
                    var copyIndexObj = 1;
                    while (copyAnswerObj.length) {
                        if (answersCount > 0) {
                            var currIndex = Math.floor(Math.random() * copyAnswerObj.length);
                            if (copyAnswerObj[currIndex].toLowerCase() == defaultValue.toLowerCase()) {
                                currIndex = Math.floor(Math.random() * copyAnswerObj.length)
                            }
                            var keyword = copyAnswerObj.splice(currIndex, 1);
                            arrAnswer.push(keyword[0]);
                            //cmbInputControl.options[cmbInputControl.options.length] = new Option(keyword[0], index);
                            index++;
                            //$('#cmb' + arrInputControls[i].id).prop("selectedIndex", -1)
                        } else {}
                    }
                    //$('#cmb' + arrInputControls[i].id).hide()
                }//end if of ans Object
                var ctrlObject ={};
                ctrlObject.id=ctrlId;
                ctrlObject.arrAnswer = arrAnswer;
                actionSheetListItems.push(ctrlObject);
           // }
    }
    multiOptionsAdd = function () {
        if (arrInputControls.length > 0) {
            if (document.getElementById('cmb' + arrInputControls[0].id).options != null) {
                if (selAnswerOption == document.getElementById('cmb' + arrInputControls[0].id).options.length) {
                    return true
                }
            }
            exerciseActicity = getExerciseActivity();

            //if(headerProp && headerProp.showFeedback.toUpperCase()=='OFF'){
            if(headerProp && exerciseActicity==1){
                selAnswerOption = parseInt(headerProp.noOfItems);
            }
            for (var i = 0; i <= arrInputControls.length - 1; i++) {
                arrAnswer = [];
                var cmbInputControl = document.getElementById('cmb' + arrInputControls[i].id);
                cmbInputControl.style.display = 'block';
                var defaultValue = arrInputControls[i].value;
                var copy = arrInputControls.slice();
                var index = 0;
                answersCount = selAnswerOption;
                arrAnsObj = setRandomAnswers(arrAnswer, answersCount, copy, index, defaultValue);
                if (arrAnsObj) {
                    arrAnsObj.push(defaultValue);
                    var copyAnswerObj = arrAnsObj.slice();
                    var copyIndexObj = 1;
                    while (copyAnswerObj.length) {
                        if (answersCount > 0) {
                            var currIndex = Math.floor(Math.random() * copyAnswerObj.length);
                            if (copyAnswerObj[currIndex].toLowerCase() == defaultValue.toLowerCase()) {
                                currIndex = Math.floor(Math.random() * copyAnswerObj.length)
                            }
                            var keyword = copyAnswerObj.splice(currIndex, 1);
                            cmbInputControl.options[cmbInputControl.options.length] = new Option(keyword[0], index);
                            index++;
                            $('#cmb' + arrInputControls[i].id).prop("selectedIndex", -1)
                        } else {}
                    }
                    $('#cmb' + arrInputControls[i].id).hide()
                }
            }
        }
    }
    setRandomAnswers = function (arrAnswer, answersCount, copy, index, defaultValue) {
        try{
        while (answersCount - 1) {
            var keyword = Math.floor(Math.random() * (copy.length));
            keyword = arrInputControls[keyword];
            if (keyword.value.toLowerCase() == defaultValue.toLowerCase()) {
                copy.splice(keyword, 1);
                setRandomAnswers(arrAnswer, answersCount, copy, index, defaultValue);
                break
            }
            if ($.inArray(keyword.value, arrAnswer) != -1) {
                setRandomAnswers(arrAnswer, answersCount, copy, index, defaultValue);
                break
            }
            arrAnswer.push(keyword.value) ;
            answersCount--;
            index++
            copy.splice(keyword, 1);
        }
        }
        catch(ex){console.log( 'error in random answer' + ex);}
        return arrAnswer;
    }
    selOptionAnswers = function () {
        $("#selQuestionOption option").remove();
        if (arrInputControls.length > 0) {
            var countIndex;
            for (var i = 2; i <= parseInt(arrInputControls.length / 2)+1; i++) {
                $('#selQuestionOption').append(new Option(i, i, true, true));
                countIndex = i
            }
            $('#selQuestionOption').prop("selectedIndex", 0)
        }
    }
    homeloadedPanel = function () {
        currentPage = 'home'
    };
   /* gotoCurrentPage = function () {

        $.ui.toggleSideMenu(false);
        $.ui.loadContent(currentPage, false, false, "slide")
    }*/
    resetSelectCtrl = function () {
        selAnswerOption = parseInt($('#selQuestionOption option:selected').text());
        for (var i = 0; i <= arrInputControls.length - 1; i++) {
            var cmbInputControl = document.getElementById('cmb' + arrInputControls[i].id);
            if (cmbInputControl == null) return;
            if (cmbInputControl.options == null) return;
            $('#cmb' + arrInputControls[i].id).hide();
            while (cmbInputControl.options.length > 0) {
                cmbInputControl.remove(0)
            }
        }
    }
    setSettings = function () {
        $.ui.toggleSideMenu(false);
      //  if (document.getElementById("selQuestionOption").options.length > 0) $('#selQuestionOption option:selected').text(selAnswerOption)
    }
    typeAnswer = function () {
        console.log('you clciked me')
    }
    getDataSet = function () {
        return arrInputControls
    }
    resetPageTesting = function () {
        adjustControls();
        adjustControlsBasedOnViewPort(arrInputControls)
    }
    smartFreeFLow = function (){
        
        $('#SPheaderCourseContent').text(currExerciseName);
        if(device.platform !=null){
             try{
              window.screen.lockOrientation("portrait");
                //intel.xdk.device.setRotateOrientation("portrait");
            }catch(ex){
                //catch exception
                console.log(ex);
                } 
        }
        $('#pencil').css( "border-color", "blue" );
        //initCanvasVariables();
        //createNewCanvas();
        startSmartWatcher();

        //setPencilSize(5);
    }
    
    
    
    
   /* gotoCurrentPageFromSP = function (type) {
    	saveSmartFreeFlowExercise('');// priya june2014 to save on back
       if(isSaveToLocalSmartPaper){
           
                    saveLocalSmartFreeFlowExercise(true);
                    
             
        }else{
           $.ui.loadContent(currentModule, false, false, "slide"); 
           if(currentModule == "studentListforAContent")
           {
              currentModule = 'backPackContentList'
           }
        }
    }*/

    startSmartWatcher = function(){
        stopCounters();
       //if ($('#smarttotalTime').text().length == 0) {
            smartRandomCounter = 0;
            $('#smarttotalTime').text("00:00");
            smartPaperWatcher = new clsStopwatch();
            watchStart ('#smarttotalTime',smartIntervalCounter,smartPaperWatcher);
            $('#smartnoAttempts').text(0);

        /*} else {
            smartRandomCounter = parseInt($('#smarttotalTime').text())
        }*/
    }
  /*   unloadedSmartPaper =function(){
        //clear all the controls
        if(device.platform !=null){
            try{
                
                //intel.xdk.device.setRotateOrientation("any");
            }catch(ex){
                //catch exception
                console.log(ex);
                }
        }
        setSmartPaperLocalToSave(false);
        removeAllSmartControls();
        clearSmartVariables();
        $('#smarttotalTime').text('');

        stopCounters();
        watcherStop();
        clearInterval(smartIntervalCounter);
        
    }; */
    
    unloadedSmartPaper =function(){
        //clear all the controls
        if(device.platform !=null){
            try{
                 var unlocked = window.screen.unlockOrientation();
                if (unlocked) {
                    // orientation was unlocked
                    console.log(unlocked);
                } else {
                // orientation unlock failed
                    console.log(unlocked);
                }
                //intel.xdk.device.setRotateOrientation("any");
            }catch(ex){
                //catch exception
                console.log(ex);
                }
        }
        setSmartPaperLocalToSave(false);
        removeAllSmartControls();
        resetTopCanvasAndClearControls();// Priya added this line
        clearSmartVariables();
        $('#smarttotalTime').text('');

        stopCounters();
        watcherStop();
        clearInterval(smartIntervalCounter);
        
    };
    smartFreeFLowReset = function(){
       
        resetTopCanvasAndClearControls();
       startSmartWatcher();
        //stopCounters();
        //watcherStop();
        
        
    }
    onPencilSize = function(event){
        $( ".popColor" ).fadeOut();
        $( ".popEraser" ).toggle();
        $(".popEraser").animate({
            top : -20,
        }, 200);
    
        /* $.ui.actionsheet(
        [{
        text: 'Small',
       
        handler: function () { setPencilSize(3); }
        }, {
        text: 'Medium',
        
        handler: function () { setPencilSize(4); }
        },{
        text: 'Large',
        
        handler: function () { setPencilSize(5); }
        }]
        );*/
    }
    pencilSizeChooser = function(size){
        setPencilSize(size); 
        $( ".popEraser" ).toggle();
    }
    onPencilColor = function(event){
        $( ".popEraser" ).fadeOut();
        $( ".popColor" ).toggle();
        $(".popColor").animate({
            top : -20,
        }, 200);

    
    /*$.ui.actionsheet(
        [{
        text: 'Black',
       
        handler: function () { setPencilColor('black'); }
        }, {
        text: 'Blue',
        
        handler: function () { setPencilColor('blue'); }
        },{
        text: 'White',
        
        handler: function () { setPencilColor('white'); }
        },{
        text: 'Red',
        
        handler: function () { setPencilColor('red'); }
        },{
        text: 'Green',
        
        handler: function () { setPencilColor('green'); }
        }]
    );*/
    //$.ui.actionsheet("<a href='javascript:; onclick='alert('hello');'><img src='img/colorPalette.png' /></a> <a href='javascript:;' class='button red'>Logout</a>")
    
}
pencilColorPicker = function(colorName){
    setPencilColor(colorName); 
    $( ".popColor" ).toggle();
}
    function changeOrientation() {
        if (arrInputControls.length > 0) {
            console.log('change orientaion' + window.orientation);
            adjustControls();
            adjustControlsBasedOnViewPort(arrInputControls)
        }
        else
    	{
    	//checkspobject();
    	}
    }
    window.onorientationchange = function () {
        setTimeout(changeOrientation, 200)
    }
    gotoCurrentPage = function (type)
    {
    	console.log('gotoCurrentPage');
    	console.log(type);
    	
    	var isSettings = false;
        if(type =='settings')
        {
            isSettings = true;
             $.ui.hideMask();
             isBackfromCourseContents = true;
        }
        
        if(!isSettings)
        	{
    	//
    	saveExercise(type);
    	// changes end
        	}
        setMainCourse(false);
        var isExerciseEdit = false;
        if(isTypeEditStart || isShuffleEdit || isSelectEdit || isRandomEdit)
        {
            isExerciseEdit = true;
        }
        
        exerciseActicity = getExerciseActivity();
        //destroyAll the Objects
                    clearLayers();
                //    destroyStage();

        //if (headerProp.showFeedback.toUpperCase()=='ON'){
           // if (exerciseActicity==0){
        if(!isSaveToLocal && !isSettings && isExerciseEdit)
        {
        	      console.log('priya here');
                    uploadSaveLocalData(arrInputControls);
                    $.ui.loadContent(currentModule, false, false, "slide");
       
    
        } //  end !isSaveToLocal && !isSettings && isExerciseEdit)
        else
        {
    	 console.log("In else of gotocurrentPage" +currentModule);
           
    	   $.ui.loadContent(currentModule, false, false, "slide"); 
           
           if(currentModule == "studentListforAContent")
           {
              currentModule = 'backPackContentList'
           }
        }
    }
    lclFolderloadedPanel = function () {
        currentModule = 'localFolder';
        if(device.platform !=null){
                        if(checkConnection() ==-1 || checkConnection() ==-2){
                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                            return false;
                        }
                    }
        getLocalFolderContents();
    }
    
    
   
    reportsloadedPanel = function () {
        currentModule = 'Reports';
        if(device.platform !=null){
                        if(checkConnection() ==-1 || checkConnection() ==-2){
                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                            return false;
                        }
                    }
        
        
        var revenueChart = new FusionCharts({
    		type:"column2d",// "column2d",
    		renderAt: "chartContainer",
    		width: "800",
    		height: "800",
    		dataFormat: "json",
    		dataSource: 
    		{
    			"chart": 
    			{
    			  "caption": "Students work report",
    			  "subCaption": "World Map Excercise",
    			  "xAxisName": "Student Name",
    			  "yAxisName": "Score (Points)",
    			  "theme": "fint"
    			},
    			"data":
    			[
    			  {
    				 "label": "Chris",
    				 "value": "10"
    			  },
    			  {
    				 "label": "Ashley",
    				 "value": "10"
    			  },
    			  {
    				 "label": "Thomas",
    				 "value": "4"
    			  },
    			  {
    				 "label": "Ricky",
    				 "value": "8"
    			  },
    			  {
    				 "label": "Cooper",
    				 "value": "9"
    			  },
    			  {
    				 "label": "Claire",
    				 "value": "9"
    			  },
    			  {
    				 "label": "Angelica",
    				 "value": "6"
    			  },
    			  {
    				 "label": "Zora",
    				 "value": "5"
    			  },
    			  {
    				 "label": "Ann",
    				 "value": "4"
    			  },
    			  {
    				 "label": "Brad",
    				 "value": "3"
    			  },
    			  {
    				 "label": "Miles",
    				 "value": "2"
    			  },
    			  {
    				 "label": "Sandy",
    				 "value": "1"
    			  }
    			]
    		}
    		//}
    	});
    	revenueChart.render("chartContainer");
  /*      $("#chartContainer1").insertFusionCharts({
        	type: "Column3D",
        	width: "600",
        	height: "300",
        	dataFormat: "json",
        	dataSource: {
        	   "chart":{
        		  "caption":"Monthly Sales Summary",
        		  "subcaption":"For the first half of 2013",
        		  "xAxisName":"Month",
        		  "yAxisName":"Sales",
        		  "numberPrefix":"$",
        		  "bgcolor":"ffffff"
        	   },
        	   "data":[
        		  { "label":"January", "value":"14400" },
        		  { "label":"February", "value":"19600" },
        		  { "label":"March", "value":"24000" },
        		  { "label":"April", "value":"15700" },
        		  { "label":"May", "value":"23700" },
        		  { "label":"June", "value":"22800" }
        	   ],
        	   "trendlines":[ {
        			 "line":[{
        				   "startValue":"17100",
        				   "displayValue":"Last year's {br} average",
        				   "valueOnRight":"1",
        				   "color":"999999"
        				}]
        		  }]
        		  }
        	}); */
        			
    }
    
    
    reportsloadedPanel3D = function () {
        currentModule = 'Reports';
        if(device.platform !=null){
                        if(checkConnection() ==-1 || checkConnection() ==-2){
                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                            return false;
                        }
                    }
        
        
        var revenueChart = new FusionCharts({
    		type:"mscolumn3d",// "column2d",
    		renderAt: "chartContainer3D",
    		width: "800",
    		height: "800",
    		dataFormat: "json",
    		dataSource: 
    		{
    			"chart": 
    			{
    			  "caption": "Students work report",
    			  "subCaption": "World Map Excercise",
    			  "xAxisName": "Student Name",
    			  "yAxisName": "Score (Points)",
    			  "theme": "zune"
    			},
    			
    			
    			"categories": [{
                    "category": [{
                        "label": "Chris"
                    }, {
                        "label": "Ashley"
                    }, {
                        "label": "Cooper"
                    }, {
                        "label": "Thomas"
                    }]
                }],
                "dataset": [{
                    "seriesname": "Current Year",
                        "data": [{
                        "value": "10"
                    }, {
                        "value": "8"
                    }, {
                        "value": "6"
                    }, {
                        "value": "9"
                    }]
                }]
      
    		}
    		//}
    	});
    	revenueChart.render("chartContainer3D");
  /*      $("#chartContainer1").insertFusionCharts({
        	type: "Column3D",
        	width: "600",
        	height: "300",
        	dataFormat: "json",
        	dataSource: {
        	   "chart":{
        		  "caption":"Monthly Sales Summary",
        		  "subcaption":"For the first half of 2013",
        		  "xAxisName":"Month",
        		  "yAxisName":"Sales",
        		  "numberPrefix":"$",
        		  "bgcolor":"ffffff"
        	   },
        	   "data":[
        		  { "label":"January", "value":"14400" },
        		  { "label":"February", "value":"19600" },
        		  { "label":"March", "value":"24000" },
        		  { "label":"April", "value":"15700" },
        		  { "label":"May", "value":"23700" },
        		  { "label":"June", "value":"22800" }
        	   ],
        	   "trendlines":[ {
        			 "line":[{
        				   "startValue":"17100",
        				   "displayValue":"Last year's {br} average",
        				   "valueOnRight":"1",
        				   "color":"999999"
        				}]
        		  }]
        		  }
        	}); */
        			
    }
    
    var isBackfromCourseContents = false;
    backtobagPack = function () {
        isBackfromCourseContents = true;
        $.ui.loadContent('#backPack', false, false, "slide")
    }
    backtoCourse = function () {
       // isBackfromCourseContents = true;
        $.ui.loadContent('#backPackContentList', false, false, "slide")
        currentModule="backPackContentList";
    }
    backtoStudentListfromSL = function (type) {
    	//saveExerciseonBack(type);
        // isBackfromCourseContents = true;
         $.ui.loadContent('#studentListforAContent', false, false, "slide")
         currentModule="studentListforAContent";
     }
    backtoStudentListfromSP = function () {
      // priya commented  26June2014	uploadSPData();
        // isBackfromCourseContents = true;
        $.ui.loadContent('#studentListforAContent', false, false, "slide")
        currentModule="studentListforAContent";
         
     }
    loadstudentlist=function()
    {
    	$.ui.loadContent('#studentListforAContent', false, false, "slide")
        currentModule="studentListforAContent";
    }
   
    backPackloadedPanel = function () {
        currentModule = 'backPack';
        var d=new Date();
        var month=new Array();
        month[0]="Jan";
        month[1]="Feb";
        month[2]="Mar";
        month[3]="Apr";
        month[4]="May";
        month[5]="Jun";
        month[6]="Jul";
        month[7]="Aug";
        month[8]="Sept";
        month[9]="Oct";
        month[10]="Nov";
        month[11]="Dec";
        
        $('#backpackTodaysMonth').text(month[d.getMonth()]);
        $('#backpackTodaysDate').text(d.getDate());
        

        if (!isBackfromCourseContents) {
            $.ui.showMask("Loading...");
            isBackfromCourseContents = false;
            //validateDomain();
        }
    }
    var ismainCourseList = false;
    setMainCourse = function(isMainCourse){
        ismainCourseList = isMainCourse;
    }
    backPackCourseContPanel = function () {

        selectedFile = null;
        clearAllViewFields();
        currentModule = 'backPackContentList'
        if(!ismainCourseList){
            getCourseContentsFromLoad();
        }
    }
    
    // Priya June2014 added following function to make a service call to get student list
    studentlistPanel = function () {

        selectedFile = null;
        clearAllViewFields();
        currentModule = 'studentListforAContent'
         getstudentListFromLoad();
        
    }
    //changes end
    
    setLogin = function(){
        if(localStorage.getItem("domainName")){
            $('#txtUserDomain').val(localStorage.getItem("domainName"));
        }
        //$('select.styled').customSelect();
    }
    logOut = function(){
        $('#txtUserName').val('');
        $('#txtUserPassword').val('');

    }
    displayAlertBox = function(message,title,callBackAction){
        navigator.notification.alert(
        message,  // message
        callBackAction,         // callback
        title,            // title
        'OK'                  // buttonName
        );

    }
    bagpackLogin = function () {
    	console.log("inside");
        isUserLogin = true;
        if ($('#txtUserName').val().length == 0 || $('#txtUserPassword').val().length == 0 || $('#txtUserDomain').val().length == 0) {
             $('input:text[required]').parent().show();
             $.ui.popup('All the fields are mandatory');
            return false;
        }
        //isandroid = navigator.userAgent.match(/(Android)\s+([\d.]+)/) || userAgent.match(/Silk-Accelerated/) ? true : false;
       
        if(device.platform !=null){
            if(checkConnection() ==-1 || checkConnection() ==-2){
                $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                return false;
            }
        }
        console.log("before validate domain");
        validateDomain();
        //$.ui.loadContent("#backPack", false, false, "slide");
    }
    clearAllViewFields = function () {
        if (currentModule != 'backPackContentList')  
        {
         //   initStage();
        }
        resetTimers();
        resetAllControls();
    }
    saveLocalExercise = function(isAppPause){
       // Priya commented this alert alert(isAppPause);
         $.ui.popup({
            title:"Save Exercise",
            message:"Would you like to save the Exercise?",
            cancelText:"No",
            cancelCallback: function(){console.log("cancelled");
                return;
            },
            doneText:"Yes",
            doneCallback: function(){console.log("Done for!");
                $.ui.showMask("Saving Exercise...");
                //upload to local folder
                if(device.platform !=null){
                    if(checkConnection() ==-1 || checkConnection() ==-2){
                        $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                        return false;
                    }
                }
                uploadSaveLocalData(arrInputControls);
                
            //$.ui.loadContent('#login',false,false,"pop");
            }
        });
    }
   
    
    saveExerciseonBack = function(type){
    	if(device.platform !=null){
            try{
                 var unlocked = window.screen.unlockOrientation();
                if (unlocked) {
                    // orientation was unlocked
                    console.log(unlocked);
                } else {
                // orientation unlock failed
                    console.log(unlocked);
                }
                //intel.xdk.device.setRotateOrientation("any");
            }catch(ex){
                //catch exception
                console.log(ex);
                }
        }
    	SaveSlOnBack(arrInputControls,type);
    	loadstudentlist();
    };
    
    getSketcherAdded = function(){
        return isSketcherAdded;
    }
    setSketcherAdded = function(isCreated){
        isSketcherAdded = isCreated;
    }
    var onDeviceReady = function () {
        
        webRoot = AppMobi.webRoot + "";
        AppMobi.device.hideSplashScreen();
        $.ui.blockPageScroll();
        $.ui.launch()
    };
    
    feedback = function(excerciseMode)
    {
    	//$('#popupDialog').show()//;dialog({autoOpen : false, modal : true, show : "blind", hide : "blind"});

    	// bring feedback pop up
    //	$("#popupDialog").dialog();
    		/*{
	    	   modal: true,
	    	     autoOpen: false,
	    	     buttons: 
	    	     {
	    	          'Cancel': function() 
	    	          {
	    	                       $(this).dialog('close');
	    	          },
	    	          
	    	          'Accept': function() 
	    	          {
	    	                     //  $('#mainForm input#target').val( $(this).find('#widgetName').val() );
	    	                       $(this).dialog('close');
	    	          }
	    	    }
    		}
    		
    		);

    	
    	
    		*/
    	
    		
    }
    
    //document.addEventListener("intel.xdk.device.ready", onDeviceReady, false);

    function showHide(obj, objToHide)
    {
        var el = $("#" + objToHide)[0];
        if (obj.className == "expanded") 
        {
            obj.className = "collapsed"
        } else
        {
            obj.className = "expanded"
        }
        $(el).toggle()
    }
    
    if ($.os.android || $.os.ie || search == "android") {
        $.ui.ready(function () {
            $("#main .list").append("<li><a id='toggleAndroidTheme'>Toggle Theme Color</a></li>");
            var $el = $("#afui");
            $("#toggleAndroidTheme").bind("click", function (e) {
                if ($el.hasClass("light")) $el.removeClass("light");
                else $el.addClass("light")
            })
        })
    }
})(window);