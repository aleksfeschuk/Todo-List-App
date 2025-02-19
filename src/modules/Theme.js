export class Theme {
    static toggleTheme() {
        const body = document.body;
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    static loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark')
        }
    }
} 