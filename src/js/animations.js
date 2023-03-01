AOS.init({
    once: true,
    duration: 800,
    // disable: 'mobile'
});
let show = false
$(window).scroll(function () {
    // выбираем нужный элемент
    var section = $('.statistic');
    // проверяем, видим ли элемент на странице
    if (section.visible(true) && !show) {
        show = true;
        // выполняем нужные действия, когда элемент становится видимым
        $('.statistic-number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }
});

new Parallax(document.querySelector('.infos-effects'));
new Parallax(document.querySelector('.infos-inner__images'));
// new Parallax(document.querySelector('.infos-effects__right'));
// new Parallax(document.querySelector('.infos-inner__images'));
