var ctx, color = "#000",sketcher, x = 0, y = 0, z = 0, etch = 0,marginLeft=0,MarginTop=0,isToolPencil=true, arrSmartPaperControls =[],arrSmartPaperDDSlickAns=[],arrPencilStrokes=[],canvasRoundRatio=1,canvasRound=1,smartPaperJsonDataObject=null, totalSPControl =0,isBackPageRequested=false,mouseTargetCount =0; 
//build the canvas controls runtime
var isSketchAttached = false;
var testHeightFactor=1,spheightDiff =60,isLocalFileDataResponse =false;
var maxscore=0; //Priya August2014
var studentscore=0; //Priya August2014
var workid=0;
function initCanvasVariables (){
    ctx, color = "#000", x = 0, y = 0, z = 0, etch = 0,marginLeft=0,MarginTop=0,isToolPencil=true, arrSmartPaperControls =[],arrPencilStrokes=[],hightDiff=0,canvasRoundRatio=1,canvasRound=1,totalSPControl =0,arrSmartPaperDDSlickAns=[],isBackPageRequested=false; 
    var imgsrc ='test.jpg';
    $('#smartSketch').css("background-image", "url("+'imgsrc'+")");
}

<!-- Priya June2014  added this function-->
disablebody = function(sectionname)
{
	console.log('disablebody');
	//var sketcher = new Sketcher("topCanvas2");
	//console.log('sketcher');
	//console.log(sketcher);
	switch(sectionname) 
	{
	 case 'type':
		 console.log('type');
	       el=$('#main').children();
	       for (var i = 0; i < el.length; i++) 
	        {
	            el[i].disabled = true;
	          //  disableElements(el[i].children);
	        }
	        break;
/*	 case 'select':
		 console.log('select');
	       el=$('#multiSelect').children();
	       for (var i = 0; i < el.length; i++) 
	        {
	            el[i].disabled = true;
	          //  disableElements(el[i].children);
	        }
	        break;
	 case 'shuffle':
		 console.log('shuffle');
	       el=$('#shuffle').children();
	       for (var i = 0; i < el.length; i++) 
	        {
	    	 //  console.log('el[i]');
	    	 //  console.log(el[i]);
	            el[i].disabled = true;
	          //  disableElements(el[i].children);
	        }
	        break;
	 case 'random':
		 console.log('random');
	       el=$('#randomSelect').children();
	       for (var i = 0; i < el.length; i++) 
	        {
	            el[i].disabled = true;
	          //  disableElements(el[i].children);
	        }
	       $("#randAnswerDiv").disabled=true;
	        break;
	 case 'sp':
		 console.log('sp');
	       el=$('#smartPaperPanel').children();
	       for (var i = 0; i < el.length; i++) 
	        {
	            el[i].disabled = true;
	          //  disableElements(el[i].children);
	        }
	        break;*/
	}
	
	//el=$('#main').children();
	/*console.log("el");
	console.log(el);
	console.log("el.length");
	console.log(el.length);
	console.log(el[0]);*/
	
       
	
}

function clearSmartVariables(){
  smartPaperJsonDataObject=null;
}
function incrementMouseCount(){
    mouseTargetCount ++;
}
function getMouseTargetCount(){
    return mouseTargetCount;
}
function clearMouseTargetCount(){
    mouseTargetCount =0;
}

function checkspobject()
{
	if(smartPaperJsonDataObject)
		{
		
      //  setSmartPaperLocalToSave(false);
        resetTopCanvasAndClearControls(); //priya added this line
        removeAllSmartControls();
        //clearSmartVariables();
        $('#smarttotalTime').text('');

    //    stopCounters();
     //   watcherStop();
       // clearInterval(smartIntervalCounter);
        console.log('in checkspObject');
        console.log(smartPaperJsonDataObject);
		loadBackgroundImage(smartPaperJsonDataObject);
		return true;
		}
	else
		{
		return false;
		}
}


function createNewCanvas(){
    initCanvasVariables();
    //define and resize canvas
    //$("#smartSketch").height($(window).height());
    //main div backgorund color should be black 
    $("#smartPaperPanel").css('height','$(window).height()');
  console.log('smartPaperPanel');
  var smartCanvas = document.createElement("canvas");
   // buildSmartPaperCanvasControl('mainCanvas',500,500,100,100); //background layer for image
   // buildSmartPaperCanvasControl('topCanvas',500,500,100,100);
        if(!getSketcherAdded()) {    
        	console.log('topCanvas');
            sketcher = new Sketcher( "topCanvas" );
            setSketcherAdded(true);
        }
    sketcher.pencilSize(4); //medium size pencil
};

resetTopCanvasAndClearControls = function(){
	  //needs to clear the controls as well.
	  // Priya uncommented this 
		sketcher.clear();
		// clear canvas // priya 
		// var topCanLayer = document.getElementById('topCanvas'); 
		// var context2=topCanLayer.getContext("2d");
	    // context2.clearRect(0, 0,topCanLayer.width,topCanLayer.height);
	     // changes end
	  arraySmartControls = this.arrSmartPaperControls;
	   if(arraySmartControls){
	            for (var prop = 0, len = arraySmartControls.length; prop < len; prop++) {
	                var inputCtrl = document.getElementById(arraySmartControls[prop].id);
	                if(inputCtrl){
	                    //$("#" + inputCtrl.id).remove();
	                    if('SelfGradingTextBox' == arraySmartControls[prop].type){
	                      inputCtrl.value = '';
	                    }
	                }
	            }
	        }
	};
getspLocalContentsDataResponse = function(jsonDataResponse){
    //var jsonresponse =JSON.parse(data);
    isLocalFileDataResponse = true;
    try {
      if(jsonDataResponse){
    	  console.log('here getspLocalContentsDataResponse');
        $.ui.loadContent('#smartPaperPanel', false, false, "slide");
     
        smartPaperJsonDataObject = jsonDataResponse;
        loadBackgroundImage(smartPaperJsonDataObject);
     
    }
  }catch (ex) {
            alert(ex);
  }
    
      
    } ;
    
