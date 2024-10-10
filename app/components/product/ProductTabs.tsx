"use client";

import { IProduct, IProductCategory } from "@/app/interface";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import { products } from "@/app/libs/products";
import ProductSlider from "./ProductSlider";

const categories: IProductCategory[] = [
	{
		id: 1,
		name: "T-Shirt",
		path: "t-shirt",
	},
	{
		id: 2,
		name: "hoodies",
		path: "Hoodies",
	},
	{
		id: 3,
		name: "Jacket",
		path: "jacket",
	},
];

export default function ProductTabs({ displayType }: { displayType?: "grid" | "slider" }) {
	const productLimit = 8;

	const [productData, setProductData] = useState<IProduct[]>(products.slice(0, productLimit));
	const [categorySelect, setCategorySelect] = useState(0);
	const [loading, setLoading] = useState(false);

	const handleChangeTab = (categoryId: number) => {
		// console.log("Change Category Id = " + categoryId);
		setLoading(true);
		setCategorySelect(categoryId);

		if (categoryId > 0) {
			setProductData(
				products.filter((p) => p.category_id === categoryId).slice(0, productLimit)
			);
		} else {
			setProductData(products.slice(0, productLimit));
		}

		setTimeout(function () {
			setLoading(false);
		}, 300);
	};

	return (
		<div className="product-tabs m-auto max-w-[1320px]">
			<ul className="tabs-title flex gap-5 capitalize my-6">
				<li key="all" className="tab-title">
					<a
						href="#tab-all"
						data-tab="description"
						onClick={() => handleChangeTab(0)}
						className={`product-tab ${
							categorySelect === 0 ? "selected font-bold" : ""
						}`}
					>
						All
					</a>
				</li>
				{categories.map((category) => (
					<li key={category.id} className="tab-title">
						<a
							href={`#tab-${category.path}`}
							data-tab="category"
							onClick={() => handleChangeTab(category.id)}
							className={`product-tab ${
								categorySelect === category.id ? "selected font-bold" : ""
							}`}
						>
							{category.name}
						</a>
					</li>
				))}

				<li className="filter hidden">
					<div className="filter">Filter</div>
				</li>
			</ul>

			<div className="tabs-content">
				<div className="tab-content">
					{loading ? (
						<div className="loading flex justify-center items-center min-h-[400px] text-xl">
							Loading ...{" "}
						</div>
					) : (
						<>
							{displayType && displayType === "slider" ? (
								<ProductSlider products={products} />
							) : (
								<ProductGrid products={productData} />
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
