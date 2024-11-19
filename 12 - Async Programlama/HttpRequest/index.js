const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => { /// 1. adım 
//   console.log(request);
//   console.log(request.readyState);
  if (request.readyState === 4) {  // 4. adım
    console.log(request.responseText)// Jason yapısında döner
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");  // 2. adım

request.send(); // 3. adım


