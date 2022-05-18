import { useContext } from 'react'
import { Link, useRoute } from 'wouter'
import ThemeContext from '../../context/ThemeContext'
import { ThemeSwitcher } from '../ThemeSwitch'
interface ActiveLinks {
	href: string
	children: string
}

const ActiveLink = (props: ActiveLinks) => {
	const [isActive] = useRoute(props.href)
	return (
		<Link {...props}>
			<a
				className={
					isActive
						? 'block py-2 pr-4 pl-3 text-white bg-[#9FFF90] rounded md:bg-transparent md:text-[#9FFF90] md:p-0 dark:text-white'
						: 'block py-2 pr-4 pl-3 text-gray-700 border-b rounded border-gray-100 hover:bg-[#D3FFCC] md:hover:bg-transparent md:border-0 md:hover:text-[#78FF63] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-green-400 md:dark:hover:bg-transparent dark:border-gray-700'
				}
			>
				{props.children}
			</a>
		</Link>
	)
}

export default function Navbar() {
	const { theme } = useContext(ThemeContext)
	return (
		<header className={`header-${theme}`}>
			<nav className={`bg-[#FF3846] ${theme} border-gray-200 px-4 py-4 sm:px-2 dark:bg-gray-800`}>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<a href='#' className='flex items-center'>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase hover:scale-150 hover:duration-200'>
							Museucar
						</span>
					</a>

					<button
						data-collapse-toggle='mobile-menu'
						type='button'
						className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-red-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
						aria-controls='mobile-menu'
						aria-expanded='false'
					>
						<svg
							className='w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
						</svg>
					</button>

					<div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
						<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium'>
							<li>
								<ActiveLink href='/'>Home</ActiveLink>
							</li>
							<li>
								<ActiveLink href='/marcas'>Marcas</ActiveLink>
							</li>
							<li>
								<ActiveLink href='/modelos'>Modelos</ActiveLink>
							</li>
							<li>
								<ActiveLink href='/contact'>Contact</ActiveLink>
							</li>
							<li>
								<ActiveLink href='/about'>About us</ActiveLink>
							</li>
						</ul>
					</div>
					<ThemeSwitcher />
				</div>
			</nav>
		</header>
	)
}
