const registerForm = document.getElementById('formLogin');

console.log(registerForm);
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const email = document.getElementById('inputEmail').value;
  const username = document.getElementById('inputUsername').value;
  const password = document.getElementById('inputPassword').value;

  const response = await fetch('http://127.0.0.1:3000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });
  const data = await response.json();
  console.log(data);
});