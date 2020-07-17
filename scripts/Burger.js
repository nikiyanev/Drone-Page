
const navbar = document.querySelector('nav');
const hamburgerButton = document.querySelector('.menu-btn');
const navbarUl = document.querySelector('.ul-nav');
let menuOpened = false;

navbarUl.classList.add('hidden');

hamburgerButton.addEventListener('click', 

  function myFunction(e) {
    var x = navbarUl;
    if (x.style.display === "block") {
      x.style.display = "none";
      x.style.height = "0";
    } else {
      x.style.display = "block";
      setTimeout(() => {
          x.style.height = "300px";    
      }, 1)
    }
  
  // if (!menuOpened) {
  //   hamburgerButton.classList.add('open');
  //   navbarUl.style.height = '100%';
  //   menuOpened = true;
  // } else {
  //   hamburgerButton.classList.remove('open');
  //   menuOpened = false;
  // }

  // navbarUl.classList.toggle('hidden');
});

