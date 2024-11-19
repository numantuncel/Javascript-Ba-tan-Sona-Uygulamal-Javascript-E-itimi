let isimler=['Can','Rıdvan','elif'];
console.log(isimler[1]);

// aralara '-' tre koymak

let treli=isimler.join('-');
console.log(treli);



let virgüllü=isimler.join(',');
console.log(virgüllü);


let sıra=isimler.indexOf('elif');// sırasını bulmak
console.log(sıra);

let ekle=isimler.concat(['merve,suna']); // ekleme

console.log(ekle);


//  push elelman ekle

let elemanEkle=isimler.push('leyla')
console.log(isimler)// ana diziye müdahale eder
console.log(elemanEkle);



//   pop silme son eklenen silinir.
isimler.pop();
console.log(isimler);




