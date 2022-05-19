import { useContext, useState } from 'react'
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

const buttonSvg = (isView: boolean) => {
	if (isView) {
		return (
			<svg
				className='w-6 h-6'
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
			</svg>
		)
	}
	return (
		<svg
			className='w-6 h-6'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'></path>
		</svg>
	)
}

export default function Navbar() {
	const { theme } = useContext(ThemeContext)
	const [view, setView] = useState(true)

	return (
		<header className={`${theme}`}>
			<nav
				className={`bg-[#FF3846] border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800`}
			>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link to='/' className='flex items-center'>
						<span className='self-center text-2xl font-semibold whitespace dark:text-white cursor-pointer uppercase hover:scale-150 hover:duration-200'>
							Museucar
						</span>
					</Link>
					<div className='flex md:order-2'>
						<ThemeSwitcher />
						<button
							data-collapse-toggle='mobile-menu'
							onClick={e => {
								e.preventDefault()
								view !== true ? setView(true) : setView(false)
							}}
							type='button'
							className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='mobile-menu'
							aria-expanded='false'
						>
							{buttonSvg(view)}
						</button>
					</div>
					<div
						className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='mobile-menu'
					>
						<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium'>
							<li>
								<ActiveLink href='/home'>Home</ActiveLink>
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
				</div>
			</nav>
		</header>
	)
}
