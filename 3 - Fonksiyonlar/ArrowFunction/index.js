//
const kareAlanı=(kenar)=>{
  return kenar**2;
}

const sonuc=kareAlanı(6);
console.log(sonuc)


// bir tane değer alıyorsam parantez kullanmak zorunda değilim

const kAlanı=kenar=>{
  return kenar**2;
}

const sonucc=kAlanı(6);
console.log(sonuc)

// tek satır kod varsa fonksiyonun içinde  returnu da kullanmaya gerek yok 
const kkAlanı=kkenar=>  kkenar**2;


const sonuccc=kkAlanı(6);
console.log(sonuccc);



const can=function(){
  return 'Can';
}

const gelenDeger=can();

console.log(gelenDeger)

// 28 . satrıın anternatif kullanımı 


const cann=()=> 'Can Boz';

const gelennDeger=cann();

console.log(gelennDeger)

// Örnek 


// const fatura=function(urunler,vergi){
//   let toplam=0;
//   for (let i = 0; i < urunler.length; i++) {
//     toplam+=urunler[i] + (urunler[i]*vergi); // ürün ve ürüne eklenen vergi ve geçmiş toplam
    
//   }
//   return toplam;
// }

// const urunler=[10,20];

// const gelenDegerler=fatura(urunler,0.5)

// console.log(gelenDegerler);

// arrow function şeklinde yazmak istersek 


const fatura=(urunler,vergi)=>{
  let toplam=0;
  for (let i = 0; i < urunler.length; i++) {
       toplam+=urunler[i] + (urunler[i]*vergi); 
  }
  return toplam;
}

const urunler=[10,20];

const gelenDegerler=fatura(urunler,0.5)

console.log(gelenDegerler);