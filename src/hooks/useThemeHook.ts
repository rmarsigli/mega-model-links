import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const useThemeHook = (): { theme: Theme; toggleTheme: () => void } => {
	const [theme, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem('theme') as Theme
		if (savedTheme) {
			return savedTheme
		}

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		return prefersDark ? 'dark' : 'light'
	})

	const toggleTheme = (): void => {
		const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return { theme, toggleTheme }
}

export default useThemeHook