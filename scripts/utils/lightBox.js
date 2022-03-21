function createLightBox(medias, id, path, image, video) {
  const lightBox = document.getElementById("lightbox");
  lightBox.innerHTML = "";
  const crossIcon = document.createElement("i");
  crossIcon.setAttribute("class", "fa-solid fa-xmark cross");
  crossIcon.addEventListener("click", () => closeLightBox());
  const navBox = document.createElement("div");
  navBox.setAttribute("class", "nav-box");
  const leftArrow = document.createElement("i");
  leftArrow.setAttribute("class", "fa-solid fa-angle-left left");
  leftArrow.addEventListener("click", () => previousMedia());
  const imgContent = document.createElement("div");
  imgContent.setAttribute("class", "img-content");
  const rightArrow = document.createElement("i");
  rightArrow.setAttribute("class", "fa-solid fa-angle-right right");
  rightArrow.addEventListener("click", () => nextMedia(id));
  lightBox.appendChild(navBox);
  navBox.appendChild(crossIcon);
  navBox.appendChild(leftArrow);
  navBox.appendChild(imgContent);
  navBox.appendChild(rightArrow);
  if (image) {
    let img = document.createElement("img");
    img.setAttribute("src", path);
    imgContent.appendChild(img);
  } else {
    let video = document.createElement("video");
    video.setAttribute("src", path);
    video.setAttribute("controls", "");
    imgContent.appendChild(video);
  }
  return lightBox;
}
function displayLightBox(medias, id, path, image, video) {
  var lightBox = createLightBox(medias, id, path, image, video);
  console.log(id);
  lightBox.style.display = "block";
}

function closeLightBox() {
  const lightBox = document.getElementById("lightbox");
  lightBox.style.display = "none";
}

function nextMedia(id) {
  id++;
  displayLightBox(id);
}

function previousMedia(id) {
  id--;
  displayLightBox(id);
}
