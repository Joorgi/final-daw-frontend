import { API_URL } from './settings'
import axios from 'axios'
import { Marca } from '../types'

export const getMarcas = async () => {
	try {
		const request = axios.get(API_URL + '/marcas')
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getMarcaById = async (id: number) => {
	try {
		const request = axios.get(API_URL + `/marca/${id}`)
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const createMarca = async (marca: Marca) => {
	try {
		const { data } = await axios.post(API_URL + '/marca/new', marca)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const updateMarca = async (id: number, marca: Marca) => {
	try {
		const { data } = await axios.post(API_URL + `/marca/${id}`, marca)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const deleteMarca = async (id: number) => {
	try {
		await axios.delete(API_URL + `/marca/${id}`)
		return true
	} catch (error) {
		console.log(error)
	}
}
