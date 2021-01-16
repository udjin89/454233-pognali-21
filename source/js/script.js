// Вычесление длинны "прогресс бара", смещения stoke dash
console.log("start script");
const svgEl = document.querySelectorAll(".level__progress-bar"); // ищем все элементы с уровнем
svgEl.forEach((svg) => { // цикл
  const circle = document.getElementById("circle"); // svg c тегом "circle"
  const dashArray = circle.getTotalLength(); // возвращает длинну circle
  const percentFill = svg.dataset.percent; // берем процент из html разметки, атрибут data-percent="97"
  const percent = (dashArray / 100) * (100 - percentFill); // вычисление смещения
  svg.style.strokeDasharray = dashArray; // задаем длину  stroke svg
  svg.style.strokeDashoffset = percent; // смещение
  console.log(percent);
});
// ++++  Открытие меню ++++

const toggleButton = document.querySelector(".toogle");
const menu = document.querySelector(".menu");

if (toggleButton) {
  console.log("toggle button find \n");

  toggleButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click toggleButton");

    const logoLight = menu.querySelector(".logo--light");
    const logoDark = menu.querySelector(".logo--dark");

    if (!toggleButton.classList.contains("toggle--close")) {
      toggleButton.classList.remove("toggle--open");
      toggleButton.classList.add("toggle--close");
      menu.classList.remove("menu--open");
      menu.classList.add("menu--close");

      if (logoLight && logoDark) {
        logoLight.classList.add("hidden");
        logoDark.classList.remove("hidden");
      }
      console.log("Close menu");
    }
    else { // Открываем меню
      toggleButton.classList.remove("toggle--close");
      toggleButton.classList.add("toggle--open");
      menu.classList.remove("menu--close");
      menu.classList.add("menu--open");

      if (logoLight && logoDark) {
        logoDark.classList.add("hidden");
        logoLight.classList.remove("hidden");
      }
      console.log("Open menu");
    }
  });
}
// +++++++++ Модальное окно+++++++++
const modalBusiness = document.querySelector(".modal--business-tariff");
const showButtonTariff = document.querySelector(".show-business-tariff");
if (modalBusiness) {
  const closeButtonTariff = modalBusiness.querySelector(".close-tariff");

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!modalBusiness.classList.contains("hidden")) {
        evt.preventDefault();
        modalBusiness.classList.add("hidden");
        modalBusiness.classList.remove("modal-show");
      }
    }
  });

  showButtonTariff.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click showButtonTariff");
    modalBusiness.classList.remove("hidden");
    modalBusiness.classList.add("modal-show");
    console.log("Show Tariff");
  });

  closeButtonTariff.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Click closeButtonTariff");
    modalBusiness.classList.add("hidden");
    modalBusiness.classList.remove("modal-show");
    console.log("Add class hidden");
  });
}