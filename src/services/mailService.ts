import { API_URL } from './settings'
import axios from 'axios'
import { Email } from '../types'

export const sendMail = async (email: Email) => {
	try {
		const { data } = await axios.post(API_URL + '/send-mail', email)
		return data
	} catch (error) {
		console.log(error)
	}
}
