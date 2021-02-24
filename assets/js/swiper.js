var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    effect: 'fade',
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });