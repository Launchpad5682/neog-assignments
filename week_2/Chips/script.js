const snackbarInput = document.querySelector("#snackbar__input");
const chipsContainer = document.querySelector(".chips__container");

snackbarInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    const snackbarItem = document.createElement("div");
    snackbarItem.classList.add("snackbar__item");
    snackbarItem.innerText = snackbarInput.value;
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa");
    closeIcon.classList.add("fa-close");
    console.log(closeIcon);
    snackbarItem.appendChild(closeIcon);
    chipsContainer.appendChild(snackbarItem);
    snackbarInput.value = "";
    // console.log(snackbarInput.value);
  }
});
