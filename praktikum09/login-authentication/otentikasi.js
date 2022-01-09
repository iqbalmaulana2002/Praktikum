const formLogin = document.getElementById('formLogin')

formLogin.addEventListener('submit', function (e) {
	e.preventDefault()
	const username = document.getElementById('username').value
	const password = document.getElementById('password').value
	if (username == 'ahmad2017' && password == 'integrity') {
		alert('Login Sukses')
		location.href = 'login_success.html'
	} else {
		alert('Login Gagal, username atau password salah')
	}
})