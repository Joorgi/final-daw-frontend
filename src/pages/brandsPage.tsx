import { useContext, useEffect, useState } from 'react'
import BrandCard from '../components/BrandCard'
import Spinner from '../components/Spinner'
import ThemeContext from '../context/ThemeContext'
import { getMarcasWithModels } from '../services/marcaService'
import { MarcaCard } from '../types'

export default function BrandsPage() {
	const { theme } = useContext(ThemeContext)
	const [brands, setBrands] = useState<any>([])
	const [pagination, setPagination] = useState<any>([])
	const [page, setPage] = useState<any>(1)
	const [loading, setLoading] = useState(false)

	const loadingTime = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 250)
	}

	useEffect(() => {
		loadingTime()
		getMarcasWithModels(page).then(brand => {
			setBrands(brand.data)
			setPagination(brand)
		})
	}, [setBrands, page])

	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-full lg:h-screen'>
				<div className='flex justify-center pt-10'>
					<h1 className='text-3xl'>Marcas</h1>
				</div>
				{loading ? (
					<Spinner />
				) : (
					<article>
						<div className='grid lg:grid-cols-4 sm:grid-cols-2 p-6 gap-6 justify-items-center items-center'>
							{brands.map(
								({ id, make_name, make_img, make_date, models }: MarcaCard) => (
									<BrandCard
										key={id}
										id={id}
										brandName={make_name}
										brandImage={make_img}
										brandYear={make_date}
										totalModels={models.length}
									/>
								)
							)}
						</div>
					</article>
				)}

				{brands.length > 1 ? (
					<div className='flex flex-col items-center bottom-11'>
						<span className='text-sm text-gray-700 dark:text-white'>
							Página{' '}
							<span className='font-semibold text-gray-900 dark:text-gray-900'>
								{pagination.current_page}
							</span>{' '}
							de{' '}
							<span className='font-semibold text-gray-900 dark:text-gray-900'>
								{pagination.last_page}
							</span>{' '}
							<span className='font-semibold text-gray-900 dark:text-gray-900 ml-5'>
								{pagination.total}
							</span>{' '}
							Resultados
						</span>

						<div className='inline-flex mt-2 xs:mt-0'>
							<button
								onClick={() => {
									if (page <= 1) {
										setPage(pagination.last_page)
									} else {
										setPage(page - 1)
									}
								}}
								className='inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
							>
								<svg
									className='mr-2 w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'></path>
								</svg>
								Prev
							</button>
							<button
								onClick={() => {
									if (page >= pagination.last_page) {
										setPage(1)
									} else {
										setPage(page + 1)
									}
								}}
								className='inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
							>
								Next
								<svg
									className='ml-2 w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'></path>
								</svg>
							</button>
						</div>
					</div>
				) : null}
			</div>
		</section>
	)
}
