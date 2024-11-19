const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      /// 1. adım
      if (request.readyState === 4 && request.status === 200) {
        // 4. adım
        const data = JSON.parse(request.responseText);
        //callback(undefined, data);
        resolve(data)
        // undefinied gelen errodur   request response text ise gelen data dır
      } else if (request.readyState === 4) {
        //callback("başarılı cevap dönmedi hata kodu :", undefined); // iki tane parametre alır
        reject("başarılı cevap alamadık!")
      }
    });

    request.open("GET", resource); // 2. adım

    request.send(); // 3. adım
  });
};

getTodos("örnJson/can.json").then(data=>{
  console.log(data)
}).catch((err) => {
  console.log( err);
})
   

const getIt = () => {
  return new Promise((resolve, reject) => {
    resolve("başarılı data"); // sonra bura çalıştı
    //reject("başarısız data");
  });
};
// getIt().then(
//   (data) => {
//     console.log("başarılı", data); // önce bura çalıştı
//   },
//   (err) => {
//     console.log("başarısız", err);
//   }
// );

// getIt()
//   .then((data) => {
//     console.log("başarılı", data); // önce bura çalıştı
//   })
//   .catch((err) => {
//     console.log("başarısız", err);
//   });
