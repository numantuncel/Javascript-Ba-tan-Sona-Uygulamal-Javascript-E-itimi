localStorage.setItem('name','Can')
localStorage.setItem('age',29)

// hangi isimle kaydedildiyse o isim ile çağrılır

let deger=localStorage.getItem('name')
let age=localStorage.getItem('age')

console.log(deger,age)


// udate etme

// sayfa yenilenirse gitmez

localStorage.setItem('name','Numan')
localStorage.age=30

deger=localStorage.getItem('name')
age=localStorage.getItem('age')

console.log(deger,age)
