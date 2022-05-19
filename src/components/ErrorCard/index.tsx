import { Link } from 'wouter'

export default function ErrorCard() {
	return (
		<div className='m-auto py-16 h-[55.8rem] flex items-center justify-center'>
			<div className='bg-white shadow overflow-hidden sm:rounded-lg pb-8'>
				<div className='border-t border-gray-200 text-center pt-8'>
					<h1 className='text-9xl font-bold text-blue-400'>404</h1>
					<h1 className='text-6xl font-medium py-8'>Página no encontrada</h1>
					<p className='text-2xl pb-8 px-12 font-medium'>
						¡Uy! La página que busca no existe. Puede que haya sido movida o
						eliminada
					</p>
					<Link to='/home'>
						<button className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-blue-500 hover:to-purple-400 text-white font-semibold px-6 py-3 rounded-md mr-6'>
							HOME
						</button>
					</Link>
					<Link to='/'>
						<button className='bg-gradient-to-r from-red-300 to-red-500 hover:from-red-500 hover:to-red-300 text-white font-semibold px-6 py-3 rounded-md'>
							Contact Us
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
