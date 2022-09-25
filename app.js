let inputElem = document.querySelector("#input-field");
let btnSave = document.querySelector("#btn-save");
let btnDelete = document.querySelector("#btn-delete");
let container = document.querySelector("#listed");
let colorsBox = document.querySelectorAll(".color-box");

colorsBox.forEach(function (colorBox) {
  colorBox.addEventListener("click", function (event) {
    let mainColor = event.target.style.backgroundColor;
    inputElem.style.backgroundColor = mainColor;
  });
});

inputElem.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && inputElem.value === "") {
    alert("please enter note");
  } else if (e.keyCode === 13) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card shadow-sm rounded" onclick="removeNote(event)" style="background-color: ${inputElem.style.backgroundColor}">
    <p class="card-text p-3">${inputElem.value}</p>
  </div>`
    );
    inputElem.style.backgroundColor = "#fff";
    inputElem.value = "";
  }
});

btnSave.addEventListener("click", () => {
  if (inputElem.value === "") {
    alert("please enter note");
  } else {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card shadow-sm rounded" onclick="removeNote(event)" style="background-color: ${inputElem.style.backgroundColor}">
              <p class="card-text p-3">${inputElem.value}</p>
            </div>`
    );
  }
  inputElem.style.backgroundColor = "#fff";
  inputElem.value = "";
});

btnDelete.addEventListener("click", () => {
  inputElem.value = "";
  inputElem.style.backgroundColor = "#fff";
});

function removeNote(event) {
  event.target.parentElement.remove();
}
