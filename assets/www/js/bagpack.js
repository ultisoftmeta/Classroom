var phonecatApp = angular.module('phonecatApp', []);

 
phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [{"CourseID":1,"CourseName":"Maths"},{"CourseID":2,"CourseName":"Science"},{"CourseID":3,"CourseName":"Social Studies"},{"CourseID":4,"CourseName":"Computer Technology"},{"CourseID":5,"CourseName":"Languages"}]; 
  $scope.courseList =null;
  $scope.courses=null;
  $scope.domainID=0;
  $scope.applicationName=null;
  $scope.strFileName =null;
  $scope.strContent =null;
  $scope.courseContentID=null;
  $scope.isSmartPaper=null;
  $scope.studentId=null;
  $scope.teacherId=null;
  $scope.activityType =null;
  $scope.localActivityType =null;
  $scope.currentCourseName=null;
  $scope.currentCourseID = null;
  $scope.spObject=null;
  $scope.work=null;
  $scope.listControls=[];
  $scope.backgroundInk=null;
  $scope.excerciseName='';
  
  $scope.feedbackFlag='0';
  $scope.feedbackText='';
  $scope.sticker='';
  $scope.grade='';
  $scope.rework='0';
  $scope.reportJsonResponse=''; // Priya July2014
  $scope.windowHeight=0;
  $scope.windowWidth=0;
  
validateDomain = function(){
  console.log("hello");
  var userName = $('#txtUserName').val();
  var password =$('#txtUserPassword').val();
  var userDomain = $('#txtUserDomain').val();
  //sapi.validateDomain($('#txtDomain').val(),$scope.validateResponse);
  $.ui.showMask();
  sapi.validateStudent(userName,password,userDomain,$scope.validateResponse,'login');
}

updateFeedbackvarinbackpack= function(value,flag,stickerVal,gradeVal,reworkval)
{
	console.log('update Feedback in backpack.js');
	
	$scope.feedbackFlag=flag;
	//alert(flag);
	 $scope.feedbackText=value;
	 $scope.sticker =stickerVal;
	 $scope.grade=gradeVal;
	 $scope.rework = reworkval;
	 
	 console.log('feedbackText');
	 console.log(value);
	 console.log('stickerVal');
	 console.log(stickerVal);
	 console.log('gradeVal');
	 console.log(gradeVal);
	 console.log('rework');
	 console.log(reworkval);
	 console.log('$scope variables updated in backpack');
//alert(value);

}
//'PlanoISD'
$scope.validateResponse = function(response){
	console.log('validateResponse');
	console.log(response);
	if(response!='')
		{
			 objDomain =JSON.parse(response);
			// console.log('objDomain');
			// console.log(objDomain);
		   	 if(objDomain.DomainID>0 )
		   	 {
		      $('#logedUserName').text($('#txtUserName').val());
		
		   	 	$scope.domainID = objDomain.DomainID;
		      $scope.teacherId =objDomain.LoginID;
		   	 	$scope.getCourseList();
		      localStorage.setItem("domainName",$('#txtUserDomain').val());
		   	 	$.ui.loadContent("#backPack",false,false,"slide");
		   	 }else{
		   	 $.ui.hideMask();
		   	 $.ui.popup('Invalid Username, Password, or Domain. Please modify and try again.');
		   	 }
     
   	 }
	else
		
		{
		$.ui.hideMask();
	   	 $.ui.popup('Invalid Username, Password, or Domain. Please modify and try again.');
		}
}

$scope.getCourseList = function(){
  	sapi.getCourseList($scope.getCourseListResp,'backPack');
  }
 
$scope.getCourseListResp = function(response){
  	console.log (response);
  	//$scope.courseList = response;
  	$('#courseList').empty();
  	if(response.length){
  	objCourseList = JSON.parse(response)
  	for(prop in objCourseList){
      $scope.currentCourseName=objCourseList[prop].CourseName;
      //$scope.currentCourseID = objCourseList[prop].CourseID;
  		$("#courseList").append("<li><a href='#backPackContentList' onclick='getCourseContents("+objCourseList[prop].CourseID+",this,true);' >"+$scope.currentCourseName+"</a></li>");
  	}
  	$.ui.hideMask();
  	}
  }



getLocalFolderContents = function(){
  sapi.getLocalFolderData($scope.domainID,$scope.studentId,$scope.localFolderContentResponse);
}
$scope.localFolderContentResponse = function(response)
{
  $('#localFileList').empty();
  if(response.length)
  {
	    objContents = JSON.parse(response);
	    console.log('local folder contents');
	    console.log(objContents);
	    for(prop in objContents)
	    {
	      localActivityType =0; //0 =practice mode, 1 = test mode
	      if(objContents[prop].ActivityType.toUpperCase() =='TEST')
	      {
	        localActivityType =1;
	      }
	      var smartPaper =0
	      if(objContents[prop].AppName.toUpperCase()=='SMARTPAPER')
	      {
	       smartPaper =1;
	      }
	      $('#localFileList').append("<li><a  onclick='getLocalContentsDetails("+localActivityType+","+objContents[prop].ContentID+","+smartPaper+",this);' >"+objContents[prop].ContentName+"</a></li>");
       }
  }
}  
getCourseContentsFromLoad = function(){
  getCourseContents($scope.currentCourseID,'',false);
} 

