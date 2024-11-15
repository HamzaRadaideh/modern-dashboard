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
}

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

btnPopupLogin.onclick = () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
}

btnPopupRegister.onclick = () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
}

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
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