class user{
    constructor(username,email) {
        this.username=username;
        this.email=email;
    }
    login(){
        console.log( `Kullanıcı Adı: ${this.username} Email Adresi: ${this.email} olan kullanıcı sisteme giriş yaptı`)
        return this; // komple objeyi döndürür ve logout çağrılıyorsa logoutu basar
    }
    logOut(){
        console.log( `Kullanıcı Adı: ${this.username} Email Adresi: ${this.email} olan kullanıcı sisteme çıkış yaptı`)
        return this // burda tekrar sınıf döner bir kez daha kullanılabilir
    }
}

const userOne=new user('can boz','cann123@gmail.com');
const userTwo=new user('nida melek','cann123@gmail.com');

//console.log(userOne.login(),userOne.logOut())
//console.log(userTwo)

userOne.login().logOut()