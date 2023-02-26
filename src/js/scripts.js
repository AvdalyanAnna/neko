// Custom Scripts
@@include('main.js')
@@include('./libs/jquery-3.6.0.js')
@@include('./libs/swiper.js')
@@include('./libs/aos.js')
@@include('./modal.js')
AOS.init({
    once:true,
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
        console.log(1)
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

@@include('./slider.js')


