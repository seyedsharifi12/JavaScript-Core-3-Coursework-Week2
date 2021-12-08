function uploadDogImage() {
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const li = document.createElement("li");
      li.classList.add("list-elements");

      const img = document.createElement("img");
      img.classList.add("dog-imgs");
      img.style.width = "400px";
      img.style.height = "auto";

      const ul = document.getElementById("list");
      ul.appendChild(li);
      li.appendChild(img);

      img.src = data.img;
    })
    .catch((error) => {
      console.log(error);
    });
}
const button = document.getElementById("loading-button");
button.addEventListener("click", uploadDogImage);