// get course's content list
getCourseContents =function(courseId,currentItem,isMainFile){
 $scope.currentCourseID = courseId;
  if(isMainFile)
  {
    setMainCourse(isMainFile);
  }
	if(device.platform !=null)
	{
                        if(checkConnection() ==-1 || checkConnection() ==-2)
                        {
                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                            return false;
                        }
     }
  if(currentItem)
  {
    $('#headerCourseContent').text(currentItem.innerText+": Content list");

  }
  setSelectedItemColor(currentItem);
	$.ui.showMask("Loading...");
 	console.log(courseId);
 	// Priya June2014 changed api call getCourseContentListResp to getCourseContentListNewResp
 	//sapi.getContentList($scope.domainID,courseId,$scope.studentId,$scope.getCourseContentListResp,'backPackContentList');
 	
 	sapi.getContentList($scope.domainID,courseId,$scope.teacherId,$scope.getCourseContentListNewResp,'backPackContentList');
 }

$scope.getCourseContentListNewResp = function(response)
{
  	console.log ('content list response' + response);
  	console.log ('content list response length' + response.length);
  	$('#courseContentList').empty();
  	//$scope.courseList = response;
  	if(response.length)
  	{
  		objCourseList = JSON.parse(response)
  		for(prop in objCourseList)
  		{
        var activityType =0;
        
        if(objCourseList[prop].ActivityType.toUpperCase()=='TEST')
        {
            activityType =1;
        }
        var smartPaper =0;
        
        if(objCourseList[prop].AppName.toUpperCase()=='SMARTPAPER')
        {
            smartPaper =1;
        }
       // alert(objCourseList[prop].ContentName);
         // Priya June2014
        // changed click event to display student list and open student list
        //
     //   title="tooltip text"
        	// title="+objCourseList[prop].TotalStudents+"
        var exName=objCourseList[prop].ContentName;
        console.log('exName');
        console.log(exName);
        
        	//	$("#courseContentList").append("<li style='width:100%;column-count: 2;column-gap: 20px -moz-column-count: 2;-moz-column-gap: 20px;-webkit-column-count: 2;  -webkit-column-gap: 20px;'><a href='#studentListforAContent'  onclick='getStudentsList("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+",this);' >"+objCourseList[prop].ContentName+"</a> <a href='#studentListforAContent'  onclick='getStudentsList("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+",this);'>"+objCourseList[prop].TotalStudents+"</a> </li>");
       // 	$("#courseContentList").append("<li style='width:100%;'><a href='#studentListforAContent'  onclick='getStudentsList("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+"&quot;"+exName+"&quot;"+ ",this);' >"+objCourseList[prop].ContentName +"<span style='bottom:4px;color: #0099CC;display: block;font-size:12px;left:12px;position: absolute;text-decoration: none;'> "+objCourseList[prop].TotalStudents +"</span> </a>  </li>");
     	$("#courseContentList").append("<li style='width:100%;'><a href='#studentListforAContent'  onclick='getStudentsList("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+",\""+exName +"\",this);' >"+objCourseList[prop].ContentName +"<span style='bottom:4px;color: #0099CC;display: block;font-size:12px;left:12px;position: absolute;text-decoration: none;'> "+objCourseList[prop].TotalStudents +"</span> </a>  </li>");
        
        //	$("#courseContentList").append("<li style='width:100%;'><a href='#studentListforAContent'  onclick='getStudentsList("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+",this);' >"+objCourseList[prop].ContentName +"<span style='color: #0099CC;display: block;font-size:15px;text-align:right;width:700px'> "+objCourseList[prop].TotalStudents +"</span> </a>  </li>");
  		
  		}
  		
  	}
  	else
  	{
      $("#courseContentList").append("<li>No content available.</li>");
    }
  	$.ui.hideMask();
  } ,

  
