function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const photographerPage = `../../photographer.html?id=${id}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    link.setAttribute("href", photographerPage);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
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
    article.appendChild(locationText);
    article.appendChild(taglineText);
    article.appendChild(priceText);
    return article;
  }

  function getUserInfoCardDOM() {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const locationText = document.createElement("p");
    locationText.classList.add("location");
    locationText.textContent = city + ", " + country;
    const taglineText = document.createElement("p");
    taglineText.classList.add("tagline");
    taglineText.textContent = tagline;
    article.appendChild(h2);
    article.appendChild(locationText);
    article.appendChild(taglineText);
    return article;
  }

  function getUserPictureDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
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
