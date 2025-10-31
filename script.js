var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

});

/*Rolagem header */
window.addEventListener('scroll', function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem',window.scrollY > 0)
})
/*fim rolagem header */


/*Site live */
const obeserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      
      entry.target.classList.add("show")
    }else{
      entry.target.classList.remove("show")
    }
  })
},{})
const todoElements = document.querySelectorAll('.todo')
todoElements.forEach(el => obeserver.observe(el))