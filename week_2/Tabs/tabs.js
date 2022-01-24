const tabs = document.querySelectorAll("[tab-title]");
const tabContents = document.querySelectorAll("[tab-contents]");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    // console.log(tab.getAttribute("tab-title"));
    const target = tab.getAttribute("tab-title");
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    document.querySelector(target).classList.add("active");
    console.log(tab);
    tabs.forEach((tabComponent) => tabComponent.classList.remove("active"));
    tab.classList.add("active");
    console.log(tab);
  })
);
