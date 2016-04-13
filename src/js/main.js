var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	//滚动改变固定滚动条的样式
	$scope.scrollBarStyle = function () {
		var _header = $('#header');
		var _navBar = _header.find('ul.navbar-nav');

		if($(window).scrollTop() >= parseInt(_header.height() - 50)) {
			$('#header-navbar').css({
				'background': '#ffffff',
				'border-bottom': '1px solid #ccc',
				'box-shadow': '1px 1px 5px #ccc'
			});

			_header.find('.title-header').css('color', '#745ec5');

			_navBar.find('a').each(function (index, domEle) {
				if(!$(domEle).parent('li').hasClass('active')) {
					$(this).addClass('purple');
				}
			});

		}else {
			$('#header-navbar').css({
				'background': 'transparent',
				'border-bottom': 'none',
				'box-shadow': '0 0 0 transparent'
			});

			_header.find('.title-header').css('color', '#ffffff');
			_navBar.find('a').removeClass('purple');

		}
		//console.log($(window).scrollTop());
	};

	$(window).scroll(function () {
		$scope.scrollBarStyle();
	});

	//设置轮播器
	$scope.textCarousel = function () {
		//设置间隔
		var intervalTime = 5000;
		var intervalIndex = 0;

		$('#carousel-example-generic').carousel({
			interval: intervalTime
		}).on('slide.bs.carousel', function (item) {

			var items = $('.carousel-inner').find('.item');

			intervalIndex = $(item.relatedTarget).attr('data-index');
			items.eq(intervalIndex).addClass('in').siblings().removeClass('in');

		});

		//小圆点切换
		$('.carousel-indicators').find('li').click(function () {
			var _this = $(this);
			var _index = parseInt(_this.attr('data-slide-to'));
			//console.log(_index);

			var items = $('.carousel-inner').find('.item');
			items.each(function (index, docEle) {
				$(docEle).removeClass('in');
				//$('#carousel-example-generic').unbind('slide.bs.carousel');
			});

			items.eq(_index).addClass('in');
		});

		$('#button').click(function () {
			$('#carousel-example-generic').carousel('pause');
		});

	};

	$scope.textCarousel();

});













