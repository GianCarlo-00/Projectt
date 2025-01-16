document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginWrapper = document.querySelector('.form-wrapper');
    const registerWrapper = document.getElementById('register-container');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginWrapper.classList.add('hidden');
        registerWrapper.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerWrapper.classList.add('hidden');
        loginWrapper.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Login successful! Role: ${data.role}`);
                window.location.href = data.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
            } else {
                const error = await response.text();
                alert(`Login failed: ${error}`);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred during login.');
        }
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const role = document.getElementById('register-role').value;

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, role }),
            });

            if (response.ok) {
                alert('Registration successful! Please login.');
                registerWrapper.classList.add('hidden');
                loginWrapper.classList.remove('hidden');
            } else {
                const error = await response.text();
                alert(`Registration failed: ${error}`);
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred during registration.');
        }
        function redirectToLogin() {
            window.location.href = "admin_dashboard.html"; 
        }
    });
});
