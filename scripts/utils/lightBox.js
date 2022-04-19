function createLightBox(medias, id, path, image, video, title) {
  const lightBox = document.getElementById("lightbox");
  lightBox.setAttribute("tabIndex", "0");
  lightBox.innerHTML = "";
  const crossIcon = document.createElement("i");
  crossIcon.setAttribute("class", "fa-solid fa-xmark cross");
  crossIcon.setAttribute("tabIndex", "6");
  crossIcon.setAttribute("aria-label", "close modal");
  crossIcon.setAttribute("role", "button");
  crossIcon.addEventListener("click", () => closeLightBox());
  crossIcon.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      closeLightBox();
    }
  });
  const navBox = document.createElement("div");
  navBox.setAttribute("class", "nav-box");
  navBox.setAttribute("tabindex", "1");
  const leftArrow = document.createElement("i");
  leftArrow.setAttribute("class", "fa-solid fa-angle-left left");
  leftArrow.setAttribute("tabIndex", "4");
  leftArrow.setAttribute("aria-label", "média précédent");
  leftArrow.setAttribute("role", "link");
  leftArrow.addEventListener("click", () => previousMedia(medias, id));
  leftArrow.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      previousMedia(medias, id);
    }
  });
  const imgContent = document.createElement("div");
  imgContent.setAttribute("class", "img-content");
  const photoTitle = document.createElement("p");
  photoTitle.setAttribute("tabIndex", "3");
  photoTitle.textContent = title;
  const rightArrow = document.createElement("i");
  rightArrow.setAttribute("class", "fa-solid fa-angle-right right");
  rightArrow.setAttribute("tabIndex", "5");
  rightArrow.setAttribute("aria-label", "média suivant");
  rightArrow.setAttribute("role", "link");
  rightArrow.addEventListener("click", () => nextMedia(medias, id));
  rightArrow.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      nextMedia(medias, id);
    }
  });
  window.addEventListener(
    "keydown",
    (e) => {
      switch (e.key) {
        case "ArrowLeft":
          previousMedia(medias, id);
          break;
        case "ArrowRight":
          nextMedia(medias, id);
          break;
        case "Escape":
          closeLightBox();
          break;
        default:
          return;
      }
      e.stopPropagation();
    },
    true
  );
  lightBox.appendChild(navBox);
  navBox.appendChild(leftArrow);
  navBox.appendChild(imgContent);
  if (image) {
    let img = document.createElement("img");
    img.setAttribute("alt", title);
    img.setAttribute("src", path);
    img.setAttribute("tabIndex", "1");
    imgContent.appendChild(img);
    imgContent.appendChild(photoTitle);
  } else {
    let video = document.createElement("video");
    video.setAttribute("src", path);
    video.setAttribute("alt", title);
    video.setAttribute("controls", "");
    video.setAttribute("tabIndex", "2");
    imgContent.appendChild(video);
    imgContent.appendChild(photoTitle);
  }
  navBox.appendChild(rightArrow);
  navBox.appendChild(crossIcon);
  return lightBox;
}
function displayLightBox(medias, id) {
  let currentMedia = medias[id];
  let path = "";
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
    currentMedia.video,
    currentMedia.title
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
