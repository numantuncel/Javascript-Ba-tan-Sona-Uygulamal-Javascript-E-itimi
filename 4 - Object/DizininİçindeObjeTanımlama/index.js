// const dersler=[// diznin içinde objeşer
//     {isim:'matematik',puan:90,},
//     {isim:'fizik',puan:80,},
//     {isim:'kimya',puan:85,}

// ]


let ogrenci={
    ad:'numan',
    yas:29,
    email:'tuncelnuman135@gmial.com',
    sinif:12,
    dersler:[{isim:'matematik',puan:90,},
        {isim:'fizik',puan:80,},
        {isim:'kimya',puan:85,}],
    login:function(){
        console.log('Ogrenci giriş yaptı.')
    },
    // Regular fonction şeklinde yazılabilir
    logout(){
        console.log('Ogrenci çıkış yaptı.')
    },
    printLessons(){
        console.log(this.dersler)// this kelimesi olmaz ise bulunduğu yeri bilmez
        //console.log(this)// bulunduğu objeyi belirtir
        this.dersler.forEach(a=>{
            console.log(a.isim,a.puan);
        })
    }
}
ogrenci.printLessons();