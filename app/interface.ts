export interface IMenu {
	id: number;
	title: string;
	link: string;
}

export interface IProduct {
	id: number;
	name: string;
	image: string;
	price: number;
	sale_price?: number;
	brand?: IBrand;
	label?: IProductLabel;
	category?: IProductCategory;
	category_id?: number;
}

export interface IProductLabel {
	id: number;
	label: string;
	color: string;
}

export interface IProductCategory {
	id: number;
	name: string;
	path: string;
}

// export interface IBranch {
// 	id?: number;
// 	name: string;
// 	slug: string;
// }

export interface IBrand {
	id: number;
	name: string;
	slug: string;
	image: string;
	position?: number;
}
