import { useContext, useEffect, useRef, useState } from 'react'
import LandingCards from '../components/LandingCards'
import ScrollDownButton from '../components/ScrollDownButton'
import ThemeContext from '../context/ThemeContext'
import { getMarcas } from '../services/marcaService'

export default function LandigPage() {
	const { theme } = useContext(ThemeContext)
	const [showButton, setShowButton] = useState(false)
	const messagesEndRef = useRef<any>(null)
	const [lastBrands, setLastBrands] = useState([])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 800) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		})
		getMarcas().then(lastBrands => {
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
				className={`${theme} bg-[url('assets/images/Landing/pexels-maria-geller-2127040.jpg')] bg-no-repeat bg-cover h-screen opacity-90`}
			>
				<div className='py-40 flex justify-center'>
					<div className='items-center md:flex'>
						<div className='mx-auto'>
							<h3 className='text-5xl font-bold text-[#FF9098] hover:text-[#FF081A]'>
								Tu museo de coches,
								<br />{' '}
								<span className='text-[#D3FFCC]'>a tan solo un clic</span>
							</h3>
							<p className='max-w-md mt-4 font-semibold text-[#FF9098] hover:text-[#FF081A] text-justify'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<div className='flex justify-center'>
								<button
									type='button'
									className='block mt-4  text-[#78FF63]  hover:text-[#FF3846] bg-[#FF3846] hover:bg-[#78FF63] active:bg-[#FF3846] active:text-[#78FF63]
								active:duration-150 hover:duration-300
								font-medium rounded-lg text-lg px-16 py-3  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800'
								>
									Acceder
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-rows-1 grid-flow-col gap-4 justify-center'>
					<button onClick={scrollToBot} className='mt-64 hover:scale-125'>
						<ScrollDownButton />
					</button>
				</div>
			</section>

			<section className={`${theme}`} ref={messagesEndRef}>
				<div className='bg-[#FFCCCF] dark:bg-gray-400'>
					<div className='max-w-5xl px-6 py-16 mx-auto'>
						<div className='items-center md:flex md:space-x-6'>
							<div className='md:w-1/2'>
								<h3 className='text-2xl font-semibold text-gray-800'>
									Lorem ipsum dolor sit <br /> amet, consectetur
								</h3>
								<p className='max-w-md mt-4 text-gray-600'>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
								</p>
							</div>

							<div className='mt-8 md:mt-0 md:w-1/2'>
								<div className='flex items-center justify-center'>
									<div className='max-w-md'>
										<img
											className='object-cover object-center w-full rounded-md shadow h-[500px]'
											src='src\assets\images\Landing\pexels-maria-geller-2127017.jpg'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{showButton && (
						<button
							onClick={scrollToTop}
							className='back-to-top rounded-full bg-[#FF3846] hover:scale-125 hover:bg-[#FF9098]'
						>
							<img
								src='src/assets/images/Landing/svg/arrow-drop-up.svg'
								alt=''
							/>
						</button>
					)}
				</div>
			</section>

			<section className={`${theme}`}>
				<div className='bg-[#FF9098] dark:bg-gray-300'>
					<div className='max-w-5xl px-6 py-16 mx-auto'>
						<div className='md:flex md:justify-between'>
							<h2 className='text-3xl font-semibold text-gray-800'>
								Ultimos modelos añadidos
							</h2>
						</div>

						{/* CREATE COMPONENT */}
						<div className='grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
							<div className='px-6 py-8 overflow-hidden bg-white rounded-md shadow-md'>
								<h2 className='text-xl font-medium text-gray-800'>Test</h2>
								<p className='max-w-md mt-4 text-gray-400'>
									Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam
									ac volutpat, viverra magna risus aliquam massa.
								</p>
							</div>
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
