const changeThemeBtn = document.querySelector('#change-theme');

function toggleDarkTheme() {
    document.body.classList.toggle('dark');
};

changeThemeBtn.addEventListener('change', function() {

    toggleDarkTheme();

});