/*퍼블용*/
$(document).ready( function() {
	$("#header_wrap").load("./inc/layout/header.html");
	$("#floating_wrap").load("./inc/layout/floating_sns.html");
	$("#footer_wrap").load("./inc/layout/footer.html");
});
/*퍼블용*/

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
	if($('.gnb.active').length==0){
		$('.gnb .dep1_list > li').mouseover(function(){
			$(this).addClass('active');
			$(this).find('.dep2_list').addClass('active');
		});
		$('.gnb .dep1_list > li').mouseleave(function(){
			$(this).removeClass('active');
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
	var lang = "ko";
  	$.i18n.init({
    	load : 'unspecific',
      	lng : lang,
      	fallbackLng : 'ko',
      	//resGetPath : 'https://hr-park.github.io/seed-learning/inc/js/messages-ko.json',
		resGetPath : '/inc/js/messages-ko.json',
      	useDataAttrOptions : true,
  	}, function(err, t) {
		//console.log(err);
      	//console.log(t);
		//i18n = t;
		
		i18n = $.i18n.t;

		$('html').i18n();
  	});

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
			$('.gnb, .gnb .dep1_list > li').off('mouseover mouseleave');
			gnbMo();
		}
	}).trigger("resize");

	$('.family_site .btn_family').on('click', function(){
		$(this).toggleClass('active');
		$(this).next('.family_list').toggle();
	});
});
