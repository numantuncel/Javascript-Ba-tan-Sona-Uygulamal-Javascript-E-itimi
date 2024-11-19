const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      /// 1. adım
      if (request.readyState === 4 && request.status === 200) {
        // 4. adım
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("başarılı cevap alamadık!");
      }
    });

    request.open("GET", resource); // 2. adım

    request.send(); // 3. adım
  });
};


/// zincir yapısı
getTodos("örnJson/can.json")
  .then((data) => {// hata olursa birinde reject döner ve diğerleri çalışmaz
    console.log("promise one ",data);
    return getTodos("örnJson/osman.json")
  }).then((data) => {
    console.log("promise two",data);
    return getTodos("örnJson/tuba.json")
  }).then((data) => {
    console.log("promise three",data);
    //return getTodos("örnJson/tuba.json")
  })
  .catch((err) => {
    console.log(err);
  });
