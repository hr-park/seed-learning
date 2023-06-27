function gnbTogglePc(){
	$('.gnb').toggleClass('active');
	$('.gnb .dep2_list').toggle();
	$('.gnb .btn_gnb').toggleClass('active');
}


function gnbOpenMo(){
	$('.nav_mo').addClass('active');
}

function gnbCloseMo(){
	$('.nav_mo').removeClass('active');
}

function gnbOverPc(){
	if(!$('.gnb.active').length==1){
		$('.gnb .dep1_list > li').mouseover(function(){
			$(this).find('.dep2_list').addClass('active');
		});
		$('.gnb .dep1_list > li').mouseleave(function(){
			$('.gnb .dep2_list').removeClass('active');
		});
	}
}

function gnbMo(){
	$('.gnb .dep1_list li a').on('click', function(){
		$('.gnb .dep2_list').removeClass('active');
		$(this).next('.dep2_list').addClass('active');
	});
}

$(function(){
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', vh + 'px')
	$(window).resize(function(){
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', vh + 'px')
	});

	if(matchMedia("screen and (min-width:768px)").matches) {
		gnbOverPc();
	}

	$(window).resize(function() {
		if(matchMedia("screen and (min-width:768px)").matches){
			gnbOverPc();
		}else{
			//gnbOverPc();
			$('.gnb, .gnb .dep1_list li a').off('mouseover mouseleave');
			gnbMo();
		}
	}).trigger("resize");
});