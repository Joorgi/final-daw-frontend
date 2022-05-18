import { createContext, useEffect, useState } from 'react'

// ¡Ahora haremos el valor de theme más estricto!
export type Theme = 'light' | 'dark'
export type ThemeContextValue = {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
	theme: 'light',
	toggleTheme: () => {},
})

export function ThemeContextProvider({ children }: { children: any }) {
	// Inicializamos el state por medio de una función, haciendo que su
	// valor inicial dependa del almacenado en localStorage si existe
	const [theme, setTheme] = useState<Theme>(() => {
		const initialTheme = window.localStorage.getItem('colorTheme') as Theme
		return initialTheme || 'light'
	})

	// Cada vez que theme cambie, lo almacenamos en localStorage para siguientes recargas
	useEffect(() => {
		window.localStorage.setItem('colorTheme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeContext
