//  Id ile element bulmaya çalılışmak

const baslik = document.getElementById("numan");
console.log(baslik);

//
const hatalar = document.getElementsByClassName("error");

console.log(hatalar);

// hatalar.forEach(hata => {
//     console.log(hata)
// });

const pEtiketler=document.getElementsByTagName('p')
console.log(pEtiketler[0])