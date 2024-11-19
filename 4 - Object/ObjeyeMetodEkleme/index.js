let ogrenci={
    ad:'numan',
    yas:29,
    email:'tuncelnuman135@gmial.com',
    sinif:12,
    dersler:['matamatik','fizik','kimya'],
    login:function(){
        console.log('Ogrenci giriş yaptı.')
    },
    // Regular fonction şeklinde yazılabilir
    logout(){
        console.log('Ogrenci çıkış yaptı.')
    },

}
ogrenci.login();
ogrenci.logout();