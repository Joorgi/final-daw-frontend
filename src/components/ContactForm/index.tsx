import { useState } from 'react'
import { sendMail } from '../../services/mailService'
import { Email } from '../../types'
import logo from './../../1.svg'

export default function ContactForm() {
	const [email, setEmail] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (event: any) => {
		setEmail(prevProps => ({
			...prevProps,
			[event.target.name]: event.target.value,
		}))
	}

	async function handleSubmit(event: any) {
		event.preventDefault()
		const emailForm: Email = {
			name: email.name,
			email: email.email,
			message: email.message,
		}
		sendMail(emailForm)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='hover:scale-110 hover:duration-300 w-full max-w-lg mx-auto p-9 block relative top-20 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
		>
			<div className='grid xl:grid-cols-1 xl:gap-6 justify-items-center items-center'>
				<img
					className='object-cover object-center w-full  h-[180px]'
					src={logo}
					alt=''
				/>
			</div>
			<div className='text-center pb-9'>
				<h1 className='mt-9 mb-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
					Contáctenos
				</h1>
				<p className='text-gray-400 dark:text-gray-400 text-justify'>
					Complete el siguiente formulario para enviarnos un mensaje con
					cualquier mejora que se le ocurra. ✍
				</p>
			</div>
			<div className='relative z-0 w-full mb-6 group'>
				<input
					type='text'
					name='name'
					id='name'
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#3e41ff] focus:outline-none focus:ring-0 focus:border-[#FF3846] peer'
					placeholder=' '
					onChange={handleChange}
				/>
				<label
					htmlFor='name'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF3846] dark:peer-focus:text-[#3e41ff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Nombre
				</label>
			</div>

			<div className='relative z-0 w-full mb-6 group'>
				<input
					type='email'
					name='email'
					id='email'
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#3e41ff] focus:outline-none focus:ring-0 focus:border-[#FF3846] peer'
					placeholder=' '
					onChange={handleChange}
				/>
				<label
					htmlFor='email'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF3846] dark:peer-focus:text-[#3e41ff] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Correo electrónico
				</label>
			</div>

			<div className='relative z-0 w-full mb-6 group'>
				<label
					htmlFor='message'
					className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF3846] peer-focus:dark:text-[#FF3846] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Tu mensaje:
				</label>

				<textarea
					id='message'
					name='message'
					className='block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#3e41ff] focus:outline-none focus:ring-0 focus:border-[#FF3846] peer'
					placeholder=''
					rows={4}
					onChange={handleChange}
				/>
			</div>

			<button
				type='submit'
				className='text-white bg-[#FF3846] hover:bg-[#FF9098] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#9092ff] dark:hover:bg-[#3e41ff]'
			>
				Enviar
			</button>
		</form>
	)
}
