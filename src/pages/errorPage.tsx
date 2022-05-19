import { useContext } from 'react'
import ErrorCard from '../components/ErrorCard'
import ThemeContext from '../context/ThemeContext'

export default function ErrorPage() {
	const { theme } = useContext(ThemeContext)
	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400'>
				<ErrorCard />
			</div>
		</section>
	)
}
