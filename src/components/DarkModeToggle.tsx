import { useDarkMode } from '../theme/DarkModeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
    const { theme, setTheme } = useDarkMode();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-2 px-3 py-1 border rounded-md text-sm text-primary font-semibold border-primary hover:bg-neutral-200 dark:hover:bg-primary dark:hover:text-zinc-900 transition flex items-center"
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
}
