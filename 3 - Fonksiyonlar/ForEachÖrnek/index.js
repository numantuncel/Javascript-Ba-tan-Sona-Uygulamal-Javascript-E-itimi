const ulum = document.querySelector('main');
let ogrenciler = ['Elif','Ahmet'];
let html =``;

ogrenciler.forEach(ogrenci => {
  html += `<li>${ogrenci}</li>`;
})

console.log(html)
console.log(ulum)

ulum.innerHTML=html;
