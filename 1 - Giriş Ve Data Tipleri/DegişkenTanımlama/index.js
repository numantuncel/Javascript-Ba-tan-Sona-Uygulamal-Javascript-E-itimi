console.log("Can Boz");
console.log(15);
var x = 5;
var y = 7;
console.log(x + y);

/* Let değitirilebilir */
/* const değişmez */

let gun = 14;
let ay = 7;
let yıl = 1992;
console.log(gun, ay, yıl);

console.log("Can Boz "+gun+"/"+ay+"/"+yıl+" tarihinde doğmuştur.");

gun=15;

console.log("Can Boz "+gun+"/"+ay+"/"+yıl+" tarihinde doğmuştur.");

/* hatalı kullanımı  */
const sıfırArabaFiyatı=250000;
sıfırArabaFiyatı=100000;

console.log(sıfırArabaFiyatı);

/* yukarıda hata aldığımız için aşağıyı okumaz ! derlemez */
var arabaFiyat=130000;
console.log(arabaFiyat);

