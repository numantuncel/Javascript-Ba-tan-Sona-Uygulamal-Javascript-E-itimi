const kutu = document.querySelector(".kutu");
kutu.addEventListener("mousemove", (e) => {
  // console.log(e);
  // console.log(e.ofsetX, e.ofsetY);
  kutu.textContent=`x kordinatı ${e.offsetX} , y kodinatı ${e.offsetY}`
});



document.addEventListener('wheel',e=>{// nn neresinde tetiklediyse tekerleği oranın kordinatı
})