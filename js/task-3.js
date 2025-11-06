const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
input.addEventListener('input', e =>{
	output.textContent = e.target.value.trim()
	if (input.value.trim() === ''){
		output.textContent = 'Anonymous'

	}

})