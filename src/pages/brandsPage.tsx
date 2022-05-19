import { useContext } from 'react'
import BrandsLogos from '../components/Logos'
import ThemeContext from '../context/ThemeContext'

export default function BrandsPage() {
	const { theme } = useContext(ThemeContext)

	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-screen'>
				<div className='flex justify-center pt-12'>
					<h1 className='text-2xl'>Marcas disponibles</h1>
				</div>
				<BrandsLogos />
			</div>
		</section>
	)
}
