import { useContext, useEffect, useState } from 'react'
import ModelCard from '../components/ModelCard'

import Spinner from '../components/Spinner'
import ThemeContext from '../context/ThemeContext'
import { getModelos } from '../services/modeloService'
import { ModeloCard } from '../types'

export default function ModelsPage() {
	const { theme } = useContext(ThemeContext)
	const [models, setModels] = useState<any>([])
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
		getModelos().then(model => {
			console.log(model)
			setModels(model)
			setPagination(model)
		})
	}, [setModels, page])

	return (
		<section className={`${theme}`}>
			<div className='bg-[#FFCCCF] dark:bg-gray-400 h-full lg:h-screen'>
				<div className='flex justify-center pt-10'>
					<h1 className='text-3xl'>Modelos</h1>
				</div>
				{loading ? (
					<Spinner />
				) : (
					<article>
						<div className='grid lg:grid-cols-4 sm:grid-cols-2 p-6 gap-6 justify-items-center items-center'>
							{models.map(({ id, model_name, make_id, make }: ModeloCard) => (
								<ModelCard
									key={id}
									id={id}
									modelName={model_name}
									makeId={make_id}
									make={make.make_name}
								/>
							))}
						</div>
					</article>
				)}

				{models.length > 1 ? (
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
									setPage(page - 1)
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
									setPage(page + 1)
									loadingTime()
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
