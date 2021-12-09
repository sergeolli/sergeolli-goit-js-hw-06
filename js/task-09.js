function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const showColorSpan = document.querySelector('.color');



changeColorBtn.addEventListener('click', function () {
  const generalСolor = getRandomHexColor();
  showColorSpan.textContent = generalСolor;
  document.body.style.backgroundColor = generalСolor;
});
 









