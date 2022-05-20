import { BrandProps } from '../../types'
import { API_URL_IMAGES } from '../../services/settings'

export default function BrandCard(props: BrandProps) {
	return (
		<div className='cursor-pointer hover:scale-125 hover:duration-300 w-56  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
			<button className='flex justify-center mx-auto'>
				<img
					className='rounded-t-lg w-44 pt-5 dark:bg-'
					src={`${
						API_URL_IMAGES + props.brandImage.slice(6, props.brandImage.length)
					}`}
					alt=''
				/>
				<h1>{}</h1>
			</button>
			<div className='p-5'>
				<a href='#'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{props.brandName}
					</h5>
				</a>
				<p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>
					Año: <span className='font-semibold'>{props.brandYear}</span>
					<br />
					Modelos: <span className='font-semibold'>{props.totalModels}</span>
				</p>
			</div>
		</div>
	)
}
