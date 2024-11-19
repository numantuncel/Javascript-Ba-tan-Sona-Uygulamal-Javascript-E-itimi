let ogrenci={
    ad:'numan',
    yas:29,
    email:'tuncelnuman135@gmial.com',
    sinif:12,
    dersler:['matamatik','fizik','kimya']


}
console.log(ogrenci)
console.log(ogrenci.ad)
console.log(ogrenci.yas)


//update işlemi
ogrenci.yas=20;
console.log(ogrenci)


// başka şekilde ad a ulaşma 
// bu şekilde güncelleme yapılabilir

console.log(ogrenci['ad'])


// tip görmek 

console.log(typeof ogrenci)