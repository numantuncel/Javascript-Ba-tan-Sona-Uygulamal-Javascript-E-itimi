const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("joke");
const jokeTopic = document.getElementById("topic");

const apiKey = "FcRCdSdWOeTz0zfv2HwukA==qowdYe0zAS6B6gil";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  try {
    // tıkladığımda bu
    jokeText.textContent = "updating...";
    jokeButton.textContent = "loading...";
    jokeButton.disabled = true;
    //
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // çekme işleminden sonra bu
    jokeButton.disabled = false;
    jokeButton.textContent = "Tell me a joke";

    jokeText.textContent = data[0].joke;

    const smallJoke = data[0].joke.toLowerCase().split(" ");
    console.log(smallJoke);

    for (let i = 0; i < smallJoke.length; i++) {
      let element = smallJoke[i];

      if (element.includes("family")) {
        jokeTopic.textContent = "Aile ile ilgili";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("job")) {
        jokeTopic.textContent = "iş ile ilgili";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("school")) {
        jokeTopic.textContent = "okul ile ilgili";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("how")) {
        jokeTopic.textContent = "nasıl ile ilgili";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("i")) {
        jokeTopic.textContent = "benim ile ilgili";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("what")) {
        jokeTopic.textContent = "ne ile başlayan soru";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("we")) {
        jokeTopic.textContent = "bizimle ilgili";
        break; // Eşleşme bulundu, döngüden çık
      } else if (element.includes("you")) {
        jokeTopic.textContent = "seninle ilgili";
        break; // Eşleşme bulundu, döngüden çık
      }
    }
    if (!jokeTopic.textContent) {
      jokeTopic.textContent = "konu yok";
    }
  } catch (error) {
    jokeText.textContent = "try again later";

    // terkar normal durum için
    jokeButton.disabled = false;
    jokeButton.textContent = "Tell me a joke";
  }
}

jokeButton.addEventListener("click", getJoke);
