function klik(){
	var a = document.forms["formloggin"]["email"].value;
	var b = document.forms["formloggin"]["pass"].value;
	

	if (a=="anonymous" && b=="99999"){
		alert("hello,welcome!! "+ a + " " + b);

     
	}else {
		alert("username atau password salah");
	}
}