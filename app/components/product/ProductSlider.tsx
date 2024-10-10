import { IProduct } from "@/app/interface";
import React from "react";
import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

export default function ProductSlider({ products }: { products: IProduct[] }) {
	return (
		<div className="product-slider">
			<Swiper
				modules={[Navigation, Scrollbar, FreeMode]}
				spaceBetween={20}
				freeMode
				slidesPerView={2}
				slidesPerGroup={2}
				navigation
				grabCursor={true}
				breakpoints={{
					800: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
				}}
				className="px-8 product-slider"
			>
				{products.map((product) => (
					<SwiperSlide key={product.id} className="w-52 flex justify-center ">
						<ProductCard product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
