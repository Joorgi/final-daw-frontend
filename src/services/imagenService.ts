import { API_URL } from './settings'
import axios from 'axios'
import { Imagen } from '../types'

export const getImagenes = async () => {
	try {
		const request = axios.get(API_URL + '/imagenes')
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getImagenById = async (id: number) => {
	try {
		const request = axios.get(API_URL + `/imagen/${id}`)
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const createImagen = async (imagen: Imagen) => {
	try {
		const { data } = await axios.post(API_URL + '/imagen/new', imagen)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const updateImagen = async (id: number, imagen: Imagen) => {
	try {
		const { data } = await axios.post(API_URL + `/imagen/${id}`, imagen)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const deleteImagen = async (id: number) => {
	try {
		await axios.delete(API_URL + `/imagen/${id}`)
		return true
	} catch (error) {
		console.log(error)
	}
}
