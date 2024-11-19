const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");


const generateTemplate = (todo) => {
  const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>
            </li>`;
            list.innerHTML+=html;
};

// trim başındaki ve sonundaki boşuğu kaldırır eğer veri içinde boşluk varsa
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {// herhangi bir değerde true döner ve çalışır
      generateTemplate(todo);
      addForm.reset(); // entere tıklayınca sıfırlanır
  }
});

list.addEventListener('click',e=>{
    if (e.target.classList.contains('delete')) {//tıklanılan yer delete clasını içeriyorsa
        e.target.parentElement.remove()// deletenin üst elementi li dir
    }
})

const filterTodos= term=>{
    // console.log(term)
    // console.log(Array.from(list.children))



    Array.from(list.children)
    .filter(todo=> !todo.textContent.toLowerCase().includes(term)) // buraya küçük gelir ve küçük == küçük kıyaslama olur net sonuc edlde edilir
    .forEach(eleman=>eleman.classList.add('filtered'))
    console.log(term)

    Array.from(list.children)
    .filter(todo=> todo.textContent.toLowerCase().includes(term))
    .forEach(eleman=>eleman.classList.remove('filtered'))
    console.log(term)
}

search.addEventListener('keyup',e=>{
    const term=search.value.trim().toLowerCase()
    //console.log(term)
    filterTodos(term)
})// klavyeye tıklanıp çekildiği zaman çalışır



// içermeyenler filtered kılasına  sahip olur yani yüzmek de y yazdığım zaman keyup fonksiyonu çalışır

// bu tıklamada filterTodosa bu y harfi gider listin childreni yani li si nin texti  termi yani y harfine ait birşey içermiyorsa 

// içermeyen elemanları tek tek dolaşıp class listesine  filteredi ekler




/// koleksiyonlarda foreach kullanılmaz bunun yerine not liste çevirmeliyiz