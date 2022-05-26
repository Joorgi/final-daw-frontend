export interface Marca {
	makeName: string
	makeDate: Date
	makeImg: string
}

export interface Modelo {
	modelName: string
	makeId: number
	makeImg: number[]
}

export interface Imagen {
	img: string
}

export interface Email {
	name: string
	email: string
	message: string
}

export interface BrandProps {
	id: number
	brandName: string
	brandYear: number
	brandImage: string
	totalModels: number
}

export interface ModelProps {
	id: number
	modelName: string
	makeId: number
	make: { make_name: string }
}

export interface MarcaCard {
	id: number
	make_name: string
	make_img: string
	make_date: number
	models: { length: number }
}

export interface ModeloCard {
	id: number
	model_name: string
	make_id: number
	make: { make_name: any }
}
