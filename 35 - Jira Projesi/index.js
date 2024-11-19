const listColumns = document.querySelectorAll(".drag-item-list");

const todoList = document.getElementById("todo-list");
const progressList = document.getElementById("progress-list");
const doneList = document.getElementById("done-list");

let todoListArray = [];
let progressListArray = [];
let doneListArray = [];
let listArrays = [];

let updatedOnLoad = false;

let draggedItem;

let currentColumn;

const addButtons = document.querySelectorAll(".add-btn:not(.update)");

const saveButtons = document.querySelectorAll(".update");

const addItemConatiners = document.querySelectorAll(".add-container");

const addItems = document.querySelectorAll(".add-item");

let dragging = false;

function getSavedColumns() {
  // eğer local strogede var sa
  if (localStorage.getItem("todoItems")) {
    todoListArray = JSON.parse(localStorage.getItem("todoItems"));
    progressListArray = JSON.parse(localStorage.getItem("progressItems"));
    doneListArray = JSON.parse(localStorage.getItem("doneItems"));
  } else {
    // eğer local strogede yoksa
    todoListArray = ["React Entegrasyonu", "Angular Entegrasyonu"];
    progressListArray = ["Sendgrid Entegrasyonu"];
    doneListArray = ["Verimor Entegrasyonu"];
  }
}
// local strogeyi güncelleme
function updateSavedColumns() {
  listArrays = [todoListArray, progressListArray, doneListArray];
  const arrayNames = ["todo", "progress", "done"];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(
      `${arrayName}Items`,
      JSON.stringify(listArrays[index])
    );
  });
}

// LocalStorage'dan verileri yükle veya varsayılanları kaydet
function filterArray(array) {
  const filteredArray = array.filter((item) => item !== null)
  return filteredArray;
}

function updateDom() {
  if (!updatedOnLoad) {
    // true değilse
    getSavedColumns();
  }

  todoList.textContent = "";
  // todoItem todolistarray içindeki her bir elemen
  todoListArray.forEach((todoItem, index) => {
    createItem(todoList, 0, todoItem, index);
  });
  todoListArray = filterArray(todoListArray)
  
  progressList.textContent = "";
  progressListArray.forEach((progressItem, index) => {
    createItem(progressList, 1, progressItem, index);
  });
  progressListArray = filterArray(progressListArray)

  doneList.textContent = "";
  doneListArray.forEach((doneItem, index) => {
    //ul
    createItem(doneList, 2, doneItem, index);
  });
  doneListArray = filterArray(doneListArray)


  updatedOnLoad = true;
  updateSavedColumns();
}

updateDom();
// ul
function createItem(columnItem, column, items, index) {
  const listItem = document.createElement("li");
  listItem.classList.add("drag-item");
  listItem.textContent = items;
  listItem.draggable = true;
  listItem.contentEditable = true;
  listItem.setAttribute("onfocusout", `updateItem(${index},${column})`);

  listItem.setAttribute("ondragstart", "drag(event)");
  columnItem.appendChild(listItem);
}
function updateItem(id, column) {
  const selectedArray = listArrays[column];
  const selectedColumn = listColumns[column].children;
  console.log(selectedColumn);
  if (!dragging) {
    if (selectedColumn[id].textContent == "") {
      delete selectedArray[id];
    } else {
      selectedArray[id] = selectedColumn[id].textContent;
    }
  updateDom();

  }
 
}

function drag(e) {
  draggedItem = e.target;
  dragging=true
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const parent = listColumns[currentColumn];
  parent.appendChild(draggedItem);

  listColumns.forEach((colon) => {
    colon.classList.remove("over");
  });
  updateInsideArrays();
  dragging = false;
}

function dragEnter(column) {
  listColumns[column].classList.add("over");
  currentColumn = column;
}

function updateInsideArrays() {
  todoListArray = [];
  for (let i = 0; i < todoList.children.length; i++) {
    todoListArray.push(todoList.children[i].textContent);
  }
  progressListArray = [];
  for (let i = 0; i < progressList.children.length; i++) {
    progressListArray.push(progressList.children[i].textContent);
  }
  doneListArray = [];
  for (let i = 0; i < doneList.children.length; i++) {
    doneListArray.push(doneList.children[i].textContent);
  }

  updateDom();
}

function showItemDıv(column) {
  addButtons[column].style.visibility = "hidden";
  addItemConatiners[column].style.display = "flex";
  saveButtons[column].style.display = "flex";
}
function hideItemdiv(column) {
  addButtons[column].style.visibility = "visible";
  addItemConatiners[column].style.display = "none";
  saveButtons[column].style.display = "none";
  addToColmn(column);
}

