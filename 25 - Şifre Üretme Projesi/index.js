const passwordButton = document.querySelector(".passwordButton");
const input = document.querySelector("input");
const copyIcon = document.querySelector(".copyIcon");
const copy = document.querySelector(".copy");
const alertContainer = document.querySelector(".alertContainer");

copyIcon.style.pointerEvents = "none";
passwordButton.addEventListener("click", createPassword);

function createPassword() {
  copyIcon.style.pointerEvents = "auto";
  let password = "";
  const passwordLength = 14;
  const characters =
    "QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ1234567890qwertyuıopğüasdfghjklşizxcvbnmöç#$%&/(_-";

  for (let i = 0; i < 15; i++) {
    const randomNum = Math.floor(
      Math.random() * characters.length
    ); /*çıkan sonucun 82 ile çarpılması */
    password += characters[randomNum];
  }
  input.value = password;
}

copyIcon.addEventListener("mousedown", () => {
  copy.classList.remove("copied"); // Tıklanınca 'copied' sınıfını ekle
});

copyIcon.addEventListener("mouseup", () => {
  setTimeout(() => {
    copy.classList.add("copied"); // Bir süre sonra 'copied' sınıfı kaldırılır
  }, 200); // Tıklama bitince 'copied' sınıfını kaldır
});

copyIcon.addEventListener("click", copyPassword);

function copyPassword() {
  if (input.value) {
    input.select();
    navigator.clipboard.writeText(input.value);

    alertContainer.classList.add("active"); // 'active' sınıfını ekle
    alertContainer.textContent = `Şifre: ${input.value}`; // Mesajı ayarla
    setTimeout(() => {
      alertContainer.classList.remove("active"); // 'active' sınıfını kaldır
    }, 500); // 2 saniye sonra kaldır (bu süreyi ihtiyacınıza göre ayarlayabilirsiniz)
    // 200 milisaniye sonra 'active' sınıfını ekle
  }

  // Mesaj ve sınıf ekleme işlemi
}
// setTimeout(()=>{// bir kere çalışır
//     console.log('can')
// },2000);// kaç saniye sonra
