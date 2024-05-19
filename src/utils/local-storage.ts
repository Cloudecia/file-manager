const USER_LOCALSTORAGE_KEY = "CLOUDECIA";

export function getStoredLoginData() {
    const storedLoginData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    try {
        const storedLoginData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        return JSON.parse(storedLoginData);

    } catch (error) {
        return null
    }
}

export function setStoredLoginData(loginData) {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(loginData))
}

export function clearStoredLoginData() {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY)
}