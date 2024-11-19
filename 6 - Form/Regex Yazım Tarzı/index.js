const username='cannnnn';
const pattern=/^[a-z]{6,10}$/;

let sonuc=pattern.test(username);
console.log(sonuc)

if (sonuc) {
    console.log('başarılı')
}
else{
    console.log('başarısız')
}

let sonuc2=username.search(pattern)
console.log(sonuc2)// false ise -1 true ise 0 alır