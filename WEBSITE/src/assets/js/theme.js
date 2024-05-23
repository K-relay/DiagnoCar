function getThemeFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'selectedthem') {
            return value;
        }
    }
    return null;
}

function setThemeCookie(theme) {
    document.cookie = `selectedthem=${theme}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
}

function deleteThemeCookie() {
    document.cookie = 'selectedthem=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function toggleTheme() {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-theme');


    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        htmlElement.setAttribute('data-theme', 'light');
        setThemeCookie('light');
    } else {
        htmlElement.removeAttribute('data-theme');
        htmlElement.setAttribute('data-theme', 'dark');
        setThemeCookie('dark');
    }

}

function handleLogout() {
    deleteThemeCookie();

}
function themfromcockie() {
    const htmlElement = document.querySelector('html');
    const themeFromCookie = getThemeFromCookie();
    htmlElement.removeAttribute('data-theme');
    htmlElement.setAttribute('data-theme', themeFromCookie);


}
themfromcockie();

export { themfromcockie, toggleTheme, handleLogout };
