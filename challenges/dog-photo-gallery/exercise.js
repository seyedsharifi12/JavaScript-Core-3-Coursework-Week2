function uploadDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const li = document.createElement("li");
      li.classList.add("list-elements");

      const img = document.createElement("img");
      img.classList.add("dog-imgs");
      img.style.width = "400px";
      img.style.height = "auto";

      const ul = document.getElementById("list");
      ul.appendChild(li);
      li.appendChild(img);

      img.src = data.message;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
const uploadButton = document.getElementById("loading-button");
uploadButton.addEventListener("click", uploadDogImage);
