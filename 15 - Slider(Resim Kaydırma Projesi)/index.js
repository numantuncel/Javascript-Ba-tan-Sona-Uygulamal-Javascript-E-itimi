const next=document.querySelector(".next")
const img=document.querySelector(".imageContainer")
const images=document.querySelectorAll("img")// bütün imajlar


// sol
const prev=document.querySelector(".prev")

let timeout;


let imgNumber=1;


next.addEventListener('click',()=>{
  imgNumber++;
  updateImage();
  clearTimeout(timeout)
})

prev.addEventListener('click',()=>{
  imgNumber--;
  updateImage();
  clearTimeout(timeout)

})



function updateImage(){
  if (imgNumber>images.length) {// birden büyük olursa buraya girer yani 6. imaja uğramadan tekrar 1 le çarpar 
    imgNumber=1
  }
  else if(imgNumber<1){// 1 den küçük olarak gelirse buraya girer
    imgNumber=images.length// img number 5 olur 5 -1 = 4 -4*700 = -2800 yapar 
  }
  img.style.transform=`translateX(-${(imgNumber-1)*700}px)`
    //burada 2 girer 1 alır 
    //3 girer 2 alır
    timeout=setTimeout(()=>{
      imgNumber++;
      updateImage()
    },4000)
}
updateImage(); // ilk çağırma bura çağrılmaz ise ilk seferde fonksiyon çalışmaz
