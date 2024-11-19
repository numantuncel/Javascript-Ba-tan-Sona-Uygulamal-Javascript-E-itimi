const accordions=document.querySelectorAll('.accordion')// all demez isek tek bir tane div gelir ilk div geir
// all dediğimiz için hepsi gelid

accordions.forEach((accordion)=>{
  const accordionBotton=accordion.querySelector('.accordionBotton')
  console.log(accordionBotton)
  accordionBotton.addEventListener('click',()=>{ // üç buton içinde aynı anda çalışıyor
    console.log(accordion)
    accordion.querySelector('.minusIcon').classList.toggle('active')
    accordion.querySelector('.plusIcon').classList.toggle('active')
    accordion.querySelector('.accordionText').classList.toggle('active')
  })
})

/*
Seçili Accordion Nasıl Belirlenir?
Bu kod parçası, tüm “accordion” öğelerine aynı olay dinleyicisini ekler.
Hangi "accordion"nun tıklanıldığını belirlemek için olay dinleyicisi içindeki kod, tıklanan öğeyi işaret eder.
Yani, hangi "accordion"nun seçildiğini, tıklanan butonun içindeki kodla belirleriz.
Bu şekilde, her “accordion” öğesi için aynı olay dinleyicisi kullanarak, tıklanan öğeyi belirleyebilir ve içeriği açıp kapatabilirsiniz.
 Eğer daha fazla sorunuz varsa sormaktan çekinmeyin! 😊









*/