getSmartPaperResponse = function(jsonDataResponse){
 try 
 {
    isLocalFileDataResponse = false;
    if(jsonDataResponse)
    {
      console.log('smartPaperPanel');
      $.ui.loadContent('#smartPaperPanel', false, false, "slide");
      smartPaperJsonDataObject = jsonDataResponse;
      loadBackgroundImage(smartPaperJsonDataObject);
     
    }
 }
 catch (ex)
 {
            alert(ex);
 }
};
loadBackgroundImage = function(jsonObject){
    var imgString;
    initCanvasVariables();
    createNewCanvas();
    dataObject = JSON.parse(jsonObject);
    var objSP = JSON.parse(jsonObject);
    console.log('loadBackgroundImage');
    console.log('jsonObject Get in SP');
    console.log(jsonObject);
    console.log('On load of smart paper feedback varaibles updated in main');
    // updateFeedbackinMain after page load in SmartPaper
    
    // 8October2014 update it
    
    // Uncomment it later priya13Oct2014
   // updateFeedbackinMain(dataObject.FeedbackText,dataObject.Sticker,dataObject.Grade,dataObject.Rework);
    //updateFeedbackinMain(dataObject.FeedbackText,dataObject.Sticker,dataObject.Grade,'0');
    //updateFeedback(dataObject.FeedbackText,'1',dataObject.Sticker,dataObject.Grade,0);
    updateFeedback(dataObject.FeedbackText,'1',dataObject.Sticker,dataObject.Grade,dataObject.Rework);
    workid=dataObject.WorkID;
    if(isLocalFileDataResponse){
        dataObject = dataObject.ContentXML;
        console.log('dataObject');
        console.log(dataObject);
    }
    if(dataObject.page.length)
    {
        if(dataObject.page[0].backgroundimage)
        {
            imgString = dataObject.page[0].backgroundimage;
        }
    }
 //imgString = dataObject.backgroundInk;
  if(imgString.length)
  {
    imgsrc = 'data:image/png;base64,'+imgString;
    var img = new Image();
    img.onload = function()
    {
       
      adjustCanvasViewPort(img);
      //build Controls
      buildSmartPaperControls(dataObject,objSP.Work);
      if(isLocalFileDataResponse)
      {
        dataTopObject = JSON.parse(jsonObject);
        topCanvasInk = dataTopObject.backgroundInk;
        var imgTop = new Image();
        imgTop.onload = function()
        {
           var topCanLayer = document.getElementById('topCanvas'); 
            var context2=topCanLayer.getContext("2d");
            //console.log(topCanvasInk);
           context2.drawImage(imgTop, 0, 0,topCanLayer.width,topCanLayer.height);
         //  isLocalFileDataResponse = false;
        };
      
        imgTop.src = topCanvasInk;//'data:image/png;base64,'+topCanvasInk;
      }
      
      $.ui.hideMask();
    }
    img.src = imgsrc;
  }
  else
  {
    buildSmartPaperControls(dataObject,objSP.Work);
  }
};

adjustCanvasViewPort = function(img){
    //alert(window.innerWidth + 'and' + canvasBackgroundImage.width );
    try{
    //console.log('image width' + canvasBackgroundImage.width)
     prepareControls();
   
    imageWidth = img.width;
    imageHeight = img.height;
    var widthFactor = window.innerWidth/imageWidth; //(window.innerWidth*(zoomFactor/100))/imageWidth;
    var heightFactor = (window.innerHeight)/imageHeight; //(window.innerHeight*(zoomFactor/100))/imageHeight;
    testHeightFactor = heightFactor;
    //alert('width factor' +widthFactor);
    //alert('heightFactor factor' +heightFactor);
    minFactor = (heightFactor<widthFactor)?heightFactor:widthFactor;
     var bgrCanLayer=document.getElementById("topCanvas");
  //alert(hightDiff);
    if(imageHeight>(window.innerHeight-50)){
       
        //landscape
      this.resizeCanvasImage(img, bgrCanLayer, window.innerWidth-100, (window.innerHeight-spheightDiff));
    }else{
      this.resizeCanvasImage(img, bgrCanLayer, window.innerWidth, window.innerHeight-spheightDiff);
    }
 //window.innerWidth, imageHeight+500
    canvasWidth = window.innerWidth*minFactor;
    canvasHeight = window.innerHeight*minFactor;
   
    //$("#sketch").css('position', 'absolute');
    var topPadding = ((window.innerHeight - $("#topCanvas").height() ) / 2)-spheightDiff;
    hightDiff = $("#smartSketch").height()-img.height;
    
    $("#smartSketch").parent().css('position', 'relative');
    $("#smartSketch").css('position','absolute');
    if(topPadding>0){
    //$("#sketch").css("top",topPadding + "px");
    $("#smartSketch").css("top",topPadding + "px" );
    }
    //alert(marginLeft);
    marginLeft = ( $(window).width() - $("#topCanvas").width() ) / 2 ;
 // priya commented this line  05Nov2014
    // $("#smartSketch").css("left",marginLeft + "px" );
    
    //this.prepareControls(img,bgrCanLayer);
    //drawSketch();
   
    //buildSmartPaperControls();
    
  }catch(ex){
    alert('error in Adjust CanvasView'+ ex);
    
  }
};
resizeCanvasImage = function (img, canvas, maxWidth, maxHeight) {
    var imgWidth = img.width, 
        imgHeight = img.height;

    var ratio = 1, ratio1 = 1, ratio2 = 1;
    ratio1 = maxWidth / imgWidth;
    ratio2 = maxHeight / imgHeight;

    // Use the smallest ratio that the image best fit into the maxWidth x maxHeight box.
    if (ratio1 < ratio2) {
        ratio = ratio1;
    }
    else {
        ratio = ratio2;
    }

    var canvasContext = canvas.getContext("2d");
    var canvasCopy = document.createElement("canvas");
    var copyContext = canvasCopy.getContext("2d");
    var canvasCopy2 = document.createElement("canvas");
    var copyContext2 = canvasCopy2.getContext("2d");
    canvasCopy.width = imgWidth;
    canvasCopy.height = imgHeight;  
    copyContext.drawImage(img, 0, 0);

    // init
    canvasCopy2.width = imgWidth;
    canvasCopy2.height = imgHeight;        
    copyContext2.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy2.width, canvasCopy2.height);


    var rounds = 2;
    var roundRatio = ratio * rounds;
    for (var i = 1; i <= rounds; i++) {
        console.log("Step: "+i);

        // tmp
        canvasCopy.width = imgWidth * roundRatio / i;
        canvasCopy.height = imgHeight * roundRatio / i;

        copyContext.drawImage(canvasCopy2, 0, 0, canvasCopy2.width, canvasCopy2.height, 0, 0, canvasCopy.width, canvasCopy.height);

        // copy back
        canvasCopy2.width = imgWidth * roundRatio / i;
        canvasCopy2.height = imgHeight * roundRatio / i;
        copyContext2.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvasCopy2.width, canvasCopy2.height);

    } // end for


    // copy back to canvas
    canvas.width = imgWidth * roundRatio / rounds;
    canvas.height = imgHeight * roundRatio / rounds;
   canvasRoundRatio=roundRatio;
   canvasRound=rounds;
     $('#smartSketch').css("background-image", "url("+canvasCopy2.toDataURL()+")");
     $('#smartSketch').css('background-repeat' , 'no-repeat');
     $('#smartSketch').css('height',canvasCopy2.height);
     $('#smartSketch').css('width',canvasCopy2.width);
   // canvasContext.drawImage(canvasCopy2, 0, 0, canvasCopy2.width, canvasCopy2.height, 0, 0, canvas.width, canvas.height);

};
prepareControls= function(){
  // setup canvas
    //var bgrCanLayer= document.getElementById("mainCanvas");
    //var layer1= bgrCanLayer.getContext("2d");
    var topCanLayer = document.getElementById('topCanvas'); 
    var context2=topCanLayer.getContext("2d");
    //layer1.drawImage(topCanLayer, 0, 0);
    topCanLayer.width = $('#smartSketch').width(); //bgrCanLayer.width;
    topCanLayer.height = $('#smartSketch').height(); //bgrCanLayer.height;
    $("#topCanvas").css('position', 'absolute');
    //$("#mainCanvas").css('position', 'absolute');
    //$("#topCanvas").css('margin-left', '200px');
    //$("#mainCanvas").css('margin-left', '200px');
};

