import { useEffect, useState } from 'react'
import { Link } from 'wouter'

import { getMarcaWithModelsById } from '../../services/marcaService'
import { API_URL_IMAGES } from '../../services/settings'
import Spinner from '../Spinner'

export default function BrandModal(props: any) {
	const [brand, setBrand] = useState({
		make_name: '',
		make_img: '',
		models: [{ model_name: '' }],
	})

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
		})
	}, [setBrand])
	return loading ? (
		<Spinner />
	) : (
		<div
			id='defaultModal'
			tabIndex={-1}
			aria-hidden='true'
			className='overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 w-full h-modal md:h-full'
		>
			<div className='relative p-4 w-full max-w-7xl h-full md:h-auto  mx-auto top-16 motion-safe:hover:scale-105 hover:duration-300'>
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
					<div className='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600'>
						<h3 className='text-4xl font-medium text-gray-900 dark:text-white'>
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
						<img
							className='rounded-t-lg w-32 flex mx-auto'
							src={`${
								API_URL_IMAGES + brand.make_img.slice(6, brand.make_img.length)
							}`}
							alt=''
						/>

						<p className='text-lg text-justify leading-relaxed text-gray-500 dark:text-gray-400'>
							La Scuderia Ferrari comenzó a competir junto a pilotos y
							automóviles de Alfa Romeo y Fiat. La compañía comenzó a producir
							automóviles en serie en 1947. Se convirtió en Ferrari S.A. cuando
							en 1969 Fiat Group entró a ser parte del Consejo de Administración
							y se hizo accionista de la empresa.
						</p>
						<p className='text-lg text-justify leading-relaxed text-gray-500 dark:text-gray-400'>
							En 2013 Ferrari redujo expresamente su producción de automóviles a
							6922 unidades en su fábrica de Maranello. Esta cifra significó un
							5,4 % menos que el año anterior, a pesar de sacar un 5,4 % más de
							beneficios.
						</p>
						<p className='text-lg text-justify leading-relaxed text-gray-500 dark:text-gray-400'>
							En 2014 y tras la constitución de Fiat Chrysler Automóviles a
							nivel mundial, Ferrari alcanzó rentabilidad suficiente, lo que le
							permitió finalmente independizarse del paraguas de Fiat y comenzar
							a operar como una marca independiente. Aun así, la familia
							Agnelli-Elkann continúa siendo su principal propietaria, colocando
							a Ferrari directamente bajo la órbita del consorcio Exor. A su
							vez, conforma junto a su similar Maserati el grupo de marcas
							prémium dentro del grupo automovilístico italiano.
						</p>
					</div>
					<div className='grid lg:grid-cols-3 md:grid-cols-2 items-center text-center p-6  rounded-b border-t border-gray-200 dark:border-gray-600'>
						{brand.models.map(({ id, model_name }: any) => (
							<ul
								key={props.id}
								className='w-full px-4 py-2  dark:border-gray-600'
							>
								<Link
									to={`/modelo/${id}`}
									className='text-gray-700 dark:text-white hover:text-[#9FFF90] dark:hover:text-[#9FFF90]'
								>
									{model_name}
								</Link>
							</ul>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
