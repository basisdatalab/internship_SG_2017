/*function statuslog(){
	alert("Halo "+$("#username").val()+", anda berhasil login")
}

function statusreg(){
	alert("Halo "+$("#username").val()+", anda berhasil registrasi")
}*/



$(document).ready(function(){
	$('#login').click(function(){
		alert('Halo '+$('#username').val()+' anda berhasil login');
	})

	$('#register').click(function(){
		alert('Halo '+$('#username').val()+' anda berhasil register');
	})
});