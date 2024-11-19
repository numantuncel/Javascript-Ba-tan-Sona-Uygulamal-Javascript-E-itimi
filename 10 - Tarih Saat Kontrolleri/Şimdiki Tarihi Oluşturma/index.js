const now=new Date();

console.log(now)

console.log(typeof now)


console.log('year',now.getFullYear())
console.log('month',now.getMonth())// 0 indis olduğu için başlangıç -1 gösterir +1 yapabilriz

console.log('Date',now.getDate())



console.log('Day',now.getDay()) // pazar 0. indis de tutulur



console.log('hours',now.getHours()) 


console.log('hours',now.getMinutes()) 



console.log('Seconds',now.getSeconds()) 



console.log('timestamp',now.getTime())



console.log('gün ay yıl',now.toDateString())

console.log('saat dakika saniye',now.toTimeString())



console.log('lokal değer',now.toLocaleString())