buildSmartPaperControls = function(dataString, workobject){
  //me = this;
	
	 console.log('buildSmartPaperControls');
	 console.log('workobject');
     console.log(workobject);
  var controlCount =0,ctrlAns;
  if(dataObject.page){
    for(var prop in dataObject.page[0].controls){
      getObjectItem = dataObject.page[0].controls[prop];
      
      console.log('getObjectItem');
      console.log(getObjectItem);
	  
	  
      if(getObjectItem){
        if(getObjectItem.subtype =='EM'){ //Exact Match
          ctrlAns = getObjectItem.answer.exactmatch;//$(this).find('Text').text();
          var typeExactMatchControl = createTextAreaControls(getObjectItem.id,getObjectItem.xcoordinate,getObjectItem.ycoordinate,getObjectItem.width,getObjectItem.height,getObjectItem.answer,'',getObjectItem.fontsize,getObjectItem.fontstyle,getObjectItem.fontcolor,ctrlAns,getObjectItem.subtype);
          document.getElementById("smartSketch").appendChild(typeExactMatchControl);
          prepareSmartArrayObjectControl(typeExactMatchControl.id,getObjectItem.id,getObjectItem.type,ctrlAns,'',getObjectItem.subtype,getObjectItem.maxscore,getObjectItem.studentscore,getObjectItem.isevaluated);
          
           if(isLocalFileDataResponse){setLocalAnsSavedText(getObjectItem,typeExactMatchControl,ctrlAns);}
        }
        else if(getObjectItem.subtype =='FF' || getObjectItem.subtype =='RM'){ //Exact Match
          var value1,value2,score;
          if(getObjectItem.subtype =='RM'){
            value1 = getObjectItem.answer.range1;
            value2 = getObjectItem.answer.range2;
            score = getObjectItem.answer.score;
          }
          ctrlAns = getObjectItem.answer.exactmatch;
          typeFFRMControl = createSmartTextControls(getObjectItem.id,getObjectItem.xcoordinate,getObjectItem.ycoordinate,getObjectItem.width,getObjectItem.height,'',score,getObjectItem.fontsize,getObjectItem.fontstyle,getObjectItem.fontcolor,ctrlAns,getObjectItem.subtype);
          // Priya changes begin
          
          
          if(getObjectItem.subtype =='FF')
          {   // Set maximum score
              maxscore=0;
        	  maxscore=getObjectItem.maxscore;
        	  console.log('maxscore ff');
        	  console.log(maxscore);
        	  studentscore = getObjectItem.studentscore;
        	  console.log(getObjectItem);
        	  console.log('add click event');
        	  typeFFRMControl.addEventListener('click', bringpopuptodisplayscore, false);
          }
          //Changes end
          document.getElementById("smartSketch").appendChild(typeFFRMControl);
          if(getObjectItem.subtype =='FF')
          {
        	  prepareSmartArrayObjectControl(typeFFRMControl.id,getObjectItem.id,getObjectItem.type,value1,value2,getObjectItem.subtype,getObjectItem.maxscore,getObjectItem.studentscore,getObjectItem.isevaluated);
              
            if(isLocalFileDataResponse)
            {
            	setLocalAnsSavedRangeText(getObjectItem,typeFFRMControl,ctrlAns);
            }
           
          }
          if(getObjectItem.subtype =='RM')
          {
        	  
        	prepareSmartArrayObjectControl(typeFFRMControl.id,getObjectItem.id,getObjectItem.type,value1,value2,getObjectItem.subtype,getObjectItem.maxscore,getObjectItem.studentscore,getObjectItem.isevaluated);
              
            if(isLocalFileDataResponse)
            {
            	setLocalAnsSavedRangeText(getObjectItem,typeFFRMControl,ctrlAns);
            }
          }
        /* if(getObjectItem.subtype =='FF') // Priya added this if clause and way to update score
          {
	          for(var prop in arrSmartPaperControls)
	   	   	  {
		   	      if(this.arrSmartPaperControls[prop].id == ctlID)
		   	      {
		   	    	  arrSmartPaperControls[prop].studentscore = eleValue;
		   	      }
	   	      }
          }*/
        }
        else if(getObjectItem.subtype =='Text'){ //List text Box
          cmbTextControl = createSmartPaperCmbTextControl(getObjectItem);
          //document.getElementById("smartSketch").appendChild(cmbTextControl);
        }
        else if(getObjectItem.subtype =='Ink'){ //List text Box
           creatSmartPaperCmbInkControl(getObjectItem);
          
        }
        else{
          //no control needs to display
        }
      }
    }
  }
 
};

bringpopuptodisplayscore= function()
{
	console.log('bringpopuptodisplayscore');
	console.log('studentscore');
	console.log(studentscore);
	var ctlID = this.id;
	console.log('ctlID');
	console.log(ctlID);
	//get scores for particular fields
	for(var prop in arrSmartPaperControls)
	{
	      if(arrSmartPaperControls[prop].id == ctlID)
	      {
	      studentscore =   arrSmartPaperControls[prop].studentscore;
	      maxscore= arrSmartPaperControls[prop].maxscore;	  
	      }
	 }
	//onload='populatescore()'
	var strDiv ="<div  id='popupScore' style='color:FFFFFF;'  >";
	strDiv = strDiv.concat("<table>");
//	strDiv=strDiv.concat("<tr><td><input id='maxscoreinput' style='height:30px;' onkeypress='return isNumber(event)' onkeyup='return checkvalue(event)' value='"+studentscore+"'></input></td>");
	strDiv=strDiv.concat("<tr><td><textarea id='inputscore'  cols='25' rows='11' style='height:30px;width:180px;' onkeypress='return isNumber(event)' onkeyup='return checkvalue(event)' >"+studentscore+"</textarea> </td>");
	strDiv = strDiv.concat("</table>");
	strDiv = strDiv.concat("</div>");
	console.log(strDiv);
	
	//var strDiv = document.getElementById("popupScore").innerHTML;
	
	$("#afui").popup({
        title: " Assign Score (Max:" +maxscore+")",
        suppressTitle: false,
        message:strDiv,
        //onShow: function () {},
      //  message:"<div  id='myPopup1'  style='height:280px;width330px;color:#000000;background-color:#000000;'><table ><tr><td > <select id='stickerdropdown' size='3'></select></td><td width='10px'></td><td><select id='gradesdropdown' size='3'></select></td></tr><tr style='height:10px;'></tr><tr><td colspan='3'><textarea id='inputbx' cols='25' rows='11'   placeholder='Type Feedback!' style='background-color:#FFFFFF;' overflow:'scroll'  onchange='updateFeedbackText();' >"+feedbackText+"</textarea></td></tr></table></div>",
        	cancelText: " OK ",
      //  cancelClass:"okbutton",
        doneClass:'button',
        cancelClass:'button',
        addCssClass: "test2",
      //  addCssClass: "test",
         cancelCallback: function(){ updatescore(ctlID);},
       // doneText: "Ok",
      //  doneCallback: function(){alert($('input[name="af-group-0"]:checked').val());},
        cancelOnly: true
    });
	/* var $element = $('.afPopup');
 	console.log($element);
 	$element.width='100px';
 	console.log($element.width);*/
 	
};

