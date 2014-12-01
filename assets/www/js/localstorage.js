var appStorage = function() 
{
 this.openLocalDb = function(){
  try{
       		db = window.sqlitePlugin.openDatabase({name: "attachments"});
       		db.transaction(this.getFiles, this.transaction_error());
       		}
        catch(ex){console.log('db error occured'+ ex);}
 } 
 this.getFiles = function(tx){
 alert(tx);
  	var sql = "SELECT _id,filename,content from mail_attachments";
	tx.executeSql(sql, [], this.getFile_success());
 }
    
 this.transaction_error = function(tx, error) {
 alert('error');
	$.ui.hideMask();
	$('#errorMsg').show();	
 }
 this.getFile_success = function(tx, results){
 //alert(tx);
	$('#errorMsg').hide();
	objResult = results;
	var len = objResult.rows.length;
    while(len>=1){
		var file = objResult.rows.item(len-1);
		var filename = file.filename;
		filename = filename.split(".")[0];
		var id = parseInt(file._id);
		$("#fileList").append("<li><a href='#main' onclick='getContents("+id+");' >"+filename+"</a></li>");
		len--;
	}
	$.ui.hideMask();
 } 
 this.getTypeData = function() {
      return 'hello';
   }
 this.setTypeData = function(){
 	return 'true';
 }
}