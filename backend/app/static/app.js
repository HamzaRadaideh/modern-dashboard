const toggleButton = document.getElementById('toggle-btn');

const sidebar = document.getElementById('sidebar');

const wrapper = document.querySelector('.sign-wrapper');

const registerLink = document.querySelector('.register-link');

const loginLink = document.querySelector('.login-link');

const btnPopupLogin = document.querySelector('.btnLogin-popup');

const btnPopupRegister = document.querySelector('.btnRegister-popup');

const iconClose = document.querySelector('.icon-close');

loginLink.onclick = () => {
    wrapper.classList.remove('active');
    scrollToTopAndLock();
}

registerLink.onclick = () => {
    wrapper.classList.add('active');
    scrollToTopAndLock();
}

btnPopupLogin.onclick = () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
    scrollToTopAndLock();
}

btnPopupRegister.onclick = () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
    scrollToTopAndLock();
}

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    unlockScroll();
}

// New functions to handle scrolling behavior
function scrollToTopAndLock() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden'; // Lock scrolling
}

function unlockScroll() {
    document.body.style.overflow = ''; // Allow scrolling again
}


function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
    if (sidebar.classList.contains('close')) {
        toggleSidebar();
    }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    });
}



async function handleLogin(event) {
    event.preventDefault();
    const email = document.querySelector('.login input[type="email"]').value;
    const password = document.querySelector('.login input[type="password"]').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        alert(data.message);
        window.location.reload(); // Reload the page to update UI
    } else {
        alert(data.detail || 'Login failed');
    }
}

// Function to handle registration
async function handleRegister(event) {
    event.preventDefault();
    const fullName = document.querySelector('.register input[type="text"]').value;
    const email = document.querySelector('.register input[type="email"]').value;
    const password = document.querySelector('.register input[type="password"]').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ full_name: fullName, email, password })
    });

    if (response.ok) {
        alert(data.message);
        toggleToLogin(); // Switch to login form after successful registration
    } else {
        alert(data.detail || 'Registration failed');
    }
}

// Attach event listeners to forms
document.getElementById('login-form').addEventListener('submit', handleLogin);
document.getElementById('register-form').addEventListener('submit', handleRegister);

// Function to handle logout
function logout() {
    fetch('/logout', {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Logged out') {
                alert(data.message);
                window.location.reload(); // Reload the page to update UI
            } else {
                alert('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during logout.');
        });
}