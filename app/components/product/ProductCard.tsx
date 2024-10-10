import { IProduct } from "@/app/interface";
import { formatPrice } from "@/app/libs/utils";
import Image from "next/image";
import React from "react";

export const ProductPrice = ({ product }: { product: IProduct }) => {
	return (
		<>
			{product.sale_price ? (
				<div className="product-price flex gap-2 font-semibold">
					<div className="regular-price text-black/50 line-through">
						{formatPrice(product.price)}
					</div>
					<div className="sale-price text-primary font-semibold">
						{formatPrice(product.sale_price)}
					</div>
				</div>
			) : (
				<div className="product-price font-semibold">
					<div className="regular-price">{product.price}</div>
				</div>
			)}
		</>
	);
};

export default function ProductCard({ product }: { product: IProduct }) {
	return (
		<div className="product-card flex flex-col gap-4 justify-between">
			<div className="product-image">
				<a className="image-wrapper" href={`/products/${product.id}`}>
					<Image
						src={product.image}
						alt={product.name}
						width={312}
						height={400}
						className="product-image object-cover aspect-[312/400]"
					/>
				</a>
			</div>
			<h3 className="product-name text-lg">
				<a
					className="product-link alink hover:text-primary"
					href={`/products/${product.id}`}
				>
					{product.name}
				</a>
			</h3>
			<div className="product-info flex justify-between">
				<div className="product-brand text-black/50">{product?.brand?.name}</div>
				<ProductPrice product={product} />
			</div>
		</div>
	);
}
