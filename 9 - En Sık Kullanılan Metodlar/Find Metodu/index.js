
const points = [70, 75, 25, 35, 10, 80, 27];

// değer bulma

// 70 den yüksek ilk metodu getirmek istediğimizde findi kullanabiliriz.

const highPoint=points.find(point=>{
    return point >70// 80 ne gitmez sırayla okur ve şartı sağlayan ilk değeri döndürüp durur
})

console.log(highPoint)