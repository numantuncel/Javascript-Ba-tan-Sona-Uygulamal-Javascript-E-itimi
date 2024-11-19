class user{
    constructor(username,email) {
        this.username=username;
        this.email=email;
    }
    login(){
        return `Kullanıcı Adı: ${this.username} Email Adresi: ${this.email} olan kullanıcı sisteme giriş yaptı`
    }
    logOut(){
        return `Kullanıcı Adı: ${this.username} eMail Adresi ${this.email} olan kullanıcı sistemden çıkış yaptı`
    }
}

const userOne=new user('can boz','cann123@gmail.com');
const userTwo=new user('nida melek','cann123@gmail.com');

console.log(userOne.login(),userOne.logOut())
console.log(userTwo)