$('#popupScore').load(function() {

	console.log('popupscore ready');

	});
/*
populatescore= function()
{
	console.log('In populatescore');
	 var ele = document.getElementById('maxscoreinput');
	 console.log('populate score');
	 console.log(studentscore);
	  ele.value= studentscore;
}*/
checkvalue=function(evt){
	console.log('checkvalue');
	//console.log(document.getElementById('maxscoreinput'));
	 var ele = document.getElementById('inputscore');
	 console.log('checkvalue ele.value');
	 console.log(ele.value);
	 console.log(ele);
	// console.log('maxscore');
	// console.log(maxscore);
	 if(ele.value > maxscore)
		  {
		//  console.log(ele.value);
		 ele.style.backgroundColor='#FF0000';
		 // $.ui.popup('Invalid score.Please enter a value less than or equal to max score.');
		  return false;
		  }
	  else
		  {
		  ele.style.backgroundColor='#000000';
		  }
	  return true;
};

 isNumber=function(evt) {
	console.log('isNumber');
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
  
    return true;
};

updatescore=function(ctlID)
{
	var ele = document.getElementById('inputscore');
	console.log('update score');
	console.log('ele');
	console.log(ele);
	console.log('ele.value');
	console.log(ele.value);
	//console.log(ele.text);
//	 document.getElementById('maxscoreinput').innerText='abc';
//	 ele.innerText='def';
//	 console.log('ele.innerText');
//	console.log(ele.innerText);
	var eleValue= ele.value;
	studentscore=ele.value;
//	console.log('studentscore');
//	console.log(document.getElementById('maxscoreinput').innerText);
	for(var prop in arrSmartPaperControls)
	   {
	      if(this.arrSmartPaperControls[prop].id == ctlID)
	      {
	    	  arrSmartPaperControls[prop].studentscore = eleValue;
	    	  arrSmartPaperControls[prop].isevaluated= 1;
	      }
	   }
	//console.log('updatescore arrSmartPaperControls');
	//console.log(arrSmartPaperControls);

};


