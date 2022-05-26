import { API_URL } from './settings'
import axios from 'axios'
import { Modelo } from '../types'

export const getModelos = async (pageNumber: number) => {
	try {
		const request = axios.get(API_URL + `/modelos?page=${pageNumber}`)
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getTopThreeModelos = async () => {
	try {
		const request = axios.get(API_URL + '/modelos/topthree')
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getModeloById = async (id: number) => {
	try {
		const request = axios.get(API_URL + `/modelo/${id}`)
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getModeloByName = async (name: string) => {
	try {
		const request = axios.get(API_URL + `/modelo/search/${name}`)
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getModelosWithImage = async () => {
	try {
		const request = axios.get(API_URL + '/modeloimagen')
		console.log()
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const getModeloWithImageById = async (id: number) => {
	try {
		const request = axios.get(API_URL + `/modeloimagen/${id}`)
		return request.then(response => response.data)
	} catch (error) {
		console.log(error)
	}
}

export const createModelo = async (modelo: Modelo) => {
	try {
		const { data } = await axios.post(API_URL + '/modelo/new', modelo)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const updateModelo = async (id: number, modelo: Modelo) => {
	try {
		const { data } = await axios.post(API_URL + `/modelo/${id}`, modelo)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const deleteModelo = async (id: number) => {
	try {
		await axios.delete(API_URL + `/modelo/${id}`)
		return true
	} catch (error) {
		console.log(error)
	}
}
