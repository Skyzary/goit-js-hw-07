function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = getRandomHexColor()
const changeBtn = document.querySelector('.change-color')
changeBtn.addEventListener('click', () => {
	const color = getRandomHexColor()
	document.body.style.backgroundColor = color;
	document.querySelector('.color').textContent = color
})
