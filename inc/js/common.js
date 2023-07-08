/*퍼블용*/
$(document).ready( function() {
	$("#header_wrap").load("./inc/layout/header.html");
	$("#floating_wrap").load("./inc/layout/floating_sns.html");
	$("#footer_wrap").load("./inc/layout/footer.html");
});

//nav
const nav = {
	gnbScrollTop: 0,
	delta: 80,
	openNavPc: function () {
		$('.gnb').addClass('nav_all_opened');
		$('.gnb .btn_all_menu').addClass('active');
		$('.dep2_list').show();
	},
	openNavMo: function () {
		$('.gnb').addClass('nav_mo_opened');
		$('.nav_mo').addClass('active');
		$('.dim').show();
	},
	closeNavPc: function () {
		$('.gnb').removeClass('nav_all_opened');
		$('.gnb .btn_all_menu').removeClass('active');
		$('.dep2_list').hide();
	},
	closeNavMo: function () {
		$('.gnb').removeClass('nav_mo_opened');
		$('.nav_mo').removeClass('active');
		$('.dim').hide();
	},
	//init
	init: function () {
		var windowWidth = window.innerWidth;
		//pc mouse over
		if (windowWidth > 767) {
			$('body').on('mouseenter focusin', '.gnb .dep1_list > li', function (e) {
				if($('.gnb').hasClass('nav_all_opened')){
					//전체메뉴 열려있으면...
					$('.gnb .dep1_list > li').unbind('hover mouseenter focusin');
					$('.gnb').removeClass('nav_hover');
				}else{
					//전체메뉴 안열려있으면...
					$('.gnb .dep1_list > li').bind('hover mouseenter focusin');
					$('.gnb').addClass('nav_hover');
					$(this).addClass('active');
					//$(this).find('.dep2_list').stop().slideDown('fast');
					$(this).find('.dep2_list').show();
				}
			});

			$('body').on('mouseleave', '.gnb .dep1_list > li', function (e) {
				if(!$('.gnb').hasClass('nav_all_opened')){
					$('.gnb').removeClass('nav_hover');
					$(this).removeClass('active');
					//$(this).find('.dep2_list').stop().slideUp('fast');
					$(this).find('.dep2_list').hide();
				}
			});
		//mo
		} else {
			$('.gnb .dep1_list > li').bind('hover mouseenter focusin');
			//활성화 해제
			$('.gnb.nav_all_opened').removeClass('nav_all_opened');
			$('.gnb.nav_hover').removeClass('nav_hover');
			$('.dep2_list').hide();
			$('.btn_all_menu.active').removeClass('active');
			//활성화 해제

			$('body').on('click', '.gnb .dep1_list > li > a.has_depth', function (e) {
				e.stopImmediatePropagation();
				e.preventDefault();

				$('.gnb .dep1_list > li').removeClass('active');
				$(this).parent('li').addClass('active');
				$('.gnb .dep2_list').hide().removeClass('active');
				$(this).next('.dep2_list').show().addClass('active');
			});
		}
	}
}

$(function(){
	nav.init();

	//pc 전체메뉴 여닫기
	$(document).on('click', '.gnb .btn_all_menu', function () {
		if(!$(this).hasClass('active')){
			nav.openNavPc();
		}else{
			nav.closeNavPc();
		}
	});
	//mo 전체메뉴 열기
	$(document).on('click', '.top_sch .btn_gnb', function () {
		nav.openNavMo();
	});
	//mo 전체메뉴 닫기
	$(document).on('click', '.nav_mo .btn_close, .dim', function () {
		nav.closeNavMo();
	});

	$(window).on("resize", function() {
		nav.init();
	});

	var lang = "ko";
  	$.i18n.init({
    	load : 'unspecific',
      	lng : lang,
      	fallbackLng : 'ko',
      	resGetPath : 'https://hr-park.github.io/seed-learning/inc/js/messages-ko.json',
		//resGetPath : '/inc/js/messages-ko.json',
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

	$('.family_site .btn_family').on('click', function(){
		$(this).toggleClass('active');
		$(this).next('.family_list').toggle();
	});
});