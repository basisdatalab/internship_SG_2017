function klik(){
	var x = document.forms["loginform"]["username"].value; 
	var y = document.forms["loginform"]["password"].value; 
	if (x=="fiqqih" && y=="f090f0") {
		alert("hai "+ x + " dengan password " + y ); 	
	} else {
		alert("Username atau password salah")
	}	
}

function klok(){
	var u = document.forms["registerform"]["username"].value;
	var p = document.forms["registerform"]["password"].value;
	if(u!=""&& p!=""){ 
	alert("Selamat anda berhasil mendaftar dengan username "+ u +" dan password "+p);
	} else {
		alert("Isi Username dan password di kolom yang sudah disediakan")
	}
}