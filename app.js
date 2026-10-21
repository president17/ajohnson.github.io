const themeButtons = document.querySelectorAll('.btn');
const themeIcon = document.querySelector('#theme-icon');
const savedTheme = localStorage.getItem('theme');

function setTheme(theme) {
    const isDarkTheme = theme === 'dark-theme';

    document.body.classList.toggle('light-theme', !isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);

    if (themeIcon) {
        themeIcon.src = isDarkTheme ? 'images/sun.svg' : 'images/moon.svg';
        themeIcon.alt = isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme';
    }
}

setTheme(savedTheme === 'dark-theme' ? 'dark-theme' : 'light-theme');

themeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const nextTheme = document.body.classList.contains('dark-theme')
            ? 'light-theme'
            : 'dark-theme';

        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
    });
});