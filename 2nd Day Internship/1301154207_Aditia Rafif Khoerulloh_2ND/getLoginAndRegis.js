function klik1(){
	if ($("#input1").val() == "" && $("#input2").val() == ""){
		alert("isi heula kasep, ganteng, sia kehedd!!!");
	}else{
		alert("Selamat Datang " + $("#input1").val() + ", Anda Berhasil Login");
	}
}
function klik(){
	alert("Hai Member Baru Dengan ID " + $("#input1").val() + " dan Password " + $("#input2").val() + " Selamat Bergabung");
}