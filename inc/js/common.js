/*퍼블용*/
$(document).ready( function() {
	$("#header_wrap").load("./inc/layout/header.html");
	$("#floating_wrap").load("./inc/layout/floating_sns.html");
	$("#footer_wrap").load("./inc/layout/footer.html");

	$('.tabs li a').click(function(){
		let idx = $(this).parent('li').index()+1;
		console.log(idx)


		$('.tabs li.active').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.tab_box').hide();
		$('.tab_box[data-tab="'+idx+'"]').show();
	});
});
