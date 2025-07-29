let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");

let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

pButton.onclick = function() {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Messi is the GOAT.";

    pDiv.appendChild(newParagraph);
};

imgButton.onclick = function() {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";

    let newImage = document.createElement("img");
    newImage.src = "charmander.png";
    newImage.style.width = "150px";
    newImage.style.margin = "10px";

    imgDiv.appendChild(newImage);
};