$scope.getCourseContentListResp = function(response)
{
  	console.log ('content list response' + response);
    
  	$('#courseContentList').empty();
  	//$scope.courseList = response;
  	if(response.length)
  	{
  		objCourseList = JSON.parse(response)
  		for(prop in objCourseList)
  		{
        var activityType =0;
        if(objCourseList[prop].ActivityType.toUpperCase()=='TEST')
        {
          activityType =1;
        }
        var smartPaper =0;
        $scope.isSmartPaper='0';
        
         if(objCourseList[prop].ContentType.toUpperCase()=='SMARTPAPER')
         {
          smartPaper =1;
          $scope.isSmartPaper='1';
          console.log('is sp');
          console.log($scope.isSmartPaper);
        }
  			$("#courseContentList").append("<li><a  onclick='getContentsDetails("+activityType+","+objCourseList[prop].ContentID+","+smartPaper+",this);' >"+objCourseList[prop].ContentName+"</a></li>");
  		}
  	}
  	else
  	{
      $("#courseContentList").append("<li>No content available.</li>");
    }$.ui.hideMask();
  } ,

  /*
  barreportsloadedPanel = function()
  {
	  if(device.platform !=null)
		{
	                        if(checkConnection() ==-1 || checkConnection() ==-2)
	                        {
	                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
	                            return false;
	                        }
	     }
	  console.log('ContentID');
	  console.log($scope.courseContentID);
		sapi.getReport1($scope.courseContentID,getReport1Response,'barchartContainer');
  }*/
 
  barreportsloadedPanel = function(wWidth,wHeight)
  {
	  if(device.platform !=null)
		{
	                        if(checkConnection() ==-1 || checkConnection() ==-2)
	                        {
	                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
	                            return false;
	                        }
	     }
	  console.log('ContentID');
	  console.log($scope.courseContentID);
	  $scope.windowWidth  = wWidth;
	  $scope.windowHeight = wHeight;
	  console.log('isSmartPaper');
	  console.log($scope.isSmartPaper);
	  if($scope.isSmartPaper=='1')
	  {
		  sapi.getSPReport_All($scope.courseContentID,'all',getReport1Response,'mainReport');//'barchartContainer');
	  }
	  else
	  {
		  sapi.getReport1($scope.courseContentID,getReport1Response,'mainReport');//'barchartContainer');
	  }
		
		
  }
  getReport1Response = function(response)
  {
	  // Get the whole dataset for reports
	  
	  
/*	  // else textmode
	  $.ui.loadContent('#mainReport', false, false, "slide");
      
	// else shufflemode
	  $.ui.loadContent('#mainShuffleReport', false, false, "slide");
	  
	// else selectmode
	  $.ui.loadContent('#mainSelectReport', false, false, "slide");
	  
	// else randommode
	  $.ui.loadContent('#mainRandomReport', false, false, "slide");*/
	  
	//var reportjsonstring =  JSON.parse(response);
	console.log('reponse');
	console.log(response);
	
	var jsonString =JSON.parse(response);
	console.log('mode');
	console.log(jsonString.mode);
	
	console.log('barReport');
	console.log(jsonString.barReport);
	console.log('barReport.0');
	console.log(jsonString.barReport[0]);
	//console.log('jsonString');
	//console.log(jsonString);
	
	 $scope.reportJsonResponse =JSON.parse(response);//;response;
	 var mode= $scope.reportJsonResponse.mode;
	
	 currentModule = 'Reports';
     if(device.platform !=null){
                     if(checkConnection() ==-1 || checkConnection() ==-2){
                         $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                         return false;
                     }
                 }
     
  // According to excercise type : Test or Practice call another functions to load UI.
	 // $.ui.loadContent('#barchartContainer', false, false, "slide");
    
    // loadbarchartContainer();
     if($scope.isSmartPaper=='1')
    	 {
    	/*
    	 var strDiv ="<input type='radio' id='rb1' name='rb' value='' checked>";
    	 strDiv = strDiv.concat("<label for='rb1'>Australia</label><br>");
    	 strDiv = strDiv.concat("<input type='radio' id='rb2' name='rb'value=''>");
    	 strDiv = strDiv.concat("<label for='rb2'>England</label><br>");
    	 strDiv = strDiv.concat("<input type='radio' id='rb3' name='rb' value=''>");
    	 strDiv = strDiv.concat("<label for='rb3'>United States</label>");
    	 
    	 $("#afui").popup({
    	        title: " Choose One",
    	        suppressTitle: false,
    	        message:strDiv,
    	        onShow: function () {console.log('here')},
    	      	cancelText: " OK ",
    	        cancelClass:'button',
    	        addCssClass: "popupspreport",
    	        cancelCallback: function(){  	 console.log(' loadtestUI();'); loadtestUI();},
    	        cancelOnly: true
    	    });
    	 */
    	 console.log(' loadspreport_all();'); 
    	 loadspreport_all();
    	 }
     else
     {
	     if(mode.toLowerCase()=='all')
	     {
	        loadmainUI();
	     }
	     else
	     {
	    	 loadtestUI();
	    	 
	     }
     }
		
  }
  
  
  
  loadspreport_all=function()
  {
	 var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[0]);
	  $.ui.loadContent('#barchartContainer_sp', false, false, "slide");
	  console.log('here barchartContainer_sp');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"barchartContainer",// "barchartContainer",
				width: $scope.windowWidth ,//"800",
				height: $scope.windowHeight-120 ,//"400",
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("barchartContainer_sp");
  }
  
  loadspreport_top=function()
  {
	 var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[1]);
	  $.ui.loadContent('#barchartContainer_sptop', false, false, "slide");
	  console.log('here barchartContainer_sptop');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"barchartContainer_sptop",// "barchartContainer",
				width: $scope.windowWidth ,//"800",
				height: $scope.windowHeight-120 ,//"400",
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("barchartContainer_sptop");
  }
  
  loadspreport_bottom=function()
  {
	 var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[2]);
	  $.ui.loadContent('#barchartContainer_spbottom', false, false, "slide");
	  console.log('here barchartContainer_spbottom');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"barchartContainer_spbottom",// "barchartContainer",
				width: $scope.windowWidth ,//"800",
				height: $scope.windowHeight-120 ,//"400",
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("barchartContainer_spbottom");
  }
  
  loadtestUI=function()
  {
	 var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[0]);
	  $.ui.loadContent('#barchartContainer', false, false, "slide");
	  console.log('here barchartContainer');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"barchartContainer",// "barchartContainer",
				width: $scope.windowWidth ,//"800",
				height: $scope.windowHeight-120 ,//"400",
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("barchartContainer");
  }
  loadmainUI=function()
  {
	  
	  var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[0]);
	  $.ui.loadContent('#maintextReport', false, false, "slide");
	  console.log('here');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"maintextReport",// "barchartContainer",
				width: $scope.windowWidth,//"800",
				height: $scope.windowHeight-120 ,//400,
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("maintextReport");
  }
  loadshuffleUI=function()
  {
	  var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[1]);	 
	  $.ui.loadContent('#mainShuffleReport', false, false, "slide");
	  console.log('here');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"mainShuffleReport",// "barchartContainer",
				width: $scope.windowWidth,//"800",
				height: $scope.windowHeight-120 ,//400,
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("mainShuffleReport");
  }
  
  loadselectUI=function()
  {
	  var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[2]);
	  $.ui.loadContent('#mainSelectReport', false, false, "slide");
	  console.log('here');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"mainSelectReport",// "barchartContainer",
				width: $scope.windowWidth,//"800",
				height: $scope.windowHeight-120 ,//400,
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("mainSelectReport");
	  
  }
  
  loadrandomUI=function()
  {   
	  var reportdata= JSON.stringify($scope.reportJsonResponse.barReport[3]);
      $.ui.loadContent('#mainRandomReport', false, false, "slide");
	  console.log('here');
	  console.log($scope.reportJsonResponse);
		  var revenueChart = new FusionCharts({
				type: "column2d",
				renderAt:"mainRandomReport",// "barchartContainer",
				width: $scope.windowWidth,//"800",
				height: $scope.windowHeight-120 ,//400,
				dataFormat: "json",
				dataSource:reportdata
			     });
					revenueChart.render("mainRandomReport");
  }
  
  loadbarchartContainer= function()
  {
	 //("barchartContainer");
  }
  
  
  
