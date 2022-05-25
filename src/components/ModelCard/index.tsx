import { ModelProps } from '../../types'
import { Link } from 'wouter'

export default function ModelCard(props: ModelProps) {
	return (
		<Link
			to={`/modelo/${props.id}`}
			className='cursor-pointer hover:scale-125 hover:duration-300 w-72 h-auto p-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
		>
			<button className='flex justify-center mx-auto'></button>
			<div className='p-5'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{props.modelName}
				</h5>
				<p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>
					Marca: <span className='font-semibold'>{props.make}</span>
				</p>
			</div>
		</Link>
	)
}
