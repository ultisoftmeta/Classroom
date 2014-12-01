var sapi = {
    // Application Constructor
    // easeServerUrl:'http://www.inspherionsolutions.com/Staging/EASEWcfService/RESTService.svc/',
  //   easeServerUrl:'http://www.inspherionlearning.com/Knomadix/RESTService.svc/',
		   easeServerUrl:'http://knomadix002.cloudapp.net/RESTService.svc/',
     validateDomainMethod :'ValidateDomainName?',
     courseListMethod:     'GetCourseList',
     contentListMethod:   'GetTeacherCourseContentList?',
     authenticateStudent: 'AuthenticateTeacherLogin?',
     publishWork:         'PublishWork',
     localFolder:         'GetContentListforLocalFolder',
     studentListMethod:   'GetStudentListForAContent?',
     getStudentWork :     'GetWorkXML_SL',
     getspStudentWork :     'GetWorkXML_SP',
  getData: function(domainId,contentId,callBack,pageName) {
    	serverUrl = this.buildXmlURl(domainId,contentId);
      	this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    getReport1:function(contentID,callBack,pageName)
    {
    	serverUrl =this.easeServerUrl + 'GetKReport2?ContentID='+contentID;
      	this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    getSPReport_All:function(contentID,mode,callBack,pageName)
    {
    	serverUrl =this.easeServerUrl + 'GetSPReport?ContentID='+contentID+'&Mode='+mode;
    	console.log('serverUrl');
    	console.log(serverUrl);
      	this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    //priya June2014
    getWorkData: function(workId,callBack,pageName) {
    	 serverUrl = this.easeServerUrl + this.getStudentWork+'?WorkID='+workId;
      	this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    //priya June2014
    getspWorkData: function(workId,callBack,pageName) {
    	serverUrl =this.easeServerUrl + this.getspStudentWork+'?WorkID='+workId;
      	this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    
//priya
    getspcontentdetail: function(contentId,callBack,pageName)
    {
    	serverUrl = this.spgetcontentdetailurl(contentId);
    	console.log('serverUrl');
    	console.log(serverUrl);
      //	this.getcontentobject(serverUrl);
    	 this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
	getLocalFolderData: function(domainId,loginId,callBack,pageName) {
      serverUrl = this.easeServerUrl + this.localFolder+'?DomainID='+domainId+'&LoginID='+loginId;
        this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    //priya
  getLocalFolderDataContents: function(contentId,loginId,callBack,pageName) {
      var paramters = 'ContentID='+contentId+'&'+'LoginID='+loginId;
      serverUrl = this.easeServerUrl+"DownloadContentforLocalFolder?"+paramters;
      this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
    getsplocalfoldercontentdetail: function(contentId,loginId,callBack,pageName)
    {
    	console.log("Callbackname");
    	console.log(callBack);
    	 var paramters = 'ContentID='+contentId+'&'+'LoginID='+loginId;
         serverUrl = this.easeServerUrl+"DownloadContentLFForSP?"+paramters;
    	console.log(serverUrl);
      //	this.getcontentobject(serverUrl);
    	this.initiateRequest(serverUrl,callBack,'GET',pageName);
    },
	getCourseList:function(callBack,pageName){
		serverUrl = this.easeServerUrl + this.courseListMethod;
		this.initiateRequest(serverUrl,callBack,'GET',pageName)
	},
	getContentList:function(domainID,courseId,studentID,callBack,pageName){
		serverUrl = this.easeServerUrl + this.contentListMethod+'DomainID='+domainID+'&CourseID='+courseId+'&LoginID='+studentID;
		this.initiateRequest(serverUrl,callBack,'GET',pageName)
	},
	//Priya June2014
	getStudentList:function(contentID,callBack,pageName){
		serverUrl = this.easeServerUrl + this.studentListMethod+'ContentID='+contentID;
		this.initiateRequest(serverUrl,callBack,'GET',pageName)
	},
	validateDomain :function(dominName,callBack){
		serverUrl = this.easeServerUrl + this.validateDomainMethod+'DomainName='+dominName;
		this.initiateRequest(serverUrl,callBack,'GET')
	},
  validateStudent :function(userName,password,userDomain,callBack,pageName){
	  console.log("validate student")
    strQuery = 'LoginName='+userName+'&'+'Password='+password+'&'+'DomainName='+ userDomain;
    serverUrl = this.easeServerUrl + this.authenticateStudent+strQuery;
    this.initiateRequest(serverUrl,callBack,'GET',pageName)
  },
  
	
	initiateRequest:function(serverUrl,callBack,methodType,pageName)
    {
     console.log(serverUrl);
		var xhr = this.createCORSRequest(methodType, serverUrl);
  		if (!xhr) {
    		alert('There is some internal Error.Please try again');
        $.ui.loadContent('#'+pageName, false, false, "slide");
    		return;
  		}
		// Response handlers.
  		xhr.onload = function() {
  			//console.log('xhr.responseText');
  			//console.log(xhr.responseText);
    		callBack(xhr.responseText);
    	};
		xhr.onerror = function() {
    		alert('Woops, there was an error while making the request.'+xhr.status );
        $.ui.loadContent('#'+pageName, false, false, "slide");
        return;
  		};
    if(methodType == 'PUT'){
      //xhr.setRequestHeader("Content-type", "application/xml;charset=UTF-8");
      console.log('put service');
      xhr.setRequestHeader('Content-Type', 'application/xml');
      xhr.timeout =120000;
      xhr.onreadystatechange = this.handler(xhr);
	     xhr.send(postData);
    }else{
      xhr.send();
    }
	},
   handler: function(evtXHR)
    {
        if (evtXHR.readyState == 4)
        {
                if (evtXHR.status == 200)
                {
                    var response = evtXHR.responseText;
                    //var invocationHistory = response.getElementsByTagName('invocationHistory').item(0).firstChild.data;
                   
                    
                }
                else
                {
                    alert("Invocation Errors Occured " + evtXHR.readyState + " and the status is " + evtXHR.status);
                }
        }
        else
        {
            console.log("currently the application is at" + evtXHR.readyState);
        }
    },
	
	createCORSRequest:function(method, url){
		var xhr = new XMLHttpRequest();
  		if ("withCredentials" in xhr) {
    	// XHR for Chrome/Firefox/Opera/Safari.
    		xhr.open(method, url, true);
  		} else if (typeof XDomainRequest != "undefined") {
    	// XDomainRequest for IE.
    		xhr = new XDomainRequest();
    		xhr.open(method, url);
  		} else {
    		// CORS not supported.
    		xhr = null;
  		}
 		 return xhr;
	},
	
	
    initialize: function(paramters) {
    	if(paramters.length){
    		
        //	return "http://www.inspherionsolutions.com/Staging/EASEWcfService/RESTService.svc/DownloadContentJson?"+paramters;
    		return "http://knomadix002.cloudapp.net/RestService.svc/DownloadContentJson?"+paramters;
        }
    },

    buildXmlURl: function(domainId,contentId) {
    		var url = this.easeServerUrl;
    		var paramters = 'DomainID='+domainId+'&'+'ContentID='+contentId;
        	return this.easeServerUrl+"DownloadContent?"+paramters;
        
    },
    //priya 
    spgetcontentdetailurl: function(contentId) 
    {
		var url = this.easeServerUrl;
		var paramters = 'ContentID='+contentId;
    	return this.easeServerUrl+"getcontentdetailforsp?"+paramters;
    
    },
    //make a service call
    uploadExercise:function(xmlData,callBack,methodName)
    {
    	console.log("http://knomadix002.cloudapp.net/RESTService.svc/"+methodName);
      /*xmlData =   {
                 "ContentID": 47,"ContentXML": "<NewDataSet></NewDataSet>","StudentLoginID": 6
             };*/
       $.ajax({
                                                   // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"];
                 type: "PUT",
                 url: "http://knomadix002.cloudapp.net/RESTService.svc/"+methodName,
               //  url: "http://www.inspherionsolutions.com/Staging/EASEWcfService/RESTService.svc/"+methodName,
                                                                //url: "http://localhost:8080/RESTService.svc/PublishWorkJson",
                // data: JSON.stringify(workData),
                 contentType: "application/json",   //json",
                 dataType: "json",
                 processData: true,
                 data:xmlData,
                 success: function (data, status, jqXHR) {
                     callBack(data);
                     //alert("priya success..." + data);
                 },
                 error: function (xhr) {
                  console.log(xhr.responseText);
                  callBack(xhr.responseText);
                   
                 }
             });
    }
  
};