function createLightBox(medias, id, path, image, video) {
  const lightBox = document.getElementById("lightbox");
  lightBox.innerHTML = "";
  const crossIcon = document.createElement("i");
  crossIcon.setAttribute("class", "fa-solid fa-xmark cross");
  crossIcon.setAttribute("tabIndex", "5");
  crossIcon.addEventListener("click", () => closeLightBox());
  const navBox = document.createElement("div");
  navBox.setAttribute("class", "nav-box");
  const leftArrow = document.createElement("i");
  leftArrow.setAttribute("class", "fa-solid fa-angle-left left");
  leftArrow.setAttribute("tabIndex", "3");
  leftArrow.addEventListener("click", () => previousMedia(medias, id));
  const imgContent = document.createElement("div");
  imgContent.setAttribute("class", "img-content");
  const rightArrow = document.createElement("i");
  rightArrow.setAttribute("class", "fa-solid fa-angle-right right");
  rightArrow.setAttribute("tabIndex", "4");
  rightArrow.addEventListener("click", () => nextMedia(medias, id));
  window.addEventListener(
    "keydown",
    (e) => {
      /*  if (e.defaultPrevented) {
        return;
      } */
      switch (e.key) {
        case "ArrowLeft":
          previousMedia(medias, id);
          break;
        case "ArrowRight":
          nextMedia(medias, id);
          break;
        default:
          return;
      }
      e.preventDefault();
      e.stopPropagation();
    },
    true
  );
  lightBox.appendChild(navBox);
  navBox.appendChild(crossIcon);
  navBox.appendChild(leftArrow);
  navBox.appendChild(imgContent);
  navBox.appendChild(rightArrow);
  if (image) {
    let img = document.createElement("img");
    img.setAttribute("src", path);
    img.setAttribute("tabIndex", "1");
    imgContent.appendChild(img);
  } else {
    let video = document.createElement("video");
    video.setAttribute("src", path);
    video.setAttribute("controls", "");
    video.setAttribute("tabIndex", "1");
    imgContent.appendChild(video);
  }
  return lightBox;
}
function displayLightBox(medias, id) {
  let currentMedia = medias[id];
  let path = "";
  console.log(currentMedia);
  if (currentMedia.image) {
    path = `assets/images/${currentMedia.photographerId}/${currentMedia.image}`;
  } else {
    path = `assets/images/${currentMedia.photographerId}/${currentMedia.video}`;
  }
  var lightBox = createLightBox(
    medias,
    id,
    path,
    currentMedia.image,
    currentMedia.video
  );
  lightBox.style.display = "block";
}

function closeLightBox() {
  const lightBox = document.getElementById("lightbox");
  lightBox.style.display = "none";
}

function nextMedia(medias, id) {
  if (id >= medias.length - 1) {
    id = 0;
  } else {
    id++;
  }
  displayLightBox(medias, id);
}

function previousMedia(medias, id) {
  if (id <= 0) {
    id = medias.length - 1;
  } else {
    id--;
  }
  displayLightBox(medias, id);
}
