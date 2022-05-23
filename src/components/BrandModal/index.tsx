import { useContext, useEffect, useState } from 'react'
import { Link } from 'wouter'
import ThemeContext from '../../context/ThemeContext'
import { getMarcaWithModelsById } from '../../services/marcaService'
import Spinner from '../Spinner'

export default function BrandModal(props: any) {
	const [brand, setBrand] = useState({
		make_name: '',
		models: [{ model_name: '' }],
	})
	const { theme } = useContext(ThemeContext)

	const [loading, setLoading] = useState(false)

	const loadingTime = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 250)
	}
	useEffect(() => {
		loadingTime()
		getMarcaWithModelsById(props.id).then(singleBrand => {
			setBrand(singleBrand)
			console.log(singleBrand)
		})
	}, [setBrand])
	return loading ? (
		<Spinner />
	) : (
		<section className={`${theme} overflow-hidden`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-screen overflow-hidden'>
				<div
					id='defaultModal'
					tabIndex={-1}
					aria-hidden='true'
					className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-modal md:h-full bg-[rgb(0,0,0,.7)]'
				>
					<div className='relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto top-52'>
						<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
							<div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
									{brand.make_name}
								</h3>
								<button>
									<Link
										to='/marcas'
										className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
									>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clipRule='evenodd'
											></path>
										</svg>
									</Link>
								</button>
							</div>

							<div className='p-6 space-y-6'>
								<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
									With less than a month to go before the European Union enacts
									new consumer privacy laws for its citizens, companies around
									the world are updating their terms of service agreements to
									comply.
								</p>
							</div>

							<ul className='w-48 text-sm font-medium text-gray-900  dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
								<span className='pl-2'>Modelos:</span>
								{brand.models.map(({ id, model_name }: any) => (
									<li
										key={props.id}
										className='w-full px-4 py-2  dark:border-gray-600'
									>
										<Link
											to={`modelo/${id}`}
											className='text-gray-700 dark:text-white hover:text-[#9FFF90] dark:hover:text-[#9FFF90]'
										>
											{model_name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
