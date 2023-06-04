$( document ).ready(function() {

    $('.tabs__link').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');
    
        $('.tabs__link').removeClass('active');
        $('.tabs__content').removeClass('active');
    
        $(this).addClass('active');
        $(tab_id).addClass('active');
    })
    
    $('.nav__btn').click(function(){
        $('.nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.nav-white__btn').click(function(){
        $('.nav-white').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.nav__close').click(function() {
        $('.nav').removeClass('active');
    });

    $('.nav-white__close').click(function() {
        $('.nav-white').removeClass('active');
    });

    $('.slider').slick({
        arrows: false,
        dots: true
    });
    
    $('.slider-logo__block').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        dots: true,

        responsive: [{
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
    
    $('.header__list-item').click(function() {
        $('.header__list-item').removeClass('active');
        $(this).addClass('active');
    });

        var scrollButton = document.getElementById('main__button-scroll');
        var footer = document.getElementById('footer');

        scrollButton.addEventListener('click', function() {
        footer.scrollIntoView({ behavior: 'smooth' });
    });

    document.addEventListener('DOMContentLoaded', function(){
    const logoLink = document.querySelector('.header-white__logo-link');
logoLink.addEventListener('click', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение ссылки
  window.location.href = 'index.html'; // Перенаправляем на главную страницу
});


});

});



    /* //nav btn
    $('.nav__btn').click(function(){
        $('.nav').toggleClass('active');
    })

    $('.gallery').slick({
        arrows: false,
        dots: true
    }); */
