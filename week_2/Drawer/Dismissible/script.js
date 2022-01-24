const drawerToggle = document.querySelector("#drawer-icon");
const drawer = document.querySelector(".drawer");

drawerToggle.addEventListener("click", () => {
  drawer.classList.toggle("drawer__visible");
});
