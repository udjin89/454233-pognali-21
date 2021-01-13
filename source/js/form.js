
window.addEventListener(`resize`, event => {
  const addArrow = document.querySelectorAll(".button-next-step");
  if (screen.width > 768) {
    console.log(screen.width);
    for (let i = 0; i < addArrow.length; i++) {
      addArrow[i].classList.add("button-arrow");
    }
  }
  else {
    for (let i = 0; i < addArrow.length; i++) {
      addArrow[i].classList.remove("button-arrow");
    }
  }
}, false);
