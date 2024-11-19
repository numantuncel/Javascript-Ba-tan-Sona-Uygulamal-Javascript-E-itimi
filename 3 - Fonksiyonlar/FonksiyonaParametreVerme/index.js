const canboz=function(ad,soyad){
  console.log('Merhaba Benim Adım '+ad+' Soyadım '+soyad);
  console.log(`Merhaba Benim Adım ${ad} Soyadım ${soyad}`);
}

canboz('Numan','Tunçel');

// default değer
const numan=function(ad='Ayşe',soyad='Akıncı'){
  console.log('Merhaba Benim Adım '+ad+' Soyadım '+soyad);
  console.log(`Merhaba Benim Adım ${ad} Soyadım ${soyad}`);
}

numan('Numan','Tunçel')
numan();// varsayılan değer

// bir ad değeri gitmez ise numan varsayılan değredir 