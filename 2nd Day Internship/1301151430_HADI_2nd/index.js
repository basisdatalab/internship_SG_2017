$(document).ready(function(){
    $('#rgst').click(function(){
    	var username = $("#email").val();
    	var password = $("#pwd").val();
        alert("Selamat "+username+"  anda telah berhasil register dengan password "+password);
    });
});

$(document).ready(function(){
    $('#lgn').click(function(){
    	var username = $("#email1").val();
        alert("Selamat datang kembali "+username);
    });
});