//  p değerini alıp texitini değiştirdik
/*ayfa Yüklenmesini Bekleme: Eğer bu kodu 
sayfa yüklendikten sonra çalıştırmak istiyorsanız, sayfa
 içeriği yüklendikten sonra çalıştırılmasını
 sağlamak için window.onload kullanabilirsiniz: */

// window.onload = function () {
//   const pDegeri = document.querySelector("p"); // ilk p değeri
//   console.log(pDegeri.innerText);
//   pDegeri.innerText = "numan tunçel";

//   const pdegeri = document.querySelectorAll("p");
//   pdegeri.forEach((a) => {
//     console.log(a.innerText);
//     a.innerText += " yeni alan";
//   });
//
// };

window.onload = function () {
  const icerik = document.querySelector(".icerik"); // divin içindeki p  etkiketini seçer
  console.log(icerik.innerHTML);
  icerik.innerHTML += "<h2> Vue JS , React Js , Angular JS</h2>"; // olduğu gibi hepsi güncellenebilir

  const ogrenciler = ["can", "tuba", "elif"];
  ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML+=`<p>${ogrenci}</p>`
  })

};
