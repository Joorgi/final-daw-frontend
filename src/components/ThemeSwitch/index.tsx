import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<button
			onClick={toggleTheme}
			type='button'
			className='text-white font-medium rounded-lg text-3xl px-5 py-2.5 text-center mr-3 md:mr-0 hover:motion-safe:animate-shake'
		>
			<span>{theme === 'dark' ? '🌞' : '🌚'}</span>
		</button>
	)
}
