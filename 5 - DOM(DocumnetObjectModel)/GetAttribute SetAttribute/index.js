// class href .. html attributleri dir .
window.onload = function () {
  // alma işlemi
  const link = document.querySelector("a");
  console.log(link.getAttribute("href"));
  //
  link.setAttribute("href", "https://www.canboz.com/");

  link.textContent = "Boz Training";

  const pDegeri = document.querySelector(".icerik");
  console.log(pDegeri.getAttribute("class")); // icerik yazsı çıkar

  pDegeri.setAttribute("class", "error");

  console.log(pDegeri.getAttribute("class")); // yeni class adı error

  pDegeri.setAttribute('style','color:pink')
};
