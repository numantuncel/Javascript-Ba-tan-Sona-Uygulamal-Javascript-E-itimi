const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => { /// 1. adım 
//   console.log(request);
//   console.log(request.readyState);
  if (request.readyState === 4 && request.status===200) {  // 4. adım
    console.log(request.responseText)// Jason yapısında döner
    console.log("başarılı cevap")

  }
  else if(request.readyState === 4 ){
    console.log("başarılı cevap dönmedi hata kodu :",request.status)
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todosssss");  // 2. adım

request.send(); // 3. adım


