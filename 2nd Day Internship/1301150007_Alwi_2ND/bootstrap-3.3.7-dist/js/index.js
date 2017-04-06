// event  klik

$('.page-scroll').on('click',function(){

	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	//pndah scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
},1000);

	e.preventDefault();

	});	