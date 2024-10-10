import { IProduct } from "@/app/interface";
import React from "react";
import ProductCard from "@components/product/ProductCard";

export default function ProductGrid({ products }: { products: IProduct[] }) {
	return (
		<div className="product-grid grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
