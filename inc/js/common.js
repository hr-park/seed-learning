//alert이 필요하다면 swal("Hello world!"); 사용해주세요.
$(document).ready( function() {
	//퍼블 확인용
	$("#header_wrap").load("./inc/layout/header.html");
	$("#floating_wrap").load("./inc/layout/floating_sns.html");
	$("#footer_wrap").load("./inc/layout/footer.html");
	//퍼블 확인용

	$('.tabs li a').click(function(){
		let idx = $(this).parent('li').index()+1;

		$('.tabs li.active').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.tab_box').hide();
		$('.tab_box[data-tab="'+idx+'"]').show();
	});

	$(document).on('click', ".btn_like", function(){
		if($(this).hasClass('active')){
			swal("나의 관심 교재에서 삭제되었습니다!");
			$(this).removeClass('active');
		}else{
			swal("나의 관심 교재에 등록되었습니다!");
			$(this).addClass('active');
		}
	});
});