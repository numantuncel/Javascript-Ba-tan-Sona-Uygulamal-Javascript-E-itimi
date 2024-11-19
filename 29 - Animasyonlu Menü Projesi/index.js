const menuBars=document.getElementById('menuBars')
const overlay=document.getElementById('overlay')
const navHome=document.getElementById('navHome')
const navAbout=document.getElementById('navAbout')
const navServices=document.getElementById('navServices')
const navPrices=document.getElementById('navPrices')
const navContact=document.getElementById('navContact')

const navItems=[navHome,navAbout,navServices,navPrices,navContact];

navItems.forEach(element => {
    element.addEventListener('click',togleNav)
});


function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
      nav.classList.replace(
        `slide-${direction1}-${i + 1}`,
        `slide-${direction2}-${i + 1}`
      );
    });
  }

function togleNav(){
    menuBars.classList.toggle('change')

    overlay.classList.toggle('overlay-active')

    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        navAnimation('out', 'in');
    }
    else{
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        navAnimation('in', 'out');
    }
}

menuBars.addEventListener('click',togleNav)