setLocalAnsSavedText = function(getObjectItem,typeExactMatchControl,ctrlAns){
  
  //check the score value
  isItemSelected = false;
  jsonWorkObject = JSON.parse(smartPaperJsonDataObject);
  jsonWorkObject = jsonWorkObject.Work;
  for(var propCtrl in jsonWorkObject.listControls){
    if(jsonWorkObject.listControls[propCtrl].CtlID == getObjectItem.id && !isItemSelected){
     /* if(jsonWorkObject.listControls[propCtrl].CtlValue == ctrlAns)
      {*/
        document.getElementById(typeExactMatchControl.id).value =jsonWorkObject.listControls[propCtrl].CtlValue;
        var inputCtrl = document.getElementById(typeExactMatchControl.id);
         //checkSmartPaperAnswer(jsonWorkObject.listControls[propCtrl].CtlValue,document.getElementById(typeExactMatchControl.id),inputCtrl);
                checkSmartPaperAnswer(jsonWorkObject.listControls[propCtrl].CtlValue,typeExactMatchControl.id,inputCtrl);
        //setControlBorderWriterWrong(inputCtrl,isAnsCorrect)
        isItemSelected = true;
        break;
     /* }else{
      } */
    }
  }
};
setLocalAnsSavedRangeText = function(getObjectItem,typeExactMatchControl,ctrlAns){
  
  //check the score value
  isItemSelected = false;
  jsonWorkObject = JSON.parse(smartPaperJsonDataObject);
  jsonWorkObject = jsonWorkObject.Work;
  for(var propCtrl in jsonWorkObject.listControls){
    if(jsonWorkObject.listControls[propCtrl].CtlID == getObjectItem.id && !isItemSelected){
      document.getElementById(typeExactMatchControl.id).value =jsonWorkObject.listControls[propCtrl].CtlValue;
        isItemSelected = true;
        var inputCtrl = document.getElementById(typeExactMatchControl.id);
         console.log('border for range');
         checkSmartPaperAnswer(jsonWorkObject.listControls[propCtrl].CtlValue,typeExactMatchControl.id,inputCtrl);
        //setControlBorderWriterWrong(inputCtrl,isAnsCorrect);
        break;
    }
  }
};
createSmartTextControls = function(id,x,y,width,height,defaultValue,fontFamily,fontSize,fontStyle,fontColor,ctlAns,subtype){
  var input = document.createElement("input");
  input.id = id;
  input.type = "text";
  input.style.background="white";
  input.style.color="black";
  input.placeholder=subtype;
  input = ctrlSizeWidthTopHeight(input,x,y,width,height);
  input.addEventListener('mouseout', checkAnswerForSmartPaperText, false);
  //input.disabled = true; <!-- Priya June2014 disable control -->
  return (input);
 };
 ctrlSizeWidthTopHeight=function(input,x,y,width,height){
  var controlSizeIn ='px';
  //alert(parseInt(y));
  //alert($("#smartSketch")[0].offsetTop);
  
  ctrlLeft= parseInt(x); //$("#smartSketch")[0].offsetLeft+parseInt(x);
  ctrlTop = parseInt(y); //$("#smartSketch")[0].offsetTop+parseInt(y);
  //alert(ctrlTop);
  offsetMargin = (canvasRoundRatio/canvasRound);
  //alert(offsetMargin);
  offMargin = offsetMargin; //+0.2;//1.58;
  //alert(offMargin); 
  /*if((ctrlTop*offMargin)<=4){
    ctrlTop =10;
  }*/
  //offMargin=((parseFloat(offMargin)+parseFloat(.20)).toFixed(2));

  input.style.left = (ctrlLeft*offMargin)+controlSizeIn; //parseInt(x)+container.offsetLeft+'px';  //'%';
  input.style.top = (ctrlTop*offMargin)+controlSizeIn; //parseInt(y)+container.offsetTop+ controlSizeIn; //'%';
  input.style.width = (width*offMargin)+controlSizeIn; //width+'px'; //(width)*100 +'%'; //'5%'

  input.style.height= (height*offMargin)+controlSizeIn; //height+'px';  //height+'%';
  input.style.position = "absolute";
  
  return input;
 };
 createTextAreaControls = function(id,x,y,width,height,defaultValue,fontFamily,fontSize,fontStyle,fontColor,ctlAns,subType){
  var input = document.createElement("textarea");
  input.id = id;
  input.style.background="white";
  input.style.color="black";
  input.placeholder="EM";
  input = ctrlSizeWidthTopHeight(input,x,y,width,height);
  input.addEventListener('mouseout', checkAnswerForSmartPaperText, false);
 // input.disabled = true; <!-- Priya June2014 disable control -->
  return (input);
  
 };
 checkAnswerForSmartPaperText = function(event){
  setSmartPaperLocalToSave(true);
   // if(this.value.length){ // Priya 7Oct2014 commented this
      var inputCtrl = document.getElementById(this.id);
       checkSmartPaperAnswer(this.value,this.id,inputCtrl);
      //setControlBorderWriterWrong(inputCtrl,isAnsCorrect);
   // }   
 };
 
 setControlBorderWriterWrong = function(inputCtrl,isAnsCorrect){
     if(isAnsCorrect)
     {
         setSmartPaperRightAnswer(inputCtrl);
         inputCtrl.readOnly = true;
     }
     else
     {
    	 setSmartPaperWrongAnswer(inputCtrl);
     }
  
 };
 
 checkSmartPaperAnswer = function(answer,ctrlId,inputCtrl){
  var result = false;
  var isFF = false;
   arrControlObj =  arrSmartPaperControls;
   for(var prop in arrControlObj)
   {
      if(this.arrSmartPaperControls[prop].id == ctrlId)
      {
        if(arrControlObj[prop].subtype =='EM')
        {
          if(arrControlObj[prop].value1.toLowerCase() ==answer.toLowerCase())
          {
        	  arrControlObj[prop].maxscore= arrControlObj[prop].maxscore;
        	  arrControlObj[prop].studentscore = arrControlObj[prop].maxscore;
        	  // Calculate Total Score for excercise
	    	//  totalPoints= totalPoints + arrControlObj[prop].maxscore;
	    	//  scoredPoints = scoredPoints+ arrControlObj[prop].maxscore;
            result = true;
            break;
          } else
        	  {
        	  arrControlObj[prop].maxscore= arrControlObj[prop].maxscore;
              arrControlObj[prop].studentscore = '0';
        	  }
        }
        if(arrControlObj[prop].subtype =='FF'){
            isFF = true;
            break;
          }
        
        else if(arrControlObj[prop].subtype =='RM'){
          ansValue = parseFloat(answer);
          range1 = parseFloat(arrControlObj[prop].value1);
          range2 = parseFloat(arrControlObj[prop].value2);
          if(ansValue>=range1&&ansValue<=range2)
          {
        	  arrControlObj[prop].maxscore= arrControlObj[prop].maxscore;
              arrControlObj[prop].studentscore = arrControlObj[prop].maxscore;
              // Calculate Total Score for excercise
	    	//  totalPoints= totalPoints + arrControlObj[prop].maxscore;
	    	//  scoredPoints = scoredPoints+ arrControlObj[prop].maxscore;
              result = true;
            break;
          }
          else
        	  {
        	  arrControlObj[prop].maxscore= arrControlObj[prop].maxscore;
              arrControlObj[prop].studentscore = '0';
        	  }
        }
      }
    }
   if(!isFF){
      setControlBorderWriterWrong(inputCtrl,result);
      
   }
   //return result;
 };

 setSmartPaperWrongAnswer = function(inputCtrl)
 {
	    //if(getPracticeMode()){
        inputCtrl.style.borderColor="red";
        inputCtrl.style.border ='2px solid';
        inputCtrl.style.color="red";

    //inputCtrl.style.background-color ="white";
    //}
 };
 
 setSmartPaperRightAnswer = function(inputCtrl){
    //if(getPracticeMode()){
	 console.log('setSmartPaperRightAnswer for combo ink /txt');
	 var ctlID=0;
	 if(inputCtrl.id.split('cmbSmartText').length>1)
	 {
		 ctlID=  inputCtrl.id.split('cmbSmartText')[1];
		    
	 }
	 else
	 {
		 ctlID = inputCtrl.id.split('cmbSmartInk')[1];
	 }
	 console.log('CtlID');
	 console.log(ctlID);
	 
	 console.log('arrSmartPaperControls');
	 console.log(arrSmartPaperControls);
	 
	 for(var prop in arrSmartPaperControls)
	   {
		 console.log('this.arrSmartPaperControls[prop].id');
		 console.log(this.arrSmartPaperControls[prop].id);
		 
	      if(this.arrSmartPaperControls[prop].id == inputCtrl.id)
	      {
	    	  console.log('2 setSmartPaperRightAnswer for combo ink /txt');
	    	  console.log(this.arrSmartPaperControls);
	    	  this.arrSmartPaperControls[prop].studentscore=this.arrSmartPaperControls[prop].maxscore;
	    	  console.log(this.arrSmartPaperControls);
	    	  // Calculate Total Score for excercise
	    	//  totalPoints= totalPoints + this.arrSmartPaperControls[prop].score;
	    	//  scoredPoints = scoredPoints+ this.arrSmartPaperControls[prop].score;
	      }
	   }
	    
        inputCtrl.style.borderColor="green";
        inputCtrl.style.border ='2px solid';
        inputCtrl.style.color="green";
    //inputCtrl.style.background-color ="green";
    //}
 };


 cmbTextControlChangeSelection =function(event){
  var indexval = this.value;
  if(this.value =='1'){
    setSmartPaperRightAnswer(document.getElementById(this.id));
  }else{
    setSmartPaperWrongAnswer(document.getElementById(this.id));
  }
 };

 createSmartPaperCmbTextControl = function(getObjectItem){
  //<div id="demoBasic"></div>
  ctrlName = getObjectItem.id;
  ctrlX = getObjectItem.xcoordinate;
  ctrY = getObjectItem.ycoordinate;
  ctrlWidth = getObjectItem.width;
  ctrlHeight = getObjectItem.height;
  ctrlFontSize = getObjectItem.fontsize;
  ctrlFontStyle = getObjectItem.fontstyle;
  ctrlFontColor = getObjectItem.fontcolor;
  var offTopMargin = 5;
  
  // priya moved it from bottom 
  prepareSmartArrayObjectControl('cmbSmartText'+ctrlName,ctrlName,'ComboText','','',getObjectItem.subtype,getObjectItem.maxscore,getObjectItem.studentscore,getObjectItem.isevaluated);//,getObjectItem.maxscore,studentscore);

  var input = document.createElement("Select");
  input.id = 'cmbSmartText'+ctrlName;
  input.style.background="white";
  input.style.color=ctrlFontColor;
 // input = this.ctrlSizeWidthTopHeight(input,ctrlX,ctrY,ctrlWidth,ctrlHeight);
  //input.style.background="white";
  input.style.color="black";
  //input.style.position = "absolute";
  input.disabled = true; <!-- Priya June2014 disable control -->
  input.style.zIndex = 10;
  var ddInkData =[];
  offsetMargin = (canvasRoundRatio/canvasRound);
  offMargin = offsetMargin;//+0.2;
  var currIndex,isItemSelected=false;
  for(var prop in getObjectItem.answer.listitems ){
    var ddInkObject ={};
       ddInkObject.text=getObjectItem.answer.listitems[prop].value;
      ddInkObject.value= getObjectItem.answer.listitems[prop].score;
      if(isLocalFileDataResponse){
        //check the score value
        jsonWorkObject = JSON.parse(smartPaperJsonDataObject);
        jsonWorkObject = jsonWorkObject.Work;
          for(var propCtrl in jsonWorkObject.listControls){
            if(jsonWorkObject.listControls[propCtrl].CtlID == ctrlName && !isItemSelected){
              if(jsonWorkObject.listControls[propCtrl].CtlValue == getObjectItem.answer.listitems[prop].value){
                ddInkObject.selected =true;
                isItemSelected = true;
                break;
              }else{
                ddInkObject.selected =false;
              }
            }
          }
      }
      ddInkData.push(ddInkObject);
      currIndex++;
  }
   document.getElementById("smartSketch").appendChild(input);
   //prepareSmartArrayObjectControl('cmbSmartText'+ctrlName,ctrlName,'ComboText','','',getObjectItem.subtype);
   // Priya june 2014 commented this as this is not needed in teachers app
   $('#cmbSmartText'+ctrlName).ddslick({
    data: ddInkData,
    width: ctrlWidth,
    ctrlHeight: ctrlHeight, 
    imagePosition: "left",
    selectText: "Select",
     onSelected: function (data) {
    	 console.log('inside on selected');
      setSmartPaperLocalToSave(true);
      displaySelectedData(data.original[0].id , data);
      console.log(data);
    } 
 });
    offsetMargin = (canvasRoundRatio/canvasRound);
    offMargin = offsetMargin;//+0.2;
//    ctrlLeft= $("#smartSketch")[0].offsetLeft+parseInt(ctrlX);
 //   ctrlTop = $("#smartSketch")[0].offsetTop+parseInt(ctrY);
    ctrlLeft= parseInt(ctrlX);
    ctrlTop = parseInt(ctrY);
   
    $('#cmbSmartText'+ctrlName).css('position', 'absolute');
    console.log('here');
    //-5 is required for offset which is extra creating by the custom control.
    var version = parseFloat(getAndroidVersion());
    console.log('aversion');
    console.log(version);
  /*  if(version =='4.4')
    {
    	 offTopMargin = 5*10;
    	 $('#cmbSmartText'+ctrlName).css('top', (ctrlTop*offMargin)-offTopMargin);
    	 $('#cmbSmartText'+ctrlName).css('left', (ctrlLeft*offMargin)-2.5);
   }
    else
    {
          $('#cmbSmartText'+ctrlName).css('top', (ctrlTop*offMargin)-offTopMargin);
          $('#cmbSmartText'+ctrlName).css('left', (ctrlLeft*offMargin));
    }*/
    
    $('#cmbSmartText'+ctrlName).css('top', ctrlTop*offMargin);
    $('#cmbSmartText'+ctrlName).css('left', ctrlLeft*offMargin);
    // Priya commented this line and moved it to top
   // prepareSmartArrayObjectControl('cmbSmartText'+ctrlName,ctrlName,'ComboText','','',getObjectItem.subtype,getObjectItem.maxscore);
 };
 function getAndroidVersion(ua) {
	    var ua = ua || navigator.userAgent; 
	    var match = ua.match(/Android\s([0-9\.]*)/);
	    return match ? match[1] : false;
	};
 creatSmartPaperCmbInkControl = function(getObjectItem){
  //<div id="demoBasic"></div>
  ctrlName = getObjectItem.id;
  ctrlX = getObjectItem.xcoordinate;
  ctrY = getObjectItem.ycoordinate;
  ctrlWidth = getObjectItem.width;
  ctrlHeight = getObjectItem.height;
  ctrlFontSize = getObjectItem.fontsize;
  ctrlFontStyle = getObjectItem.fontstyle;
  ctrlFontColor = getObjectItem.fontcolor;
  
  prepareSmartArrayObjectControl('cmbSmartInk'+ctrlName,ctrlName,'ComboInk','','',getObjectItem.subtype,getObjectItem.maxscore,getObjectItem.studentscore,getObjectItem.isevaluated);
  
  var input = document.createElement("Select");
  input.id = 'cmbSmartInk'+ctrlName;
  input.style.background="white";
  input.style.color=ctrlFontColor;
 input = this.ctrlSizeWidthTopHeight(input,ctrlX,ctrY,ctrlWidth,ctrlHeight);
  //input.style.background="white";
  input.style.color="black";
  //input.style.position = "absolute";
  input.style.zIndex = 10;
  offsetMargin = (canvasRoundRatio/canvasRound);
  offMargin = offsetMargin;//+0.2;
  input.disabled = true; //- Priya June2014 disable control -->
  
  var ddInkData =[];
  var currIndex,isItemSelected=false;
  var count=0;
  for(var prop in getObjectItem.answer.listitems ){
    var ddInkObject ={};
      ddInkObject.text="";
      count=count+1;
      ddInkObject.value= getObjectItem.answer.listitems[prop].score;
      ddInkObject.selected =false;
      ddInkObject.dataVal=count;
      ddInkObject.description="";
    //  var answerbystudent="";
     //'http://dl.dropbox.com/u/40036711/Images/facebook-icon-32.png';
      ddInkObject.imageSrc = 'data:image/png;base64,'+getObjectItem.answer.listitems[prop].value;
     
       if(isLocalFileDataResponse){
        //check the score value
        jsonWorkObject = JSON.parse(smartPaperJsonDataObject);
        jsonWorkObject = jsonWorkObject.Work;
          for(var propCtrl in jsonWorkObject.listControls){
            if(jsonWorkObject.listControls[propCtrl].CtlID == ctrlName && !isItemSelected){
            	console.log('jsonWorkObject.listControls[propCtrl].CtlValue');
            	console.log( jsonWorkObject.listControls[propCtrl].CtlValue );
            	console.log(count);
           // 02Nov2014 commented above line and replaced with following line
		         if( jsonWorkObject.listControls[propCtrl].CtlValue==count)
		            	//	 if(jsonWorkObject.listControls[propCtrl].CtlValue == getObjectItem.answer.listitems[prop].value)
		         {
            	//  answerbystudent=jsonWorkObject.listControls[propCtrl].CtlValue;
            	 // input.innerText=answerbystudent;
            	 // console.log('jsonWorkObject.listControls[propCtrl].CtlValue ');
            	//  console.log( jsonWorkObject.listControls[propCtrl].CtlValue );
                ddInkObject.selected =true;
                isItemSelected = true;
                break;
              }else{
                ddInkObject.selected =false;
              }
            }
          }
      }
      ddInkData.push(ddInkObject);
      currIndex++;
  }
   document.getElementById("smartSketch").appendChild(input);
   //priya moved the line below to the top
   //prepareSmartArrayObjectControl('cmbSmartInk'+ctrlName,ctrlName,'ComboInk','','',getObjectItem.subtype,getObjectItem.maxscore);
  
   //Priya june 2014 commented this as this is not needed in teachers app
  $('#cmbSmartInk'+ctrlName).ddslick({
    data: ddInkData,/// Priya June2014 commented this as this is not needed  for teacher sapp
    width: ctrlWidth,
    ctrlHeight: (ctrlHeight),
    imagePosition: "left",
    selectText: "Select",
  onSelected: function (data) {
	  console.log('inside on selected');
      setSmartPaperLocalToSave(true);
     displaySelectedData(data.original[0].id , data);
      console.log(data);
    }  
 });
    offTopMargin=0;
    
   // Priya changed this
  //  ctrlLeft= $("#smartSketch")[0].offsetLeft+parseInt(ctrlX);
  //  ctrlTop = $("#smartSketch")[0].offsetTop+parseInt(ctrY);
    ctrlLeft= parseInt(ctrlX);
    ctrlTop = parseInt(ctrY);
 
    $('#cmbSmartInk'+ctrlName).css('position', 'absolute');
    var version = parseFloat(getAndroidVersion());
    console.log('aversion');
    console.log(version);
   // $('#cmbSmartInk'+ctrlName).css('margin-top', "-200px");
  /* if(version =='4.4')
    {
    	offTopMargin = 5*10;
    	
    	 $('#cmbSmartInk'+ctrlName).css('top', (ctrlTop*offMargin)-offTopMargin);
    	 $('#cmbSmartInk'+ctrlName).css('left', (ctrlLeft*offMargin));
   }
    else
    {  
    	$('#cmbSmartInk'+ctrlName).css('top', (ctrlTop*offMargin)-offTopMargin);
        $('#cmbSmartInk'+ctrlName).css('left', ctrlLeft*offMargin);
    }*/
    
    $('#cmbSmartInk'+ctrlName).css('top', ctrlTop*offMargin);
    $('#cmbSmartInk'+ctrlName).css('left', ctrlLeft*offMargin);

    //prepareSmartArrayObjectControl('cmbSmartInk'+ctrlName,ctrlName,'ComboText','','');
 };
 displaySelectedData=function(ctrlName,data){
  if(data.selectedData.value =="1"){
      setSmartPaperRightAnswer(document.getElementById(ctrlName));
      //$( "#"+document.getElementById(ctrlName)).children().css( "bordercolor", "red" );
      //$('#'+(document.getElementById(ctrlName).id)).children().css( "border-color", "red" );
      }else{
      setSmartPaperWrongAnswer(document.getElementById(ctrlName));
      }
      preapreDDSlickAnswerObject(ctrlName,data);
 };
