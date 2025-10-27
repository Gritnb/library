document.getElementById('theme-toggle').addEventListener('click', setTheme)

function setTheme() {
    const root = document.documentElement;
    const dayIcon = document.getElementById('day-icon')
    const nightIcon = document.getElementById('night-icon')

    if (root.className === 'dark') {
        dayIcon.classList.add('icon-inactive')
        nightIcon.classList.remove('icon-inactive')
    } else {
        dayIcon.classList.remove('icon-inactive')
        nightIcon.classList.add('icon-inactive')
    }

    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}
