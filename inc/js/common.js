function gnbOpen(){
	$('.gnb').addClass('active');
	$('.gnb .dep2_list').show();
	$('.btn_gnb_open').hide();
	$('.btn_gnb_close').show();
}
function gnbClose(){
	$('.gnb').removeClass('active');
	$('.gnb .dep2_list').hide();
	$('.btn_gnb_open').show();
	$('.btn_gnb_close').hide();
}
$(function(){
	//gnb오픈아닐때..등등
	$('.gnb .dep1_list li a').mouseover(function(){
		//$('.gnb').addClass('active');
		$(this).next('.dep2_list').addClass('active');
	});
	//$('.gnb .dep1_list li a').mouseleave(function(){
	$('.gnb').mouseleave(function(){
		$('.gnb').removeClass('active');
		//$('.gnb .dep1_list li').children('a').removeClass('on');
		$('.gnb .dep2_list').removeClass('active');
	});
});