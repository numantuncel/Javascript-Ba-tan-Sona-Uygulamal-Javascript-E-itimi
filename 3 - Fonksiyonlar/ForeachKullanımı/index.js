let ogrenciler = ["Elif", "Selma", "Numan", "Ahmet"];

ogrenciler.forEach(function () {
  console.log("Selam");
});

ogrenciler.forEach(function (kisi, index) {
  // fonksiyonun aldığı parametre foreach döngüsündeki dizi oluyor

  console.log(kisi, index);
});

const ogrenci = (kisi, index) => {
  console.log(`${index} - ${kisi}`);
};

ogrenciler.forEach(ogrenci);

// dizi olarak ogrencileri fonksiyon olarak ogrenciyi kullanıyor 
