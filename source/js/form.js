
const addArrow = document.querySelectorAll(".button-next-step");
// +++++++++++++ Проверка размера экрана
let sizeWindow = window.innerWidth;
console.log("Size Window =" + sizeWindow);
if (sizeWindow > 768) {
  // console.log("Size Window =" + sizeWindow);
  for (let i = 0; i < addArrow.length; i++) {
    addArrow[i].classList.add("button-arrow");
  }
}
else {
  for (let i = 0; i < addArrow.length; i++) {
    addArrow[i].classList.remove("button-arrow");
  }
}
// +++++++++++ добавление стрелочки при изменинии экрана
window.addEventListener(`resize`, event => {
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
//++++++ Выпадающая таблица со странами
const chose = document.querySelectorAll(".add-plan__item--select");
console.log("chose = " + chose[0]);
if (chose) {

  for (let i = 0; i < chose.length; i++) {
    // let removeButton = 0;
    let buttonCloseChose = chose[i].querySelector(".remove-country");

    // buttonCloseChose.addEventListener("click", function (evt) {
    //   evt.preventDefault();
    //   console.log("Click Remove Button \n");
    //   removeButton = 1;
    //   console.log("-> " + removeButton);
    //   if (1) {

    //   }
    //   else {

    //   }
    // });

    chose[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log("click chose country");
      if (!chose[i].classList.contains("add-plan__item--select-active")) {
        // modalMap.classList.remove("hidden");
        // buttonCloseChose.classList.add("hidden");
        chose[i].classList.add("add-plan__item--select-active");
      }
      else {
        // buttonCloseChose.classList.remove("hidden");
        chose[i].classList.remove("add-plan__item--select-active");
      }
    });

  }
}
