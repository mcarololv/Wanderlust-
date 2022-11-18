// Menu Mobile

const menuBars = document.querySelector("#menuBars");
const menuMobile = document.querySelector(".menu-mobile");

let menuAberto = false;

menuBars.addEventListener("click", () => {
    if(!menuAberto) {
        menuMobile.classList.add("active");
        return menuAberto = true;
    }
    menuMobile.classList.remove("active");
    return menuAberto = false;
})

// Caixas que abrem qndo vc clica
let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});