//Priya June2014
  getstudentListFromLoad = function()
  {
  	//getStudentsList();
  }

  // Priya June2014 Get Student List from server 
  getStudentsList =function(ActivityType,ContentID,appName,exName,currentItem)
  {
	  
	  if(device.platform !=null)
		{
	                        if(checkConnection() ==-1 || checkConnection() ==-2)
	                        {
	                            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
	                            return false;
	                        }
	     }
	  console.log('exName');
	  console.log(exName)
	// Priya June2014 added following line -  setExerciseName
      $('#headerStudentList').text(exName +":  "+'Student list'); // currentItem.innerText +":  "+'Student list');
      $scope.excerciseName=exName;//currentItem.innerText;
      $scope.applicationName=appName; // 0 is for sl, 1 is for sp priya
      $scope.courseContentID=ContentID;
      
      $.ui.showMask("Loading...");
   
   	sapi.getStudentList(ContentID,getStudentListResp,'studentListforAContent');
   	
    
    	//$scope.courseList = response;
    	
      
  }
 
//Priya June2014 
getStudentListResp = function(response)
{
  
  	$('#studentList').empty();
  	
  	if(response.length)
	{
  		objStudentList = JSON.parse(response);
  		console.log ('student list response' + objStudentList);
  	   
  		for(prop in objStudentList)
  		{
  			 var activityType =0;
  	        if(objStudentList[prop].ActivityType.toUpperCase()=='TEST'){
  	          activityType =1;
  	        }
  	        var smartPaper =0
  	        console.log('objStudentList[prop].AppName');
  	        console.log(objStudentList[prop]);
  	      $scope.isSmartPaper='0';
  	         if(objStudentList[prop].ContentType =='SmartPaper'){
  	        	$scope.isSmartPaper='1';
  	          smartPaper =1;
  	        }
  	     //style='color:336600'
  	  //       console.log('objStudentList[prop].State');
  	    //     console.log(objStudentList[prop].State);
  	      if(objStudentList[prop].State =='ReworkSubmitted')
  	    	  {
  	    	console.log(' in ReworkSubmitted ');
  	    	$("#studentList").append("<li><a style='color:#B22222;' onclick='getWorkDetails("+activityType+","+objStudentList[prop].StudentID+","+objStudentList[prop].WorkID+","+smartPaper+",this);' >"+objStudentList[prop].StudentName+"</a></li>");
  	  		
  	    	  }
  	      else
  	    	  {
  	    	$("#studentList").append("<li><a  onclick='getWorkDetails("+activityType+","+objStudentList[prop].StudentID+","+objStudentList[prop].WorkID+","+smartPaper+",this);' >"+objStudentList[prop].StudentName+"</a></li>");
  	  		 	    	  
  	    	  }
		  //$("#studentList").append("<li><a>"+objStudentList[prop].StudentName+"</a></li>");
  	  		
  		}
	}
  	else
	{
        $("#studentList").append("<li>No students submissions are available for this content.</li>");
    }
	$.ui.hideMask();
  
	
  } ,

  getLocalContentsDetails = function(ActivityType,ContentID,appName,currentItem) {
	 console.log('currentItem');
	 console.log(currentItem);
	 console.log('appName');
	 console.log(appName);
	//  console.log(currentItem.innerText);
	 setExerciseName(currentItem.innerText);
	  $scope.applicationName=appName; // 0 is for sl, 1 is for sp priya
    if(device.platform !=null)
    {
          if(checkConnection() ==-1 || checkConnection() ==-2)
           {
                  $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
                  return false;
           }
    }
    $scope.activityType = ActivityType;
    $scope.courseContentID = ContentID;
    $.ui.showMask("building Exercise...");
    if(appName ==0)
    {
    sapi.getLocalFolderDataContents(ContentID,$scope.studentId,getLocalContentsDataResponse,'localFolder');
    }
    else
    {
    	sapi.getsplocalfoldercontentdetail(ContentID,$scope.studentId,getspLocalContentsDataResponse,'localFolder');
    //	$.ui.popup('This worksheet is not supported in the current version.');
    	
    	$.ui.hideMask();
    }
  }  ,

  getLocalContentsDataResponse = function(data){
	  console.log(' getLocalContentsDataResponse');
    var xmlString ='<?xml version="1.0" standalone="yes"?>'+data;
    getLocalDataResponse(data);
  } ,
  
  // Priya June2014
  // Download content xml/object 
  getWorkDetails = function(activityType,studentID,workID,appName,currentItem) 
  {
	  console.log('studentid');
	  console.log(studentID);
	  $scope.studentId = studentID;
	  console.log('workid');
	  console.log(workID);
    //setExerciseName(excerciseName);
    $scope.applicationName=appName; // 0 is for sl, 1 is for sp priya
    var Header= currentItem.innerText+':  '+$scope.excerciseName;
    setExerciseName(Header);
    if(device.platform !=null){
        if(checkConnection() ==-1 || checkConnection() ==-2){
            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
            return false;
        }
    }
  //  $scope.courseContentID = ContentID;
    $scope.activityType = activityType;
    setSelectedItemColor(currentItem);
    $.ui.showMask("building Exercise...");
   
    if(appName ==0)
    { 
  	  sapi.getWorkData(workID,getWorkDataResponse,'studentListforAContent');
    }
    else
    {
    	console.log('get smart paper data')
      sapi.getspWorkData(workID,getspLocalContentsDataResponse,'studentListforAContent');
    	//sapi.getspcontentdetail(ContentID,getSmartPaperResponse,'backPackContentList');
  
    }
  },
  //Changes end
  
  // Download content xml/object 
  getContentsDetails = function(ActivityType,ContentID,appName,currentItem) 
  {
    setExerciseName(currentItem.innerText);
    $scope.applicationName=appName; // 0 is for sl, 1 is for sp priya
    if(device.platform !=null){
        if(checkConnection() ==-1 || checkConnection() ==-2){
            $.ui.popup('No Internet connection is found.Please coonect to network and then try again.');
            return false;
        }
    }
    $scope.courseContentID = ContentID;
    $scope.activityType = ActivityType;
    setSelectedItemColor(currentItem);
    $.ui.showMask("building Exercise...");
    if(appName ==0)
    { 
  	  sapi.getData(2,ContentID,getBackPackDataResponse,'backPackContentList');
    }
    else
    {
    	sapi.getspcontentdetail(ContentID,getSmartPaperResponse,'backPackContentList');
    //	$.ui.popup('This worksheet is not supported in the current version.');
    	//$.ui.popup('Object model is mapped');
    	//$.ui.hideMask();
    }
  },
  
