const message =
  "Merci! Surveillez bien vos boîtes mail dorénavant, des tonnes de messages plus ou moins bienveillants vont vous être adressés sous peu!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
