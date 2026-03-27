document.addEventListener('DOMContentLoaded', function() {

  // Инициализация Swiper
  const swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween:20,
    loop:true,
    pagination:{ el:".swiper-pagination", clickable:true },
    navigation:{ nextEl:".swiper-button-next", prevEl:".swiper-button-prev" },
    breakpoints:{ 768:{ slidesPerView:2 }, 1024:{ slidesPerView:3 } }
  });

  // Scroll к секциям
  document.querySelectorAll('.btn-portfolio').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.btn-contact').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  });

});