import { useContext } from 'react'
import ContactForm from '../components/ContactForm'

import ThemeContext from '../context/ThemeContext'

export default function ContactPage() {
	const { theme } = useContext(ThemeContext)
	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-screen'>
				<ContactForm />
			</div>
		</section>
	)
}
