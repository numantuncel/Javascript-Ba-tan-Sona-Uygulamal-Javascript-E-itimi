// const button=document.querySelector('button')
// button.addEventListener('click',()=>{
//     console.log('butona tıklandı')
// })

const liElemanları = document.querySelectorAll("li");
liElemanları.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    // event listeneri çağırır
    // console.log(e)
    // console.log(e.target)
    // console.log('Li ye tıklandı')
  });
});

const ul = document.querySelector("ul");
//ul.remove();
liElemanları.forEach((eleman) => {
    // her bir elemana tıkladığımda eneti tutan fonksiyom metodu çalıştırır
  eleman.addEventListener("click", (e) => {
    // event listeneri çağırır
    e.target.remove();
  });
});

const button = document.querySelector("button");
button.addEventListener("click", (/* fonksiyon olay dinleyicie ait propertyler için kullanılır*/) => {
  const li = document.createElement("li");//tıkladığında elemement oluştur
  li.textContent='JavaScript'
  
 // ul.append(li);// sonuna ekler
  ul.prepend(li);// sonuna ekler

});
