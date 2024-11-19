const button=document.querySelector('button')
const mainPopup=document.querySelector('.main-popup')
const close=document.querySelector('.popup-close')


button.addEventListener('click',e=>{
  mainPopup.style.display='block';
})

close.addEventListener('click',e=>{
  mainPopup.style.display='none';
})

mainPopup.addEventListener('click',e=>{
  if (e.target.className==='main-popup') {
    mainPopup.style.display='none';
  }
  
})

// tıklandığında hedef klass main pop up sa display none olur