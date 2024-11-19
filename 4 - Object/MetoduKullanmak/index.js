let ogrenci={
    ad:'numan',
    yas:29,
    email:'tuncelnuman135@gmial.com',
    sinif:12,
    dersler:['matamatik','fizik','kimya'],
    login:function(){
        console.log('Ogrenci giriş yaptı.')
    },
    logout(){
        console.log('Ogrenci çıkış yaptı.')
    },
    printLessons(){
        console.log(this.dersler)// this kelimesi olmaz ise bulunduğu yeri bilmez
        //console.log(this)// bulunduğu objeyi belirtir
        this.dersler.forEach(ders=>{
            console.log(ders);
        })
    }
}
console.log(this)//
ogrenci.printLessons();// ogrenciler ve elemanlarınıçağırır 
// yani bulunduğu yeri gösterir

// forEach ın mantığı 

/**
 *  forEach(int ders in dersler) yerine direk =    this.dersler.forEach(ders=>{
 * 
 *  kullanımı mevcuttur.
 * 
 * 
 */