function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const photographerName =
    document.getElementById("photographer-name").textContent;
  const fieldName = document.querySelector(".photographer-name");
  fieldName.innerHTML = photographerName;
}

function getValues() {
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const email = document.querySelector(".email");
  const message = document.querySelector(".message");
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(message.value);
  closeModal();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