preapreDDSlickAnswerObject = function(ctrlName,data){
  var objDDSlickControlsData ={};
  if(ctrlName.split('cmbSmartText').length>1){
    objDDSlickControlsData.id = ctrlName.split('cmbSmartText')[1];
    objDDSlickControlsData.value = data.selectedData.text;
  }else{
    objDDSlickControlsData.id = ctrlName.split('cmbSmartInk')[1];
    objDDSlickControlsData.value = data.selectedData.imageSrc.replace(/^data:image\/png;base64,/, '');
  }
    arrSmartPaperDDSlickAns.push(objDDSlickControlsData);
};
 prepareSmartArrayObjectControl = function(id,name,type,value1,value2,subtype,maxscore1,studentscore1,IsEvaluated)
 {
	 console.log('maxscore1');
	 console.log(maxscore1);
    var objControlsData ={};
    objControlsData.id = id;
    objControlsData.name = name;
    objControlsData.value1 = value1;
    objControlsData.value2 = value2;
    objControlsData.type = type;
    objControlsData.subtype = subtype;
    objControlsData.maxscore=maxscore1;
    objControlsData.studentscore = studentscore1;
    objControlsData.isevaluated=IsEvaluated;
    //add subtype as well
    arrSmartPaperControls.push(objControlsData);
    totalSPControl++;
    console.log('objControlsDataStructure');
    console.log(objControlsData);
    //$('#smartPaperquestTotal').text(totalSPControl);
  };
  
  

  removeAllSmartControls = function()
    {
       // $("#mainCanvas").remove();
       imgsrc="";
       
       $('#smartSketch').css("background-image", "url("+imgsrc+")");
       sketcher.clear();
        //$("#topCanvas").remove();
       // sketcher = null;
        arraySmartControls = this.arrSmartPaperControls;
        if(arraySmartControls){
            for (var prop = 0, len = arraySmartControls.length; prop < len; prop++) {
                var inputCtrl = document.getElementById(arraySmartControls[prop].id);
                if(inputCtrl){
                    $("#" + inputCtrl.id).remove();
                }
            }
        }
    };
    saveSmartFreeFlowExercise = function(){
      uploadSPTeacherFeedback(prepareSmartPaperPayload(),workid);
    };
    saveLocalSmartFreeFlowExercise = function(isBackPage){
      isBackPageRequested = isBackPage;
      uploadSmartLocalPaerData(prepareSmartPaperPayload());
    };
    smartPaperLocalFolderSaveResponse = function(response){
      if(response){
        if(response.MessageID === 0)
          {
            setMainCourse(false);
            displayAlertBox("Successfully saved exercise in your Backpack folder.",'Save Exercise',submitSPFolderAction);
            
          }
       else{
        $.ui.popup('There is an error while submitting Exercise.Please try again later');
       } 
      }
      $.ui.hideMask();
    };

    submitSPFolderAction = function(){
      setLocaltoSave(true);
      if(isBackPageRequested){
              $.ui.loadContent('#backPackContentList', false, false, "slide");
            }
            
    } ;   
   prepareSmartPaperPayload = function(){
    var listControls=[];
      
       var  objAnswers ={};
        // Sample building of payload 
       // objListExcerciseModes.listExcerciseModes = listArrExcerciseMode;
       arraySmartControls = this.arrSmartPaperControls;
    //   console.log(' in prepareSmartPaperPayload');
    //   console.log(' arraySmartControls');
    //   console.log(arraySmartControls);
    //   console.log('arrSmartPaperDDSlickAns');
     //  console.log(arrSmartPaperDDSlickAns);
        if(arraySmartControls){
        	
            for (var prop = 0, len = arraySmartControls.length; prop < len; prop++)
            {
                var inputCtrl = document.getElementById(arraySmartControls[prop].id);
                if(inputCtrl)
                {
                    //$("#" + inputCtrl.id).remove();
                    if('SelfGradingTextBox' == arraySmartControls[prop].type)
                    {
                    	if(arraySmartControls[prop].subtype=='FF')
                    		{
			                      var listControl ={};
			                      listControl.CtlID=inputCtrl.id;
			                    
			                      listControl.CtlValue = inputCtrl.value;
			                      listControl.StudentScore=arraySmartControls[prop].studentscore;
			              
			                    /* if(arraySmartControls[prop].subtype='RM')
			                      {
			                    	  listControl.IsEvaluated=1;
			                      }
			                      else if(arraySmartControls[prop].subtype='EM')
			                      {
			                    	  listControl.IsEvaluated=1;
			                      }
			                      else
			                      {*/
			                        listControl.IsEvaluated=arraySmartControls[prop].isevaluated;
			                      //}
			                      listControl.CtlMaxScore=arraySmartControls[prop].maxscore;
			                      listControls.push(listControl);
                    		}
                    }
                  }
            }
            
         
            /*  if(arrSmartPaperDDSlickAns)
              {
            	  var prop=0;
            	  while ( prop < arrSmartPaperDDSlickAns.length) 
            	  {
           
                   var listControl ={};
                  listControl.CtlID=arrSmartPaperDDSlickAns[prop].id;
                  listControl.CtlValue = arrSmartPaperDDSlickAns[prop].value;
               
                  for (var prop1 = 0, len = arraySmartControls.length; prop1 < len; prop1++)
                  {
                	 var ctlID=arraySmartControls[prop1].id;
                	 
                	 if(arraySmartControls[prop1].id.split('cmbSmartText').length>1)
                		 {
                			 ctlID=  arraySmartControls[prop1].id.split('cmbSmartText')[1];
                			    
                		 }
                		 else if(arraySmartControls[prop1].id.split('cmbSmartInk').length>1)
                		 {
                			 ctlID = arraySmartControls[prop1].id.split('cmbSmartInk')[1];
                		 }
                	  if(ctlID ==  listControl.CtlID)
                	 {
                		  listControl.CtlMaxScore=arraySmartControls[prop1].maxscore;
                		  listControl.StudentScore=arraySmartControls[prop1].studentscore;
                		  listControl.IsEvaluated='1';
                          listControl.StudentScore=arraySmartControls[prop1].studentscore;
                          
                		  break;
                     }
                  }
                   
                  listControls.push(listControl);
                   prop=prop+1;
                }
              }*/
              var dataURL = sketcher.toString(); //.toDataURL();
              console.log('sketcher the string' + dataURL);
              //dataURL = dataURL.replace(/^data:image\/png;base64,/, ''); 
              objAnswers.listControls = listControls;
              objAnswers.backgroundInk=dataURL;

        }
        return objAnswers;
   } ;    
        
    
    
