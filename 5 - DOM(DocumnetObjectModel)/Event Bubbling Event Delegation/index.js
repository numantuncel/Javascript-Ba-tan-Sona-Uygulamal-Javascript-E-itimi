// const button=document.querySelector('button')
// button.addEventListener('click',()=>{
//     console.log('butona tıklandı')
// })

const liElemanları = document.querySelectorAll("li");


const ul = document.querySelector("ul");

ul.addEventListener('click',e=>{
  if (e.target.tagName==='LI') {
    e.target.remove()
    console.log(e.target)
  }
})
//ul.remove();
liElemanları.forEach((eleman) => {
    // her bir elemana tıkladığımda eneti tutan fonksiyom metodu çalıştırır
  eleman.addEventListener("click", (e) => {
    e.stopPropagation()// sadece de li için çalıştır
    // event listeneri çağırır
    //e.target.remove();
    console.log(e.target)
  });
});

const button = document.querySelector("button");
button.addEventListener("click", (/* fonksiyon olay dinleyicie ait propertyler için kullanılır*/) => {
  const li = document.createElement("li");//tıkladığında elemement oluştur
  li.textContent='JavaScript'
  
 // ul.append(li);// sonuna ekler
  ul.prepend(li);// sonuna ekler

});
 


// al element üst elemente ait fonksiyonları çalıştırır