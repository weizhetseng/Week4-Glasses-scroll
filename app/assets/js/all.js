// const mobileMenu = document.querySelector('.mobile-menu');
// const navbar = document.querySelector('.mobile-show');

// mobileMenu.addEventListener('click',function(){
//   navbar.classList.toggle('open')
// })





$('.mobile-menu').click(function(e){
  e.preventDefault();

  $('.navbar').toggleClass('open');
})