// **** function to setup a new canvas for drawing ********
setPencilSize = function(penSize){
    //ctx.lineWidth = penSize; 
//	alert('here12');
    sketcher.pencilSize(penSize);
};
setPencilColor = function(penColor){
//	alert('here13');
    //ctx.strokeStyle = penColor;
    sketcher.pencilColor(penColor);
};

drawPaintColor = function(){
	//alert('here11');
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = color;
  //ctx.lineWidth = 5; 
  setPencilSize(20);
  setPencilSize(3); 
    
} ;  
smartEraser = function ()
{    
    sketcher.eraser(); 
    $( ".popColor" ).fadeOut();
    $( ".popEraser" ).fadeOut();
    $('#eraser').css( "border-color", "blue" );  
    $('#pencil').css( "border-color", "#4C4C4C" );                   
  
  //ctx.strokeStyle = "rgb(255, 255, 255)";
 // ctx.globalCompositeOperation = "destination-out";  
  //ctx.strokeStyle = ("rgba(255,255,255,255)"); /* or */ 
  //ctx.fillStyle = "rgba(255,0,0,0)";
  //ctx.lineWidth = 20;
  //isToolPencil = false;
};
function pencilSelect(){
  /*isToolPencil = true;
  ctx.strokeStyle='black';
  drawPaintColor();*/
	
  $( ".popColor" ).fadeOut();
    $( ".popEraser" ).fadeOut();
  $('#pencil').css( "border-color", "blue" );
  $('#eraser').css( "border-color", "#4C4C4C" );
  sketcher.pencil(); 
  
  
};
// prototype to start drawing on touch using canvas moveTo and lineTo
$.fn.drawTouch = function() {
//	alert('here');
  var start = function(e) {
        e = e.originalEvent;
    ctx.beginPath();
    x = e.changedTouches[0].pageX-marginLeft;
    y = e.changedTouches[0].pageY-70;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
    e.preventDefault();
        e = e.originalEvent;
    x = e.changedTouches[0].pageX-marginLeft;
    y = e.changedTouches[0].pageY-70;
    ctx.lineTo(x,y);
    ctx.stroke();
  };
  $(this).on("touchstart", start);
  $(this).on("touchmove", move);  
}; 
    
