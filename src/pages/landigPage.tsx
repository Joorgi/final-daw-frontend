export default function LandigPage() {
	return (
		<section className="bg-[url('assets/images/Landing/pexels-maria-geller-2127040.jpg')] bg-no-repeat bg-cover h-[56.8rem] opacity-90">
			<div className='py-40 flex justify-center'>
				<div className='items-center md:flex'>
					<div className='mx-auto'>
						<h3 className='text-5xl font-bold text-[#FF9098] hover:text-[#FF081A]'>
							Tu museo de coches,
							<br /> <span className='text-[#D3FFCC]'>a tan solo un clic</span>
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
		</section>
	)
}
