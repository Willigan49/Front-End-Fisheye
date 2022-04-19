function imageFactory(photographerId, image, medias, title, id, onClick) {
  let path = `assets/images/${photographerId}/${image}`;
  const img = document.createElement("img");
  const titleImage = title;
  img.setAttribute("src", path);
  img.setAttribute("alt", title);
  img.addEventListener("click", () =>
    onClick(
      medias,
      medias.findIndex((m) => m.id == id),
      path,
      image,
      titleImage
    )
  );
  return img;
}
