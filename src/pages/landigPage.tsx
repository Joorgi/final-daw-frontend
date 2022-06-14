import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'
import LandingCards from '../components/LandingBrandCards'
import LandingModelCard from '../components/LandingModelCards'
import ScrollDownButton from '../components/ScrollBottomButton'
import ThemeContext from '../context/ThemeContext'
import { getTopThreeMarcas } from '../services/marcaService'
import { getTopThreeModelos } from '../services/modeloService'
import landingImg from './../assets/images/pexels-maria-geller-2127017.jpg'
import arrow from './../assets/images/arrow-drop-up.svg'

export default function LandigPage() {
	const { theme } = useContext(ThemeContext)
	const [showButton, setShowButton] = useState(false)
	const messagesEndRef = useRef<any>(null)
	const [lastBrands, setLastBrands] = useState([])
	const [lastModels, setLastModels] = useState([])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 800) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		})
		getTopThreeModelos().then(lastModels => {
			setLastModels(lastModels)
		})
		getTopThreeMarcas().then(lastBrands => {
			setLastBrands(lastBrands)
		})
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const scrollToBot = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<>
			<section
				className={`${theme} bg-[url('assets/images/pexels-maria-geller-2127040.jpg')] bg-no-repeat bg-cover h-screen opacity-90`}
			>
				<div className='py-40 flex justify-center'>
					<div className='items-center pt-44'>
						<div className='mx-auto'>
							<h3 className='cursor-default text-5xl text-center sm:text-center md:text-justify font-bold text-[#FF9098] hover:text-[#FF081A] dark:text-[#9092ff] dark:hover:text-[#3e41ff]'>
								Tu museo de coches,
								<br />{' '}
								<span className='text-[#D3FFCC]'>a tan solo un clic</span>
							</h3>
							<div className='flex justify-center'>
								<Link to='/marcas'>
									<button
										type='button'
										className='block mt-16  text-[#78FF63]  hover:text-[#FF3846] bg-[#FF3846] hover:bg-[#78FF63] active active:text-[#78FF63] active:duration-150 hover:duration-300 font-medium rounded-lg text-lg px-16 py-3  dark:bg-[#9092ff] dark:hover:bg-[#3e41ff]'
									>
										Acceder
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-rows-1 justify-center'>
					<button
						onClick={scrollToBot}
						className='absolute left-[43%] sm:left-[46.7%] lg:left-[47.7%] xl:left-[49%] top-[95%] hover:scale-125'
					>
						<ScrollDownButton />
					</button>
				</div>
			</section>

			<section className={`${theme}`} ref={messagesEndRef}>
				<div className='bg-[#FFCCCF] dark:bg-gray-400'>
					<div className='max-w-5xl px-6 py-16 mx-auto'>
						<div className='items-center md:flex md:space-x-6'>
							<div className='md:w-1/2'>
								<h3 className='text-2xl font-semibold text-gray-800 text-center sm:text-center md:text-center'>
									Sobre nosotros: <br />
								</h3>
								<p className='max-w-lg text-xl mt-4 text-gray-600 text-justify sm:text-justify md:text-justify'>
									Decidimos crear este sitio web para que toda la gente
									aficionada a los coches tuviesen en un mismo lugar, un sitio
									donde poder consultar información de cualquier marca, y de
									cualquier modelo. Tenemos a los mejores especialistas buscando
									nuevas marcas y modelos de manera frecuente, así que
									garantizamos que podemos mantener toda la información
									actualizada.
								</p>
							</div>

							<div className='mt-8 md:mt-0 md:w-1/2'>
								<div className='flex items-center justify-center'>
									<div className='max-w-md'>
										<img
											className='object-cover object-center w-full rounded-md shadow h-[500px]'
											src={landingImg}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{showButton && (
						<button
							onClick={scrollToTop}
							className='back-to-top rounded-full bg-[#FF3846] dark:bg-[#9092ff] dark:hover:bg-[#3e41ff] hover:scale-125 hover:bg-[#FF9098]'
						>
							<img src={arrow} alt='arrow' />
						</button>
					)}
				</div>
			</section>

			<section className={`${theme}`}>
				<div className='bg-[#FF9098] dark:bg-gray-300'>
					<div className='max-w-5xl px-6 py-16 mx-auto text-center'>
						<h2 className='text-3xl font-semibold text-gray-800'>
							Ultimos modelos añadidos
						</h2>

						{/* CREATE COMPONENT */}
						<div className='grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
							{lastModels.map(({ id, model_name, make }: any) => (
								<LandingModelCard
									key={id}
									id={id}
									modelName={model_name}
									makeName={make}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={`${theme}`}>
				<div className='bg-[#FFCCCF] dark:bg-gray-400'>
					<div className='max-w-5xl px-6 py-16 mx-auto text-center'>
						<h2 className='text-3xl font-semibold text-gray-800'>
							Ultimas marcas añadidas
						</h2>
						<div className='grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3'>
							{lastBrands.map(({ id, make_name, make_img, make_date }: any) => (
								<LandingCards
									key={id}
									id={id}
									brandImage={make_img}
									brandName={make_name}
									brandYear={make_date}
									totalModels={0}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
