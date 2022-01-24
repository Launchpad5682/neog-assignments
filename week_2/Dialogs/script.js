const buttons = document.querySelectorAll(".button__style");
const modal = document.querySelector("#modal");
const sidebyside = document.getElementById("alertsidebyside");
const alertStacked = document.getElementById("alertstacked");
const simpleAlert = document.getElementById("simplealert");
const confirmationAlert = document.getElementById("confirmation");
const confirmationAlertStacked = document.getElementById(
  "confirmation-stacked"
);

const actionButtons = document.querySelectorAll(".button__alert__style");

const modalOff = () => {
  modal.classList.remove("modal");
  sidebyside.classList.add("hidden");
  alertStacked.classList.add("hidden");
  simpleAlert.classList.add("hidden");
  confirmationAlert.classList.add("hidden");
  confirmationAlertStacked.classList.add("hidden");

  sidebyside.classList.remove("alert");
  alertStacked.classList.remove("alert");
  simpleAlert.classList.remove("alert");
  confirmationAlert.classList.remove("alert");
  confirmationAlertStacked.classList.remove("alert");
};

modal.addEventListener("click", () => {
  modalOff();
  //   sidebyside.classList.remove("alert__sidebyside");
  //   alertStacked.classList.remove("alert__stacked");
  //   simpleAlert.classList.remove("");
});

actionButtons.forEach((actionButton) =>
  actionButton.addEventListener("click", modalOff)
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("modal");
    const type = String(button.innerText);
    // console.log(type);
    // console.log(typeof type);
    if (type == "Alert Side by Side") {
      sidebyside.classList.remove("hidden");
      modal.classList.add("modal");
      sidebyside.classList.add("alert");
      //   sidebyside.classList.add("alert__sidybyside");
    } else if (type === "Alert Stacked") {
      alertStacked.classList.remove("hidden");
      modal.classList.add("modal");
      alertStacked.classList.add("alert");
      //   alertStacked.classList.add("alert__stacked");
    } else if (type === "Simple") {
      simpleAlert.classList.remove("hidden");
      modal.classList.add("modal");
      simpleAlert.classList.add("alert");
    } else if (type === "Confirmation") {
      confirmationAlert.classList.remove("hidden");
      modal.classList.add("modal");
      confirmationAlert.classList.add("alert");
    } else {
      confirmationAlertStacked.classList.remove("hidden");
      modal.classList.add("modal");
      confirmationAlertStacked.classList.add("alert");
    }
  });
});
