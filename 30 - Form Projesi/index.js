const form = document.getElementById("form");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const alertTitle = document.getElementById("alertTitle");
const alertMessage = document.querySelector(".alertMessage");

let isValid = false;
let passwordMatch = false;
console.log(isValid);
function validateForm() {
  isValid = form.checkValidity(); // tüm html etiketleri valid ise ture döner
  console.log(isValid);
  if (!isValid) {
    alertTitle.textContent = "Lütfen Tüm Alanları Doldurunuz!";
    alertTitle.style.color = "red";
    alertMessage.style.borderColor = "red";
    return;
  }

  if (password.value == repassword.value) {
    password.style.borderColor = "green";
    repassword.style.borderColor = "green";
    passwordMatch = true;
    
  } else {
    passwordMatch = false;

    alertTitle.textContent = "Şifreleriniz Eşleşmiyor";
    password.style.borderColor = "red";
    repassword.style.borderColor = "red";

    alertTitle.textContent = "Lütfen Tüm Alanları Doldurunuz!";
    alertTitle.style.color = "red";
    return
  }

  if (isValid && passwordMatch) {
    alertTitle.textContent = "Kayıt Olundu";
    alertMessage.style.borderColor = "green";
    alertTitle.style.borderColor = "green";
  }
}

function takeFormInformation() {
    const user={
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        address:form.adres.value
    }
    console.log(user)
}

function submitForm(e) {
  e.preventDefault(); //yenileme özelliği engelleme
  validateForm();

  if (isValid && passwordMatch) {
    takeFormInformation();
  }
}

form.addEventListener("submit", submitForm);