//Priya June2014 Changes begin
  
  getWorkDataResponse=function(data)
  {
//	  console.log('getWorkDataResponse');
//	  console.log(data);
	  var xmlString ='<?xml version="1.0" standalone="yes"?>'+data;
	    getLocalDataResponse(data);
	    
	 
	
	  
  }
  
  getspWorkDataResponse=function(data)
  {
	// console.log('getspLocalContentsDataResponse');
	 //console.log(data);
	  getDataResponse(data);
	  	var xmlString ='<?xml version="1.0" standalone="yes"?>'+data;
	 	$(xmlString).siblings('NewDataSet').find('DisplayAreaProperties').each(function(){
			//$(xmlString).siblings('DisplayAreaProperties').each(function(){
	   		$scope.strFileName = $(this).find('PctFileName').text();
	   		$scope.strContent = data;
	   		
		});
	
	  
  }
  //Priya June2014 Changes end
  getBackPackDataResponse = function(data){
  	getDataResponse(data);
  	var xmlString ='<?xml version="1.0" standalone="yes"?>'+data;
  	
  	$(xmlString).siblings('NewDataSet').find('DisplayAreaProperties').each(function(){
				//$(xmlString).siblings('DisplayAreaProperties').each(function(){
		   		$scope.strFileName = $(this).find('PctFileName').text();
		   		$scope.strContent = data;
		   		
			});
  	
  	 	
	//future fuctionality
	/*
	if($scope.strFileName !=null && $scope.strContent !=null && $.os.android == true){
		//todo save into the database
		
		appDataBase = window.sqlitePlugin.openDatabase({name: "attachments"});
       	appDataBase.transaction(insertContents, transaction_error);
	}*/
  }
	  
	  getspBackPackDataResponse = function(data){
	  	  	
		  $scope.spObject  =JSON.parse(data);
		  
  		  console.log('**** Object Model*****');
  	  	console.log($scope.spObject);
  	  	var headerproperties = $scope.spObject.headerproperties;//this.getheaderproperties(jsonresponse);
  	    $scope.feedbackText=  $scope.spObject.feedbacktext;
  	    
  	  	console.log('headerproperties');
  	  	console.log(headerproperties);
  	      var pageproperties = $scope.spObject.page[0];//this.getpageproperties(jsonresponse);
  	      console.log('pageproperties');
  	      console.log(pageproperties);
  	      console.log(pageproperties.height);
  	      var controlist =$scope.spObject.page[0].controls;// this.getcontrolslist(jsonresponse);
  	      console.log('controlist');
  	      console.log(controlist);
  	      console.log('control')
  	      console.log(controlist[0]);
  	      console.log('**** Object Model*****');
	  }
	  
	  
  var dataSet = {};
  var pageName={};
  var ctrlDetails = [];
  var NewDataSet={};
  dataSet.DetailProperties = ctrlDetails;
  /* save data to the local folder */
  uploadSaveLocalData = function(arrInputControls){
    
	  if($scope.applicationName ==0)
	    {
		  //post to the Local Folder API.
		    var payLoad={};
		    var listArrExcerciseMode =[];
		    var objListExcerciseModes ={};
		    objListExcerciseModes.listExcerciseModes = listArrExcerciseMode;

		    
		    objListExcerciseModes.listExcerciseModes.push(buildTextAnswers(arrInputControls));
		    console.log('b4 shuffle answers');
		    objListExcerciseModes.listExcerciseModes.push(buildShuffleAnswers(arrInputControls));
		    objListExcerciseModes.listExcerciseModes.push(buildSelectAnswers(arrInputControls));
		    objListExcerciseModes.listExcerciseModes.push(buildRandomAnswers(arrInputControls));
		    //build payload
		    payLoad.ContentID = $scope.courseContentID;
		    payLoad.DomainID = $scope.domainID;
		    payLoad.LoginID = $scope.studentId;
		    payLoad.Answers = objListExcerciseModes;
		    console.log(JSON.stringify(payLoad));
		    sapi.uploadExercise(JSON.stringify(payLoad),$scope.localFolderResponse,'PutintoLocalFolder');

	    }
	  else // Smart Paper Priya
		{
		  //Sample Payload
		  var listControls=[];
		    // Sample building of payload 
		   // objListExcerciseModes.listExcerciseModes = listArrExcerciseMode;
		    var listControl = {
		            "CtlID": 4,
		            "CtlValue": 322 
		          }
		    $scope.listControls.push(listControl);
		    var listControl1 = {
		            "CtlID":5,
		            "CtlValue": 233 
		          }
		    $scope.listControls.push(listControl1);
				
		    $scope.backgroundInk="base64:AEYcA4CABAMQSBBEgID8B0UKRgpXDQAAAAUBNRkUMggArBUC1LjiQTMIAIAMAkO34kESqarTQauq00EKCwILTinECkPQ8AJA[0x00]";
			
			var  objAnswers ={};
			objAnswers.listControls = listControls;
			objAnswers.backgroundInk=$scope.backgroundInk;
		 
		   var payLoad={};      
		    payLoad.ContentID =  128;//$scope.courseContentID;
		    payLoad.DomainID = 6;//$scope.domainID;
		    payLoad.LoginID = 1;//$scope.studentId;
			payLoad.Answers = objAnswers;
			
			//Sample payload
			console.log(JSON.stringify(payLoad));
		    sapi.uploadExercise(JSON.stringify(payLoad),$scope.localFolderResponse,'PutintoLocalFolder_SP');

		 }
       
  }
  

  SaveSlOnBack = function(arrInputControls,exType){
	
	if($scope.applicationName==0)
	{
   
    var payLoad={};
    var listArrExcerciseMode =[];
    var objListExcerciseModes ={};
    objListExcerciseModes.listExcerciseModes = listArrExcerciseMode;
    if($scope.activityType ==1){ //test mode
      switch(exType){
        case "type":
          objListExcerciseModes.listExcerciseModes.push(buildTextAnswers(arrInputControls));
        break;
        case "shuffle":
          objListExcerciseModes.listExcerciseModes.push(buildShuffleAnswers(arrInputControls));
        break;
        case "multiSelect":
         objListExcerciseModes.listExcerciseModes.push(buildSelectAnswers(arrInputControls));
        break;
        case "randomSelect":
        objListExcerciseModes.listExcerciseModes.push(buildRandomAnswers(arrInputControls));
        break;
      }
    }else{  
      objListExcerciseModes.listExcerciseModes.push(buildTextAnswers(arrInputControls));
      objListExcerciseModes.listExcerciseModes.push(buildShuffleAnswers(arrInputControls));
      objListExcerciseModes.listExcerciseModes.push(buildSelectAnswers(arrInputControls));
      objListExcerciseModes.listExcerciseModes.push(buildRandomAnswers(arrInputControls));
    }
    payLoad.ContentID = $scope.courseContentID;
    payLoad.DomainID = $scope.domainID;
    payLoad.LoginID = $scope.studentId;
   // Priya July2014 payLoad.Answers = objListExcerciseModes;
    //priya june2014
    console.log('payload feedbackText');
    console.log($scope.feedbackText);
    payLoad.FeedbackText = $scope.feedbackText; // Priya June2014
    payLoad.Rework=$scope.rework;
    payLoad.FeedbackFlag= '1'; 
    payLoad.Sticker=$scope.sticker;
    payLoad.Grade=$scope.grade;
    console.log('payload Sticker');
    console.log($scope.sticker)
    console.log('payload Grade');
    console.log($scope.grade);
    console.log('payload Rework');
    console.log($scope.rework);
    console.log('payload');
    console.log(JSON.stringify(payLoad));
    sapi.uploadExercise(JSON.stringify(payLoad),$scope.slSubmitResponse,'PublishFeedback_SL'); //Priya
  //  sapi.uploadExercise(JSON.stringify(payLoad),$scope.slSubmitResponse,'PublishWorkJsonNew');
    //sapi.uploadExercise(strXml,$scope.validatePostResponse,'PublishWorkJson');
		}
	
		
  }
