function mediaFactory(data, medias) {
  let { id, title, image, likes, photographerId, video } = data;

  function getMediaDOM() {
    function incrementLike() {
      likes++;
      likeNumber.textContent = likes;
      const counter = document.querySelector(".counter");
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }
    const article = document.createElement("article");
    const thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail");
    article.appendChild(thumbnail);
    if (image) {
      let img = imageFactory(
        photographerId,
        image,
        medias,
        title,
        id,
        displayLightBox
      );
      img.setAttribute("tabindex", "0");
      thumbnail.appendChild(img);
    } else {
      let vid = videoFactory(
        photographerId,
        video,
        medias,
        title,
        id,
        displayLightBox
      );
      vid.setAttribute("tabindex", "0");
      thumbnail.appendChild(vid);
    }
    const likeNumber = document.createElement("p");
    likeNumber.textContent = likes;
    likeNumber.setAttribute("tabindex", "0");
    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-heart");
    heart.setAttribute("tabindex", "0");
    heart.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        incrementLike();
      }
    });
    heart.onclick = () => {
      incrementLike();
    };
    const likeCounter = document.createElement("div");
    likeCounter.setAttribute("class", "like-counter");
    likeCounter.appendChild(likeNumber);
    likeCounter.appendChild(heart);
    const photoTitle = document.createElement("p");
    photoTitle.textContent = title;
    photoTitle.setAttribute("tabindex", "0");
    photoTitle.setAttribute("class", "photo-title");
    const legend = document.createElement("div");
    legend.setAttribute("class", "legend");
    legend.appendChild(photoTitle);
    legend.appendChild(likeCounter);
    article.appendChild(legend);
    return article;
  }
  return { getMediaDOM };
}
