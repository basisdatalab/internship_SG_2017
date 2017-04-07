
$( document ).ready(function() {
    $('#inibutton').click(function(){
	alert('Hello world');
	});
});

function iniFunctionClick(){
	alert('iniFunctionClick	');
}
function iniFunctionClick2(){
	alert('iniFunctionClick2	');
}
function iniFunctionClick3(){
	alert('iniFunctionClick3	');
}4
function iniFunctionClick(){
	alert('iniFunctionClick	');
}

$( document ).ready(function() {
    $('#register').click(function(){
	var hasil1= $("#username").val(); 
	var hasil2= $("#password").val();
	alert("anda berhasil register dengan username "+hasil1+" dan password "+hasil2);
	});
});

$( document ).ready(function() {
    $('#login').click(function(){
	var hasil1= $("#username").val(); 
	var hasil2= $("#password").val();
	alert("anda berhasil register dengan username "+hasil1+" dan password "+hasil2);
	});
});
function alertValue(){
	var hasil1= $("#username").val(); 
	var hasil2= $("#password").val();
	alert("anda berhasil register dengan username "+hasil1+" dan password "+hasil2);
}

function alertValue2(){
	var hasil1= $("#username").val(); 
	var hasil2= $("#password").val();
	alert("anda berhasil login dengan username "+hasil1+" dan password "+hasil2);
}