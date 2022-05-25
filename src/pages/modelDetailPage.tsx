import { useContext } from 'react'
import ModelModal from '../components/ModelModal'
import ThemeContext from '../context/ThemeContext'

export default function ModelDetailPage(props: any) {
	const { theme } = useContext(ThemeContext)
	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-full lg:h-screen'>
				<ModelModal id={props.id} />
			</div>
		</section>
	)
}
