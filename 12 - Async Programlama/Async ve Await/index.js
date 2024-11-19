// async bir fonksiyon geriye her zaman promis döndürür
// promis döndüren için başında mutlaka await kullanılmalı

const getTodos = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //  await istekden veri dönesiy kadar bekler
  if (response.status !== 200) {
    throw new Error("doğru endpointe istek atmadınız");
  }
  const data = await response.json();
  return data; //console.log(data)
};

//console.log(getTodos())

getTodos()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(Response=>{
//     return Response.json()
//   }).then(data=>{
//     console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   })

/*
https://jsonplaceholder.typicode.com/todos/1 =  bu bir endpoint
Endpoints: API'ler, belirli işlemleri
 veya kaynakları temsil eden "noktalar" veya "endpoints" üzerinden 
 erişilir. Her endpoint, belirli bir URL ve bu URL'ye yapılan 
 isteklerin hangi işlemleri gerçekleştireceğini tanımlayan bir 
 HTTP metodu ile ilişkilendirilir.
 Veri Alışverişi: API'ler genellikle veri alışverişi yapar.







*/
