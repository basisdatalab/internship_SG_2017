function login() {
  var a=document.forms["formlogin"]["username1"].value;
  var b=document.forms["formlogin"]["password1"].value;

  if (a =="" || b==""){
    alert("Masukkan username dan password");
    
  }
  else if (a =="windias" && b=="friliani" ) { 
    alert("Terimakasih anda telah login dengan username "+a+" dengan password "+b);

  }
}


function register() {
  var c=document.forms["formregister"]["username2"].value;
  var d=document.forms["formregister"]["password2"].value;

  if (c =="" || d==""){
    alert("Masukkan username dan password");
    
  }
  else  { 
    alert("Terimakasih anda telah terdaftar dengan username "+c+" dengan password "+d);

  }
}