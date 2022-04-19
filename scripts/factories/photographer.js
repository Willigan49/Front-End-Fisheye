function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const photographerPage = `../../photographer.html?id=${id}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("tabindex", "-1");
    const link = document.createElement("a");
    link.setAttribute("href", photographerPage);
    link.setAttribute("tabindex", "0");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const div = document.createElement("div");
    div.setAttribute("tabindex", "0");
    div.setAttribute("class", "photographer_info");
    const locationText = document.createElement("p");
    locationText.classList.add("location");
    locationText.textContent = city + ", " + country;
    const taglineText = document.createElement("p");
    taglineText.classList.add("tagline");
    taglineText.textContent = tagline;
    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = price + "€/jour";
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    div.appendChild(locationText);
    div.appendChild(taglineText);
    div.appendChild(priceText);
    article.appendChild(div);
    return article;
  }

  function getUserInfoCardDOM() {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "photographer-name");
    h2.setAttribute("tabindex", "0");
    h2.textContent = name;
    const divInfo = document.createElement("div");
    divInfo.setAttribute("tabindex", "0");
    const locationText = document.createElement("p");
    locationText.classList.add("location");
    locationText.textContent = city + ", " + country;
    const taglineText = document.createElement("p");
    taglineText.classList.add("tagline");
    taglineText.textContent = tagline;
    article.appendChild(h2);
    divInfo.appendChild(locationText);
    divInfo.appendChild(taglineText);
    article.appendChild(divInfo);
    return article;
  }

  function getUserPictureDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("tabindex", "0");
    article.appendChild(img);
    return article;
  }
  return {
    name,
    picture,
    getUserCardDOM,
    getUserInfoCardDOM,
    getUserPictureDOM,
  };
}
