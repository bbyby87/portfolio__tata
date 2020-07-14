var mixer = mixitup ('.container-filter');

$(document).ready(function () {
	$('a[href^="#"]').click(function() {
	//Сохроняем значение атрибута href в переменнойЖ:
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top //можно вычесть высоту меню
		}, 500);
		return false;
	});
});