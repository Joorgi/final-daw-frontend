import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<button onClick={toggleTheme}>
			<span>{theme === 'dark' ? '🌚' : '🌞'}</span>
		</button>
	)
}
