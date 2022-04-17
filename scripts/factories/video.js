function videoFactory(photographerId, video, medias, title, id, onClick) {
  let path = `assets/images/${photographerId}/${video}`;
  const vid = document.createElement("video");
  vid.setAttribute("src", path);
  vid.addEventListener("click", () =>
    onClick(
      medias,
      medias.findIndex((m) => m.id == id),
      path,
      title
    )
  );
  return vid;
}
