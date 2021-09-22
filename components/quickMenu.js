import { ThemeProvider } from './themeContext';
import { Toggle } from './themeToggle';
export const QuickMenu = ({ darkMode }) => {
    return (
        <div className="fixed bottom-0 right-0 bg-gray-300 shadow-lg dark:bg-gray-700 rounded-md z-50 mx-4 my-4">
                <div>
                    <Toggle />
                </div>
        </div>
    )
}