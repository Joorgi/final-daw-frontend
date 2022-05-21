import { API_URL_IMAGES } from '../../services/settings'
import { BrandProps } from '../../types'

export default function LandingCards(props: BrandProps) {
	return (
		<div>
			<img
				className='object-contain object-center w-full h-64 rounded-md'
				src={`${
					API_URL_IMAGES + props.brandImage.slice(6, props.brandImage.length)
				}`}
			/>
			<h3 className='mt-2 font-medium text-gray-700'>{props.brandName}</h3>
			<p className='text-sm text-gray-600'>{props.brandYear}</p>
		</div>
	)
}
