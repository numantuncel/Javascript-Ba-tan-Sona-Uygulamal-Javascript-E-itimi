const audio = document.querySelector("audio");
const img = document.querySelector("img");

const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

const title = document.getElementById("title");
const creator = document.getElementById("creator");

const progressDiv = document.getElementById("progressDiv");
const progress = document.getElementById("progress");

const currentTimee = document.getElementById("currentTimee");

const totalTime = document.getElementById("totalTime");

let isPlaying = false;
// audio.play()

function playSong() {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  audio.play();
}
function pauseSong() {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  audio.pause();
}

playButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

const songs = [
  {
    name: "bootstrap",
    title: "Bootstrap 5 Eğitimi",
    creator: "Can Boz",
  },
  {
    name: "c",
    title: "C Programlama Eğitimi",
    creator: "Can Boz",
  },
];
let songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(song) {
  title.textContent = song.title;
  creator.textContent = song.creator;
  audio.src = `music/${song.name}.mp3`;
  img.src = `img/${song.name}.png`;
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);

function updateProgressBar(e) {
  if (isPlaying == true) {
    // console.log(e);
    const { currentTime, duration } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const minutes = Math.floor(duration / 60); // Dakika kısmını alır
    const seconds = Math.floor(duration % 60); // Kalan saniye kısmını alır
    // üçlü operatör

    // seconds değeri varsa
    if (seconds) {
    totalTime.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // "3:05" gibi formatlar
      
    }

    const currentMinutes = Math.floor(currentTime / 60); // Dakika kısmını alır
    const currentSeconds = Math.floor(currentTime % 60); // Kalan saniye kısmını alır
    // üçlü operatör
    currentTimee.textContent = `${currentMinutes}:${
      currentSeconds < 10 ? "0" : ""
    }${currentSeconds}`; // "3:05" gibi formatlar
  }
}

function setProgresBar(e) {
  // console.log(e);
  // srcElement:
  // Olayın tetiklendiği HTML elementini temsil eder.
  const width = e.srcElement.clientWidth;
  // console.log(width);

  const { duration } = audio;
  const clickX = e.offsetX;
  // Oran: 50 / 200 = 0.25 (çubuğun %25'lik kısmı).
  audio.currentTime=(clickX / width) * duration
}

audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended",nextSong);

// currentTime: Medya öğesinin o an çalınan süresini (saniye cinsinden) döndürür.
// duration: Medya öğesinin toplam süresini (saniye cinsinden) döndürür.

progressDiv.addEventListener("click", setProgresBar);


// 0.25 * duration
// Ses dosyasının toplam süresinin %25'ini bulur. Örneğin:
// duration = 120 saniye (2 dakika),
// Sonuç: 0.25 * 120 = 30 saniye.
// Yani, kullanıcı sesin 30. saniyesine gitmek istiyor.