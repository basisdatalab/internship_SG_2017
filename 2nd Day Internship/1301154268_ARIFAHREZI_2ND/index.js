function clickLogin(){
	var form1 = document.forms["formLogin"]["username"].value; 
	var form2 = document.forms["formLogin"]["password"].value; 
	if (form1=="arifahrezi" && form2=="xxx") {
		alert("hai "+ form1 + " Anda berhasil Login"); 	
	} else {
		alert("Username atau password salah")
	}	
}

function clickRegis(){
	var formUname = document.forms["formRegis"]["username"].value;
	var formPwd = document.forms["formRegis"]["password"].value;
	if(formUname!=""&& formPwd!=""){ 
	alert("Username anda "+ formUname +" dengan password "+formPwd);
	} else {
		alert("Isi Username dan Password terlebug dahulu")
	}
}
