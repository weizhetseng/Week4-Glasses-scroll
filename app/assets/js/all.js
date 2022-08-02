const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.mobile-show');

mobileMenu.addEventListener('click',function(){
  navbar.classList.toggle('open')
})