document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    });

    const message = document.getElementById('message');
    if (response.ok) {
        message.textContent = await response.text();
        message.style.color = 'green';
    } else {
        message.textContent = await response.text();
        message.style.color = 'red';
    }
});
