const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const websiteName = document.getElementById("website-name");

const backlinkForm = document.getElementById("backlink-form");

const websiteUrl = document.getElementById("website-url");

const backlinksContainer = document.getElementById("backlinks-container");

let backLinks = [];

function showModal() {
  modal.classList.add("show-modal");
  websiteName.focus(); // form açıldığında odaklanır
}

modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
function validate(nameValue, urlValue) {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);

  if (!nameValue || !urlValue) {
    alert("lütfen gerekli alanları doldurunuz.");
    return false;
  }

  if (!urlValue.match(regex)) {
    alert("lütfen geçerli bir web adresi site girin");
    return false;
  }
  return true;
}
function deleteBackLink(url) {
  // Buradaki i, forEach metodunun ikinci parametresi olarak gelen indeks değeridir.
  //  Fonksiyon içinde, backLinks dizisindeki her elemanın sırasını temsil eder.
  backLinks.forEach((backlink, i) => {
    if (backlink.url === url) {
      backLinks.splice(i, 1); // bir eleman siler
      
    }
    localStorage.setItem("backLinks", JSON.stringify(backLinks));
    fetchBackLinks();
  });
}

function buildBackLinks() {
  backlinksContainer.textContent = "";
  backLinks.forEach((eleman) => {
    const { name, url } = eleman;
    const item = document.createElement("div");
    item.classList.add("item");
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");

    // deleteBackLink fonksiyonuna farklı URL'ler göndermek istiyorsanız,
    //  setAttribute bunu dinamik bir şekilde sağlar.
    closeIcon.setAttribute("onclick", `deleteBackLink('${url}')`);

    const linkInfo = document.createElement("div");
    linkInfo.classList.add("infoDiv");
    const link = document.createElement("a");
    link.classList.add("itemA");

    link.setAttribute("href", `${url}`);

    link.setAttribute("target", "_blank"); // yeni sekmede açar

    link.textContent = name;

    linkInfo.appendChild(link);

    item.append(closeIcon, linkInfo);
    // item.appendChild(closeIcon)
    // item.appendChild(linkInfo)

    backlinksContainer.appendChild(item);
  });
}

function fetchBackLinks() {
  if (localStorage.getItem("backLinks")) {
    backLinks = JSON.parse(localStorage.getItem("backLinks"));
  }
  buildBackLinks();
}

function storeBackLink(e) {
  e.preventDefault();
  const nameValue = websiteName.value;
  let urlValue = websiteUrl.value;

  if (!urlValue.includes("https://") && !urlValue.includes("http://")) {
    urlValue = `https://${urlValue}`;
    // console.log(nameValue,urlValue)
  }
  if (!validate(nameValue, urlValue)) {
    return false; // alttaki kodlar çalışmaz
  }

  const backlink = {
    name: nameValue,
    url: urlValue,
  };

  backLinks.push(backlink);

  localStorage.setItem("backLinks", JSON.stringify(backLinks));

  fetchBackLinks();

  modal.classList.remove("show-modal");
}
backlinkForm.addEventListener("submit", storeBackLink);

fetchBackLinks();
// sayfa yüklendiğinde
