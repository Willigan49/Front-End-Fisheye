async function getData() {
  let data = await fetch("../../data/photographers.json", { mode: "no-cors" })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));

  return data;
}

function getPhotographer(data, id) {
  const photographe = data.photographers.find((element) => element.id == id);
  console.log(photographe);
  return photographe;
}

function sortMedias(medias, sortBy) {
  switch (sortBy) {
    case "popularité":
      medias = medias.sort((a, b) => b.likes - a.likes);
      break;
    case "date":
      medias = medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "titre":
      medias = medias.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  return medias;
}

function displayData(medias) {
  const mediaSection = document.querySelector(".media_section");
  mediaSection.innerHTML = "";
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, medias);
    const mediaCardDOM = mediaModel.getMediaDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

function getPrice(photographe) {
  return photographe.price;
}

async function init() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  let data = await getData(id);
  let photographe = getPhotographer(data, id);
  let listSort = document.getElementById("sort-select");
  let medias = data.media.filter((element) => element.photographerId == id);
  let totalCount = medias.reduce((prev, current) => prev + current.likes, 0);
  const infos = document.getElementById("infos");
  const counter = document.createElement("div");
  const number = document.createElement("p");
  number.setAttribute("class", "counter");
  number.innerHTML = totalCount;
  const heart = document.createElement("i");
  heart.setAttribute("class", "fa-solid fa-heart");
  counter.appendChild(number);
  counter.appendChild(heart);
  infos.appendChild(counter);
  const priceInfo = document.createElement("div");
  priceInfo.innerHTML = getPrice(photographe) + " €/jour";
  infos.appendChild(priceInfo);
  medias = sortMedias(medias, listSort.value);
  displayData(medias);
  listSort.addEventListener("change", () => {
    medias = sortMedias(medias, listSort.value);
    displayData(medias);
  });
  const photographerModel = photographerFactory(photographe);
  const userCardDOM = photographerModel.getUserInfoCardDOM();
  let photographerDom = document.getElementById("photographer_section");
  let photographerImage = document.querySelector(".photographer_image");
  const userCardImage = photographerModel.getUserPictureDOM();
  photographerDom.appendChild(userCardDOM);
  photographerImage.appendChild(userCardImage);
}

init();
