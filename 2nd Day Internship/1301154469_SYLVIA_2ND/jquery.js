function hey() {
	user=$("#username").val();
	pass=$("#inputPassword3").val();


	if(user == "") {
		alert("Username tidak boleh kosong");	
	} else if (pass == ""){
		alert("password tidak boleh kosong");
	} else {
		alert("Halo "+user+" anda berhasil login");
	}
}