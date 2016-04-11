var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
	//滚动改变固定滚动条的样式
	$scope.scrollBarStyle = function () {
		var _header = $('#header');
		var _navBar = _header.find('ul.navbar-nav');

		if($(window).scrollTop() >= _header.height()) {
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
});













