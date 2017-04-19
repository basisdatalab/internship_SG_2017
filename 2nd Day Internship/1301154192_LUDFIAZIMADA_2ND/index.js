$(document).ready(function(){
	$("#register").click(function(){
		var username = $("#email").val();
    	alert("Selamat "+username+" telah berhasil melakukan registrasi");
	});
	
});
$(document).ready(function(){
	$("#login").click(function(){
		var username = $("#email").val();
    	alert(username+" telah berhasil melakukan login");
	});
	
});


