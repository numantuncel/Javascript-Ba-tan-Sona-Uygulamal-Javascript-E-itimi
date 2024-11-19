let yas=29;


if (true) {
  let yas=60;
 
  console.log('İçerdeki: ',yas)
  if (true) {
    let yas=50;
   var context='Numan';// var ile tanımlı olan değişken içerde de geçerli dışar da da
   let ad='Tunçel'
    console.log('İçerdekinin içindeki: ',yas,ad,context)
   
  }
}
console.log('Dışardaki: ',yas,ad,context);