uploadSPTeacherFeedback = function(objAnswers,workid){
    var payLoad = buildSmartPaperPayLoad(objAnswers,workid);
   console.log(' sp payLoad');
   console.log(payLoad);
  //  sapi.uploadExercise(JSON.stringify(payLoad),$scope.validatePostResponse,'PublishWorkJson_SPNew');
   sapi.uploadExercise(JSON.stringify(payLoad),$scope.validatePostResponse,'PublishFeedback_SP');

} 
/*
uploadSPData = function(objAnswers){
    var payLoad = buildSmartPaperPayLoad(objAnswers);
    console.log('uploadSPData payLoad');
    console.log(JSON.stringify(payLoad));
    sapi.uploadExercise(JSON.stringify(payLoad),$scope.checkResponse,'PublishWorkJson_SPNew');
} */
/*
uploadSmartLocalPaerData = function(objAnswers){
  
    var payLoad = buildSmartPaperPayLoad(objAnswers);
    console.log('local payLoad');
    console.log(payLoad);
    setSmartPaperLocalToSave(false);
    sapi.uploadExercise(JSON.stringify(payLoad),smartPaperLocalFolderSaveResponse,'PutintoLocalFolder_SP');
} */
buildSmartPaperPayLoad = function(objAnswers,workid){
    var payLoad={};
    payLoad.WorkID=workid;
    payLoad.ContentID = $scope.courseContentID;
    payLoad.DomainID = $scope.domainID;
    payLoad.LoginID = $scope.studentId;
    payLoad.Answers = objAnswers;
    payLoad.FeedbackText = $scope.feedbackText; // Priya June2014
    payLoad.Sticker = $scope.sticker;
    payLoad.Grade =$scope.grade;
    payLoad.Rework=$scope.rework;
    payLoad.FeedbackFlag= '1'; 
    
    console.log('SP Payload');
    console.log(JSON.stringify(payLoad));
    return payLoad;
}  

  buildTextAnswers = function(arrInputControls){
    var listExcercises=[];
    
    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
        var inputCtrl = document.getElementById(arrInputControls[prop].id);
        var listControl = {
          "CtlID": arrInputControls[prop].ctrlID,
          "CtlValue": inputCtrl.value 
        }
        listExcercises.push(listControl);
    }
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Text';
    listExcerciseMode.Attempts =$('#noAttempts').text();
    listExcerciseMode.TimeTaken =$('#totalTime').text();
    listExcerciseMode.Score =$('#typAnsResult').text();

    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  }
  buildSelectAnswers = function(arrInputControls){
    var listExcercises=[];
    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          inputCtrl = document.getElementById('lblSelect' + inputCtrl.id);
          if(inputCtrl){
            var ctrlText = inputCtrl.innerText ==''? '':inputCtrl.innerText;
            var listControl = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CtlValue": ctrlText
            }
          //pageName.Select =detailProperties;
          listExcercises.push(listControl);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText =='Pick'? '':inputCtrl.innerText;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Select';
    listExcerciseMode.Attempts =$('#multiNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#multitotalTime').text();
    listExcerciseMode.Score =$('#multiSelectResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  }
  buildRandomAnswers = function(arrInputControls){
   var listExcercises=[];
    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          inputCtrl = document.getElementById('clk' + inputCtrl.id);
          if(inputCtrl){
            var ctrlText = inputCtrl.innerText ==''? '':inputCtrl.innerText;
            var listControl = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CtlValue": ctrlText
            }
          //pageName.Select =detailProperties;
          listExcercises.push(listControl);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText =='Pick'? '':inputCtrl.innerText;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Random';
    listExcerciseMode.Attempts =$('#randomNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#randomtotalTime').text();
    listExcerciseMode.Score =$('#randSelectResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  }
  
  // Priya updated this method May2014
  buildShuffleAnswers = function(arrInputControls)
  {
	  console.log('buildShuffleAnswers');
	  
	  var listExcercises=[];
	    for (var prop = 0, len = arrInputControls.length; prop < len; prop++) 
	    {
	    	console.log('inputCtrl');
	        var inputCtrl = document.getElementById('drag'+arrInputControls[prop].id);
	       
	        if(inputCtrl != null)
	       {
		        var listControl = {
		          "CtlID": arrInputControls[prop].ctrlID,
		          "CtlValue": inputCtrl.innerText	      
		        }
		        console.log('arrInputControls[prop].ctrlID');
		        console.log(arrInputControls[prop].ctrlID);
		        
		        console.log('CtlValue');
		        console.log(inputCtrl.innerText);   
		        
		        listExcercises.push(listControl);
	       }
	    }
    
    
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Shuffle';
    listExcerciseMode.Attempts =$('#shuffleNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#shuffletotalTime').text();
    listExcerciseMode.Score =$('#shuffleResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  
}
  buildShuffleAnswersOLD = function(arrInputControls){
    var question_container_layer = getQuestionContainerLayer();
    var listExcercises=[];
    if(question_container_layer){
      for(prop=0,x=question_container_layer.children.length;prop<x;prop++){
        var ctrlId = question_container_layer.children[prop].attrs.id;
          ctrlId = ctrlId.split('drag')[1];
        var ctrlText = question_container_layer.children[prop].children[1].partialText;
        var listControl = {
            "CtlID": question_container_layer.children[prop].attrs.name,
            "CtlValue": ctrlText
            }
        listExcercises.push(listControl);
      }
    }
    var listExcerciseMode ={};
    listExcerciseMode.ModeName ='Shuffle';
    listExcerciseMode.Attempts =$('#shuffleNoAttempts').text();
    listExcerciseMode.TimeTaken =$('#shuffletotalTime').text();
    listExcerciseMode.Score =$('#shuffleResult').text();
    listExcerciseMode.listControls = listExcercises;
    return listExcerciseMode;
  
}

$scope.localFolderResponse = function(response){
  if(response){

      if(response.MessageID == 0)
      {
        //$.ui.popup('Exercise saved successfully.');
        //replace with Cordova message box
        displayAlertBox("Successfully saved exercise in your Backpack folder.",'Save Exercise',localFolderSaveAction);
        setLocaltoSave(true);
       }
       else{
        $.ui.popup('There is an error while submitting Exercise.Please try again later');
       } 
    }
    $.ui.hideMask();
}
  localFolderSaveAction = function(){
    //will implement in future
  }
  $scope.validatePostResponse = function(response){
    console.log(' validatePostResponse');
    if(response){
      if(response.MessageID == 0){
        //$.ui.popup('Exercise submitted successfully.');
    	  console.log('Exercise submitted successfully.');
       // Priya commented this 26June2014
    	  //displayAlertBox("Successfully submitted exercise.",'Submit Exercise',submitFolderAction)
       
       }else{
    	   console.log('There is an error while submitting Exercise.Please try again later.');
    	   // Priya commented this 26June2014
     //   $.ui.popup('There is an error while submitting Exercise.Please try again later');
       }
      }
      $.ui.hideMask();
      
      //priya 26 june 2014
      loadstudentlist();
      
  }
  
  $scope.slSubmitResponse = function(response){
	    console.log(' slSubmitResponse');
	    if(response){
	      if(response.MessageID == 0){
	    	  console.log('Exercise submitted successfully.');
	       // displayAlertBox("Successfully submitted exercise.",'Submit Exercise',submitFolderAction)
	       
	       }else{
	    	   console.log('Error in submitting excercise.');
	    //    $.ui.popup('There is an error while submitting Exercise.Please try again later');
	       }
	      }
	     // $.ui.hideMask();
	  }

  $scope.checkResponse = function(response){
	    console.log(' validateResponse');
	    if(response){
	      if(response.MessageID == 0){
	    	  console.log('Exercise submitted successfully.');
	       // displayAlertBox("Successfully submitted exercise.",'Submit Exercise',submitFolderAction)
	       
	       }else{
	    //    $.ui.popup('There is an error while submitting Exercise.Please try again later');
	       }
	      }
	     // $.ui.hideMask();
	    loadstudentlist();
	  }

  submitFolderAction = function(){
     setLocaltoSave(true);
        gotoCurrentPage();
  }
  getXmlString = function(){

    //var strXml = '<PutWork xmlns="http://schemas.datacontract.org/2004/07/Inspherion.EASEWcfService" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">';
    //strXml +='<ContentID>'+$scope.courseContentID+'</ContentID>';
      strQuery = '{"ContentID":'+$scope.courseContentID+',"ContentType":"'+getContentType()+'","StudentLoginID":'+$scope.studentId+',"ContentXML":';
      return strQuery;
  }
  getExerciseActivity = function(){
    return $scope.activityType;
  }
  getLocalExerciseActivity = function(){
    return $scope.localActivityType;
  }
  buildTypeAns = function(strXml,arrInputControls){
    //strXml +='<TypeAns>';
      for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
          var inputCtrl = document.getElementById(arrInputControls[prop].id);
          var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": inputCtrl.value 
            }
            dataSet.DetailProperties.push(detailProperties);
         /* strXml +='<'+inputCtrl.id+'>';
          strXml +=inputCtrl.value;
          strXml +='</'+inputCtrl.id+'>';*/
      }
   // strXml +='</TypeAns>';
    return strXml;
  }
  buildShuffle = function(strXml,arrInputControls){
   // strXml +='<Shuffle>';
    
    
    return strXml;
  }

  buildSelect = function(strXml,arrInputControls){
    //strXml +='<Select>';
      for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          var inputCtrl = document.getElementById('lblSelect' + inputCtrl.id);
          if(inputCtrl){
            var ctrlId = inputCtrl.id.split('lblSelect')[1];
            var ctrlText = inputCtrl.innerText ==''? '':inputCtrl.innerText;
            var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": ctrlText
            }
          //pageName.Select =detailProperties;
          dataSet.DetailProperties.push(detailProperties);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText =='Pick'? '':inputCtrl.innerText;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    //strXml +='</Select>';
    return strXml;
  }
  buildRandom = function(strXml,arrInputControls){
    //strXml +='<Random>';
      for (var prop = 0, len = arrInputControls.length; prop < len; prop++) {
         var inputCtrl = document.getElementById(arrInputControls[prop].id);
          var inputCtrl = document.getElementById('clk' + inputCtrl.id);
          if(inputCtrl){
            var ctrlId = inputCtrl.id.split('clk')[1];
            
            var detailProperties = {
            "CtlID": arrInputControls[prop].ctrlID,
            "CurrentValueReg": inputCtrl.innerText
            }
          //pageName.Random =detailProperties;
          dataSet.DetailProperties.push(detailProperties);
         /* strXml +='<'+ctrlId+'>';
          strXml += inputCtrl.innerText ;
          strXml +='</'+ctrlId+'>';*/
        }else{break;}
      }
    //strXml +='</Random>';
    return strXml;
  }
  checkConnection = function() {
            var networkState = navigator.connection.type;
			var states = {};
            states[Connection.UNKNOWN]  = -2;
            states[Connection.ETHERNET] = 0;
            states[Connection.WIFI]     = 1;
            states[Connection.CELL_2G]  = 2;
            states[Connection.CELL_3G]  = 3;
            states[Connection.CELL_4G]  = 4;
            states[Connection.CELL]     = 5;
            states[Connection.NONE]     = -1;

            return states[networkState];
        },
  
  insertContents = function(tx){
  sqlInsert = "INSERT INTO mail_attachments (filename, content) VALUES ("+$scope.strFileName+","+$scope.strContent+")";
    	tx.executeSql(sqlInsert, function(tx, res) {
      	console.log("insertId: " + res._id + " -- probably 1");
      	console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
      });
    }
     transaction_error = function(tx, error) {
		//$.ui.hideMask();
		console.log(error);
    	$('#errorMsg').show();	
    }
});