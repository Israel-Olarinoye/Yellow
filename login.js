document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'Yellow' && password === 'Tinylegs') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        // Redirect to index.html
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});
