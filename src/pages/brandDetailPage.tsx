import { useContext } from 'react'
import BrandModal from '../components/BrandModal'
import ThemeContext from '../context/ThemeContext'

export default function BrandDetailPage(props: any) {
	const { theme } = useContext(ThemeContext)
	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-screen'>
				<BrandModal id={props.id} />
			</div>
		</section>
	)
}
