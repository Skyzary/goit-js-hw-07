const emailInput = document.querySelector('input[type="email"]');
console.log(emailInput)
const passwordInput = document.querySelector('input[type="password"]');
console.log(passwordInput)
const submitButton = document.querySelector('button[type="submit"]');
console.log(submitButton)
submitButton.addEventListener('click', (event) => {
	event.preventDefault();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	if (password === '' || email === ''){
		alert('All form fields must be filled in')
		
	}
	else console.log({email: email, password: password})



})
