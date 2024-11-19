const hamburger=document.querySelector('.fa-bars');
const sidebar=document.querySelector('.sidebar');

hamburger.addEventListener('click',()=>{
  sidebar.classList.toggle('showSidebar')
})


const kapat=document.querySelector('.fa-xmark');

kapat.addEventListener('click',()=>{
  sidebar.classList.toggle('showSidebar')
})

/*toggle() varsa kaldırır yoksa ekler */