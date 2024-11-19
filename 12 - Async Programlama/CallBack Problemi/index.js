const getTodos = (resource,callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    /// 1. adım
    if (request.readyState === 4 && request.status === 200) {
      // 4. adım
      const data = JSON.parse(request.responseText);
      callback(undefined, data);

      // undefinied gelen errodur   request response text ise gelen data dır
    } else if (request.readyState === 4) {
      callback("başarılı cevap dönmedi hata kodu :", undefined); // iki tane parametre alır
    }
  });

  request.open("GET", resource); // 2. adım

  request.send(); // 3. adım
};

// Aync ye örnek

// burdan başlar
console.log(1);
console.log(2);

// burda bekleme süresi olduğunu görür

// callback burayı çalıştırır
getTodos('örnJson/can.json',(err, data) => {
  console.log(data);
  getTodos('örnJson/osman.json',(err, data) => {
    console.log(data);
    
  });
  getTodos('örnJson/tuba.json',(err, data) => {
    console.log(data);
    
  });
});

// burayı bitirir ve yukarı döner
console.log(3);
console.log(4);
