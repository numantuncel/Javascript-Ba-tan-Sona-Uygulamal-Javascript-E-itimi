const count = 30;
const apiKey = 'FV80aL2fVXpvofyotSYoSK1xCN2SIo76y9L6oYcLiFw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('imageDiv');
const loader = document.getElementById('loading');

let isDownloaded = false;
let imagesLoaded = 0;
let totalImages = 0;
let imagesArray = [];

getImages();
async function getImages() {
  try {
    const response = await fetch(apiUrl);
    imagesArray = await response.json();

    displayImages();
  } catch (error) {}
}

function displayImages() {
  imagesLoaded = 0;
  totalImages = imagesArray.length;
  imagesArray.forEach((image) => {
    const count = 30;
    const apiKey = 'juHjDGKyhZn8kg9vyhEoEP1jx04z865Hbaiz4LIXrAc';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    const imageContainer = document.getElementById('imageDiv');
    const loader = document.getElementById('loading');
    
    let isDownloaded = false;
    let imagesLoaded = 0;
    let totalImages = 0;
    let imagesArray = [];
    
    getImages();
    async function getImages() {
      try {
        const response = await fetch(apiUrl);
        imagesArray = await response.json();
    
        displayImages();
      } catch (error) {}
    }
    
    function displayImages() {
    
      imagesArray.forEach((image) => {
        const item=document.createElement('a')
        item.setAttribute('href',image.urls.regular)

        const img=document.createElement('img')

        img.setAttribute('src',image.urls.regular)
        img.setAttribute('alt',image.alt_description)

        item.appendChild(img)

        imageContainer.appendChild(item)
      });
    }
    
  });
}
