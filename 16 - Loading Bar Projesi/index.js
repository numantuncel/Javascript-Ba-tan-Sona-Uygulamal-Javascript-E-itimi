const counter=document.querySelector('.counter')
const kırmızı=document.querySelector('.LoadingBarFront')


let number=0;

updateNumber();


function updateNumber(){
    counter.textContent=number+'%'
    kırmızı.style.width=number+'%'
    number++
    if (number<101) {
        setTimeout(() => {
          updateNumber();  
        },30);
    }
}
