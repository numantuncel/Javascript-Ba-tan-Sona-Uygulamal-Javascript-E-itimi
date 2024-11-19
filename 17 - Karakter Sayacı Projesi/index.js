const textarea = document.querySelector("textarea");
const totalCounter = document.getElementById("totalCounter");
const remainingCounter = document.getElementById("remainingCounter");

textarea.addEventListener("keyup", updateCounter);

function updateCounter() {
  totalCounter.textContent = textarea.value.length;
  remainingCounter.textContent =
    textarea.getAttribute("maxlength") - totalCounter.textContent;
}

updateCounter(); // sayfa yenilendiğinde veri gelmiyor gelmesi  için fonksiyonu dışarda çağırıyoruz
