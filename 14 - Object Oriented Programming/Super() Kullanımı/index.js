class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`Kullanıcı Adı: ${this.username}`);
    return this; // komple objeyi döndürür ve logout çağrılıyorsa logoutu basar
  }
  logOut() {
    console.log(`Kullanıcı Adı: ${this.username}`);
    return this; // burda tekrar sınıf döner bir kez daha kullanılabilir
  }
}
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
     this.title = title;// bu alta yazılmalı
  }
  deleteUser(userArrived) {
    users = users.filter((user) => user.username !== userArrived.username);
    // users dizisinin içinde can var mı diyor userarrived e user one gidiyor ondan sonra users dizisinin içinde arama yapıyor diyor ki
    // user yani dizin her bir elemanı burda user dir user in içinde username si user arrived olmayan yani  ad can olmayanı filtreler ama silinmez sadece filtreler
  }
}

const userOne = new User("can boz", "cann123@gmail.com");
const userTwo = new User("nida melek", "cann123@gmail.com");
const userThree = new Admin("osman melek", "osman123@gmail.com", "Textil");

let users = [userOne, userTwo, userThree];
//console.log(users)
userThree.deleteUser(userOne);
//console.log(userOne,userTwo,userThree)

console.log(userThree);
