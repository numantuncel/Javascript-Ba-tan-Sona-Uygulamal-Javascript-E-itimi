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

// Karakter Çekme

let ad ="Numan";
let soyad="Tunçel";
let adSoyad=ad+" "+soyad;
console.log(adSoyad);

console.log(adSoyad.length) // kaç karakter



// Methodlar 


console.log(adSoyad.toUpperCase());// hepsi büyük tolocallowerCase hepsi küçük


 let index=adSoyad.indexOf(['T']);
 console.log(index); // 0 dan başlar 6