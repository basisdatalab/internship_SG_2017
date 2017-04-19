function tampilkan() {
  var x=document.forms["formlogin"]["username"].value;
  var y=document.forms["formlogin"]["password"].value;

  if (x =="" || y==""){
    alert("username atau password harus diisi");
    
  }
  else if (x =="maurice" && y=="fikry" ) { 
    alert("Terimakasih anda telah login "+x+" dengan password "+y);

  }
}

function tampilkan1() {
  var a=document.forms["formregister"]["user"].value;
  var b=document.forms["formregister"]["pass"].value;

  if (a =="" || b==""){
    alert("username atau password harus diisi");
    
  }
  else { 
    alert("Terimakasih anda telah terdaftar "+a+" dengan password "+b);

  }
}
