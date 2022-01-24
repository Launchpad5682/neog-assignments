const drawerToggle = document.querySelector("#drawer-icon");
const modalDrawer = document.querySelector(".modal__drawer");
const drawer = document.querySelector(".drawer");

drawerToggle.addEventListener("click", () => {
  drawer.classList.remove("drawer__visible");
  modalDrawer.classList.remove("drawer__visible");
});

modalDrawer.addEventListener("click", () => {
  modalDrawer.classList.add("drawer__visible");
  drawer.classList.add("drawer__visible");
});

// window.onclick = (e) => {
//   console.log(e.target);
// };
