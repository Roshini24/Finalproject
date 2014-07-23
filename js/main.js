function checkempty(){

if(document.getElementById("txtname").value ==""){
	alert("name is empty");}
else 	{

if (document.getElementById("txtname").value.length < 4 ){
	alert("Name length cannot be less than 4");
}
alert("name is not empty");
}
	
}
