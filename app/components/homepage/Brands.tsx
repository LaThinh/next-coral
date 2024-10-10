"use client";

import { IBrand } from "@/app/interface";
import { brands } from "@/app/libs/brands";
import React from "react";
import { A11y, FreeMode, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
	const brandData: IBrand[] = brands;
	return (
		<section className="home-section section-brands my-10">
			<div className="container py-5 px-0">
				<div className="brand-slider">
					<Swiper
						modules={[Navigation, Scrollbar, FreeMode, A11y]}
						spaceBetween={20}
						freeMode
						slidesPerView={2}
						slidesPerGroup={2}
						navigation
						grabCursor={true}
						// scrollbar={{ draggable: true }}
						//onSwiper={(swiper) => console.log(swiper)}
						//onSlideChange={() => console.log("slide change")}
						breakpoints={{
							768: {
								slidesPerView: 3,
								slidesPerGroup: 3,
							},
							920: {
								slidesPerView: 4,
								slidesPerGroup: 4,
							},
							1228: {
								slidesPerView: 5,
								slidesPerGroup: 5,
							},
						}}
						className="px-8 brand-slider"
					>
						{brandData.map((brand) => (
							<SwiperSlide key={brand.id} className="w-52 flex justify-center ">
								<Link
									href={`/brand/${brand.slug}`}
									className="flex leading-none hover:bg-slate-200/50 rounded-full p-1"
									title={`View Brand ${brand.name}`}
								>
									<Image
										src={brand.image}
										alt={brand.image}
										width={200}
										height={70}
										className="m-auto"
									/>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
