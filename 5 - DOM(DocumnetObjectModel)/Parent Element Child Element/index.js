const section=document.querySelector('section')
console.log(section.children)
/*
normalde koleksiyonları bir dizi olarak kullanamayız


*/

console.log(Array.from(section.children))// array a çevirmek

Array.from(section.children).forEach(child=>{
    child.classList.add('sectionElement')
})

const baslik=document.querySelector('h2')

console.log(baslik.parentElement)
console.log(baslik.parentElement.parentElement)

console.log(baslik.nextElementSibling)// alt kardeş
console.log(baslik.previousElementSibling)// üst kardeş

console.log(baslik.nextElementSibling.parentElement.children)