// prototype to start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$.fn.drawPointer = function() {
	//alert('here1');
  var start = function(e) {
        e = e.originalEvent;
    ctx.beginPath();
    x = e.pageX-marginLeft;
    y = e.pageY-70;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
    e.preventDefault();
        e = e.originalEvent;
    x = e.pageX-marginLeft;
    y = e.pageY-70;
    ctx.lineTo(x,y);
    ctx.stroke();
    };
  $(this).on("MSPointerDown", start);
  $(this).on("MSPointerMove", move);
};       

// prototype to start drawing on mouse using canvas moveTo and lineTo
$.fn.drawMouse = function() {
//	alert('here2');
  var clicked = 0;
  var start = function(e) {
    clicked = 1;
    ctx.beginPath();
    x = e.pageX-marginLeft;
    y = e.pageY-70;
    ctx.moveTo(x,y);
  };
  var move = function(e) {
	//	alert('here14');
    if(clicked){
      x = e.pageX-marginLeft;
      y = e.pageY-70;
      ctx.lineTo(x,y);
      ctx.stroke();
    }
  };
  var stop = function(e) {
	//	alert('here4');
    clicked = 0;
    var topCanLayer = document.getElementById('topCanvas');
    //capture Canvas Strokes if tool is is not eraser.
    if(isToolPencil && topCanLayer){
        var dataURL = topCanLayer.toDataURL(); 
        var objStroke ={};
        objStroke.strokes = dataURL;
        arrPencilStrokes.push(objStroke);
        
    }
    
  };
  $(this).on("mousedown", start);
  $(this).on("mousemove", move);
  $(window).on("mouseup", stop);
};

// Start checking the accelerometer
function startWatch() {
    // Update acceleration every 1 seconds
    var options = { frequency: 100 };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop checking the accelerometer
function stopWatch() {
    /*if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }*/
}

// onSuccess: draw line based on tilt and amount of tilt
function onSuccess(acceleration) {
//	alert('here5');
    // for debug purpose to print out accelerometer values
  var element = document.getElementById('debug');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                        'Acceleration Y: ' + acceleration.y + '<br />' +
                        'Acceleration Z: ' + acceleration.z ;
  
  // hide the accelerometer aka etch on/off button
  $("#etch").show();
    
    if (!etch) {
        $("#etchHelp").fadeIn(); 
        stopWatch();
        return;
    }
  
  // draw based on accelerometer positions
  if(acceleration.x > 2 && Math.abs(acceleration.y) < 2 ){
    if (x < 3){ 
      buzzDevice(1);
      x = 3; 
    }
    x = x-Math.abs(acceleration.x);
    ctx.lineTo(x, y);
    ctx.stroke();
  } else if(acceleration.x < -2 && Math.abs(acceleration.y) < 2){
    if (x > $(window).width() - 3){
      buzzDevice(2);
      x = $(window).width() - 3;
    }
    x = x+Math.abs(acceleration.x);
    ctx.lineTo(x, y);
    ctx.stroke();
  } else if(acceleration.y > 2 && Math.abs(acceleration.x) < 2){
    if (y > $(window).height() - 93) { 
      buzzDevice(3);
      y = $(window).height() - 93;
    }
    y = y+Math.abs(acceleration.y);
    ctx.lineTo(x, y);
    ctx.stroke();
  } else if(acceleration.y < -2 && Math.abs(acceleration.x) < 2){
    if(y < 3) { 
      buzzDevice(4);
      y = 3;
    }
    y = y-Math.abs(acceleration.y);
    ctx.lineTo(x, y);
    ctx.stroke();
  } 
}

// onError: Failed to get the acceleration
function onError() {
    document.getElementById('debug').innerHTML = 'ERROR';
}

var position = 0;

// vibrate and beep when edge of screen it hit while accelerometer drawing
function buzzDevice(pos){
    if(position !== pos){ // vibrate only once when boudary is reached at a position
      navigator.notification.vibrate(300);
        position = pos;
    }
}
// **** function to End     setup a new canvas for drawing ********

  
