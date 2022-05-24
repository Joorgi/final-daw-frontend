import { ModelProps } from '../../types'
import { Link } from 'wouter'

export default function ModelCard(props: ModelProps) {
	return (
		<Link
			to={`/modelo/${props.id}`}
			className='cursor-pointer hover:scale-125 hover:duration-300 w-72 h-auto p-5 text-center  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
		>
			<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				{props.make}
			</h5>

			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
				{props.modelName}
			</p>
			<button
				className='inline-flex items-center py-2 px-3 text-sm font-medium text-center  text-[#78FF63]  hover:text-[#FF3846] bg-[#FF3846] hover:bg-[#78FF63] active:bg-[#FF3846] active:text-[#78FF63]
								active:duration-150 hover:duration-300
								 rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800'
			>
				Saber más
			</button>
		</Link>
	)
}
