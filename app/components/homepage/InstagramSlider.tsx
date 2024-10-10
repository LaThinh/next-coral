"use client";

import Image from "next/image";
import React from "react";
import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface InstaPost {
	id: string;
	image: string;
	url: string;
}
const instaPosts: InstaPost[] = [
	{
		id: "1",
		image: "/images/img/06.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "2",
		image: "/images/img/07.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "3",
		image: "/images/img/09.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "4",
		image: "/images/img/05.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "5",
		image: "/images/img/08.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "6",
		image: "/images/img/10.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "7",
		image: "/images/img/18.png",
		url: "https://www.instagram.com/",
	},
	{
		id: "8",
		image: "/images/img/19.png",
		url: "https://www.instagram.com/",
	},
];

export default function InstagramSlider() {
	return (
		<div className="instagram-slider mx-auto my-10 max-w-[1300px]">
			<Swiper
				modules={[Navigation, Scrollbar, FreeMode]}
				spaceBetween={20}
				freeMode
				slidesPerView={2}
				slidesPerGroup={2}
				navigation
				grabCursor={true}
				breakpoints={{
					600: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					800: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1024: {
						slidesPerView: 5,
						slidesPerGroup: 5,
					},
					1280: {
						slidesPerView: 6,
						slidesPerGroup: 6,
					},
				}}
				className="px-8 product-slider"
			>
				{instaPosts.map((post) => (
					<SwiperSlide key={post.id} className="w-52 flex justify-center ">
						<a href={post.url} className="image-wrapper">
							<Image
								className="w-full object-cover aspect-square"
								src={post.image}
								width={200}
								height={200}
								alt={`Instagram ${post.id}`}
							/>
						</a>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