function addToColmn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText);
  addItems[column].textContent = "";
  updateDom();
}
updateDom();
// Bu yapı, bir **sürükle ve bırak (drag-and-drop)** işlevselliği oluşturan bir JavaScript kodudur. Bu tür bir yapı genellikle kullanıcıların bir öğeyi bir alandan başka bir alana sürükleyip bırakmasına olanak tanır. İşlevler, **HTML5 drag-and-drop API** kullanılarak oluşturulmuş.

// ### Kodun Parçaları ve İşlevleri

// 1. **`function drag(e)`**
//    - Bu işlev, sürükleme işlemi başladığında çalışır.
//    - `e.target` sürüklenen öğeyi temsil eder ve bu öğe `draggedItem` değişkenine atanır.
//    - Bu, sürüklenen öğeyi referans almayı sağlar, böylece bırakıldığında hangi öğe üzerinde işlem yapılacağını biliriz.

//    **Örnek Kullanım:**
//    ```javascript
//    <div draggable="true" ondragstart="drag(event)">Sürüklenebilir Öğe</div>
//    ```

// ---

// 2. **`function allowDrop(e)`**
//    - Bırakma işleminin gerçekleşeceği alanlarda çalışır.
//    - Varsayılan olarak, bir öğeyi herhangi bir yere bırakamazsınız. Ancak `e.preventDefault()` çağrılarak öğenin bırakılmasına izin verilir.

//    **Örnek Kullanım:**
//    ```javascript
//    <div ondragover="allowDrop(event)">Bırakma Alanı</div>
//    ```

// ---

// 3. **`function drop(e)`**
//    - Bu işlev, bir öğe bırakıldığında çalışır.
//    - `e.preventDefault()` ile varsayılan bırakma davranışı (örneğin, başka bir web sayfasına yönlendirme) engellenir.
//    - `parent.appendChild(draggedItem)` kullanılarak sürüklenen öğe, bırakılan alanın içine eklenir.
//    - `listColumns[currentColumn]`, sürüklenen öğenin bırakıldığı sütunu veya alanı ifade eder.

//    **Örnek Kullanım:**
//    ```javascript
//    <div ondrop="drop(event)">Buraya Bırak</div>
//    ```

// ---

// 4. **`function dragEnter(column)`**
//    - Bu işlev, sürüklenen öğe bir sütunun veya bırakma alanının üzerine geldiğinde çalışır.
//    - `currentColumn = column` ile o anki sütun/alan bilgisi güncellenir.
//    - Bu bilgi, hangi sütuna bırakılacağını belirlemek için kullanılır.

// ---

// ### Değişkenler ve İşleyiş

// 1. **`draggedItem`**
//    - Sürüklenen öğenin referansını tutar. `drag(e)` işlevinde atanır ve diğer işlevlerde bu öğe üzerinde işlem yapılır.

// 2. **`currentColumn`**
//    - Sürüklenen öğenin bırakılacağı sütunun kimliğini veya indeksini tutar. `dragEnter(column)` ile güncellenir.

// 3. **`listColumns`**
//    - Bir dizi veya liste şeklinde tanımlanmış olup, farklı sütun veya alanları referans alır.
//    - Örneğin, `listColumns[currentColumn]` doğru sütun/alanın DOM referansını alır ve öğe bu alana eklenir.

// ---

// ### Örnek Kullanım Senaryosu
// Bu yapı, sürükle-bırak işlevselliği olan bir **kanban panosu**, **görev yöneticisi** veya **dinamik liste yönetimi** gibi uygulamalarda kullanılabilir.

// **HTML Örneği:**
// ```html
// <div id="column1" ondragover="allowDrop(event)" ondrop="drop(event)">
//   <div draggable="true" ondragstart="drag(event)">Görev 1</div>
// </div>
// <div id="column2" ondragover="allowDrop(event)" ondrop="drop(event)">
//   <div draggable="true" ondragstart="drag(event)">Görev 2</div>
// </div>
// ```

// **JavaScript Bağlantısı:**
// ```javascript
// let draggedItem;
// let currentColumn;
// const listColumns = [document.getElementById("column1"), document.getElementById("column2")];
// ```

// ---

// ### Açıklama ve İşlev Akışı

// 1. Kullanıcı bir öğeyi sürükler (`drag`).
// 2. Öğenin üzerine geldiği sütun tespit edilir (`dragEnter`).
// 3. Sürüklenen öğe uygun bir alana gelirse, bırakılmasına izin verilir (`allowDrop`).
// 4. Bırakma işlemi gerçekleştiğinde, öğe uygun sütuna eklenir (`drop`).
