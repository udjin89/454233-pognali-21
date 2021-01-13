console.log("start script");
const svgEl = document.querySelectorAll(".level__progress-bar"); // ищем все элементы с уровнем
svgEl.forEach((svg) => { // цикл
  const circle = document.getElementById("circle");
  const dashArray = circle.getTotalLength();
  const percentFill = svg.dataset.percent;
  const percent = (dashArray / 100) * (100 - percentFill);
  svg.style.strokeDasharray = dashArray;
  svg.style.strokeDashoffset = percent;
  console.log(percent);
});
