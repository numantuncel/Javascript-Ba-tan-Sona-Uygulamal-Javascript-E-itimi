const userOne={
    username:'can',
    email:'tuncelnuman135@gmail.com',
    login(){
        console.log('can boz giriş yaptı')
    },
    logOut(){
        console.log('Can boz çıkış yaptı')
    }
}

console.log(userOne.email,userOne.username)

userOne.login();
userOne.logOut();

const userTwo={
    username:'osman',
    email:'tosman135@gmail.com',
    login(){
        console.log('osman boz giriş yaptı')
    },
    logOut(){
        console.log('osman boz çıkış yaptı')
    }
}

console.log(userTwo.email,userTwo.username)

userTwo.login();
userTwo.logOut();
