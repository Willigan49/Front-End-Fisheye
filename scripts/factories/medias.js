function mediaFactory(data, medias) {
  let { id, title, image, likes, date, price, photographerId, video } = data;
  let path = "";

  if (image) {
    path = `assets/images/${photographerId}/${image}`;
  } else {
    path = `assets/images/${photographerId}/${video}`;
  }

  function getMediaDOM() {
    const article = document.createElement("article");
    const thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail");
    article.appendChild(thumbnail);
    if (image) {
      const img = document.createElement("img");
      img.setAttribute("src", path);
      img.addEventListener("click", () =>
        displayLightBox(
          medias,
          medias.findIndex((m) => m.id == id),
          path,
          image
        )
      );
      thumbnail.appendChild(img);
    } else {
      const vid = document.createElement("video");
      vid.setAttribute("src", path);
      thumbnail.appendChild(vid);
      vid.addEventListener("click", () =>
        displayLightBox(
          medias,
          medias.findIndex((m) => m.id == id),
          path
        )
      );
    }
    const likeNumber = document.createElement("p");
    likeNumber.textContent = likes;
    const heart = document.createElement("i");
    heart.setAttribute("class", "fa-solid fa-heart");
    heart.onclick = () => {
      likes++;
      likeNumber.textContent = likes;
      const counter = document.querySelector(".counter");
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
    };
    const likeCounter = document.createElement("div");
    likeCounter.setAttribute("class", "like-counter");
    likeCounter.appendChild(likeNumber);
    likeCounter.appendChild(heart);
    const photoTitle = document.createElement("p");
    photoTitle.textContent = title;
    const legend = document.createElement("div");
    legend.setAttribute("class", "legend");
    legend.appendChild(photoTitle);
    legend.appendChild(likeCounter);
    article.appendChild(legend);
    return article;
  }
  return { getMediaDOM };
}
