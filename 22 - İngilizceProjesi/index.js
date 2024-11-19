const wordInput = document.getElementById("word");
const button = document.querySelector("button");
const translateDiv = document.getElementById("translateDiv");
const title = document.getElementById("title");
const meainig = document.getElementById("meainig");
const audio = document.getElementById("audio");

async function fetchApi() {
  translateDiv.style.display = `none`;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`;
  const result = await fetch(url).then((res) => res.json()); // işlemi bitirmesini beklemek için async await kullanılır
  console.log(result);
  if (result.title) {
  } else {
    translateDiv.style.display = `block`;
    title.textContent = result[0].word;
    meainig.textContent = result[0].meanings[0].definitions[0].definition;
    audio.src=result[0].phonetics[0].audio;

  }
}

button.addEventListener("click", fetchApi);
