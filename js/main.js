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

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
 