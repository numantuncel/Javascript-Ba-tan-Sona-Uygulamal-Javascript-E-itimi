const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    /// 1. adım
    if (request.readyState === 4 && request.status === 200) {
      // 4. adım
     
      callback(undefined,request.responseText) 

      // undefinied gelen errodur   request response text ise gelen data dır
    } else if (request.readyState === 4) {
      callback('başarılı cevap dönmedi hata kodu :',undefined)// iki tane parametre alır
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos"); // 2. adım

  request.send(); // 3. adım
};


// Aync ye örnek

// burdan başlar
console.log(1)
console.log(2)


// burda bekleme süresi olduğunu görür

// callback burayı çalıştırır
getTodos((err,data)=>{
  //console.log(err,data)//fonksiyon kendini parametre olarak alıyor
  //undefinied gelen errodur   request response text ise gelen data dır

  if (err) {
    console.log(err)
  }
  else{
    console.log(data)
  }
})


// burayı bitirir ve yukarı döner
console.log(3)
console.log(4)
