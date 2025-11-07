const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const form = document.querySelector('.login-form')
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	if (password === '' || email === ''){
		alert('All form fields must be filled in')
		
	}
	else{
		console.log({email: email, password: password})
		form.reset()

	}



})
