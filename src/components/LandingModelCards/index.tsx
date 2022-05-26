import { Link } from 'wouter'

export default function LandingModelCard(props: any) {
	return (
		<Link to={`/modelo/${props.id}`}>
			<div className='px-6 py-7 overflow-hidden bg-white rounded-md shadow-md cursor-pointer hover:scale-110'>
				<h2 className='text-xl font-medium text-gray-800 text-center sm:text-center md:text-center'>
					{props.makeName.make_name}
				</h2>
				<p className='max-w-md mt-4 text-gray-400 text-center'>
					{props.modelName}
				</p>
			</div>
		</Link>
	)
}
