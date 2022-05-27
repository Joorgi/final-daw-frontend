import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { getModeloWithImageById } from '../../services/modeloService'
import { API_URL_IMAGES } from '../../services/settings'

export default function ModelModal(props: any) {
	const [contador, setContador] = useState(0)
	const [model, setModel] = useState({
		id: 0,
		model_name: '',
		model_power: 0,
		model_weight: 0,
		model_par: 0,
		model_description: '',
		images: [{ img_route: '' }],
	})
	useEffect(() => {
		getModeloWithImageById(props.id).then(modelo => {
			setModel(modelo)
			console.log(modelo)
		})
	}, [setModel, contador])
	return (
		<div
			id='extralarge-modal'
			tabIndex={-1}
			className='overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 w-full h-modal md:h-full'
		>
			<div className='relative p-4 w-full max-w-7xl h-full md:h-auto  mx-auto top-16 motion-safe:hover:scale-105 hover:duration-300'>
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
					<div className='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600'>
						<h3 className='text-xl font-medium text-gray-900 dark:text-white'>
							{model.model_name}
						</h3>
						<button>
							<Link
								to='/modelos'
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
						{model.images[contador] ? (
							<div id='default-carousel' className='relative'>
								<div className='overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96'>
									<div className='duration-700 ease-in-out'>
										<span className='absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800'></span>
										<img
											src={`${
												API_URL_IMAGES +
												model.images[contador]?.img_route.slice(
													6,
													model.images[contador]?.img_route.length
												)
											}`}
											className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
											alt={`imagene modelo ${model.model_name}`}
										/>
									</div>
								</div>

								<button
									type='button'
									onClick={() => {
										setContador(contador - 1)
										if (contador <= 0) {
											setContador(model.images.length - 1)
										}
									}}
									className='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
								>
									<span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#FF9098] dark:bg-[#9092ff] group-hover:bg-[#FF3846] dark:group-hover:bg-[#9092ff]'>
										<svg
											className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M15 19l-7-7 7-7'
											></path>
										</svg>
									</span>
								</button>
								<button
									type='button'
									onClick={() => {
										if (contador >= model.images.length - 1) {
											setContador(0)
										} else {
											setContador(contador + 1)
										}
									}}
									className='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
								>
									<span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#FF9098] dark:bg-[#9092ff] group-hover:bg-[#FF3846] dark:group-hover:bg-[#9092ff]'>
										<svg
											className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M9 5l7 7-7 7'
											></path>
										</svg>
									</span>
								</button>
							</div>
						) : null}
						<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
							{model.model_description}
						</p>
					</div>

					<div className='grid lg:grid-cols-3 md:grid-cols-2 items-center text-center p-6  rounded-b border-t border-gray-200 dark:border-gray-600'>
						<ul className='w-full px-4 py-2  dark:border-gray-600'>
							CV
							<li className='text-gray-700 dark:text-white hover:text-[#9FFF90] dark:hover:text-[#9FFF90]'>
								{model.model_power}
							</li>
						</ul>
						<ul className='w-full px-4 py-2  dark:border-gray-600'>
							Peso
							<li className='text-gray-700 dark:text-white hover:text-[#9FFF90] dark:hover:text-[#9FFF90]'>
								{model.model_weight} Kg
							</li>
						</ul>
						<ul className='w-full px-4 py-2  dark:border-gray-600'>
							Par máximo
							<li className='text-gray-700 dark:text-white hover:text-[#9FFF90] dark:hover:text-[#9FFF90]'>
								{model.model_par} Nm
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
