import Image from "next/image";
import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";

export default function Banner() {
	return (
		<div className="banner bg-c_black/5 relative">
			<Image
				src={"/images/banner-frame-1.png"}
				width="120"
				height="125"
				alt="Banner"
				className="banner-frame absolute left-0 bottom-10 z-[1]"
			/>

			<Image
				src={"/images/banner-frame-2.png"}
				width="215"
				height="326"
				alt="Banner"
				className="banner-frame absolute right-0 bottom-[20%] z-[1]"
			/>

			<div className="container py-10 lg:py-16 flex gap-10 justify-center items-center flex-col lg:flex-row lg:justify-between">
				<div className="banner-image w-1/2 lg:order-2 lg:mr-20 lg:max-w-[32%] flex justify-center items-center">
					<div className="banner-image-wrapper rounded-tl-[45%] rounded-br-[45%]  relative">
						<div className="border-shadow absolute z-10 top-4 left-4 -right-4 -bottom-4 rounded-tl-[48%] rounded-br-[48%] border border-gray-400"></div>
						<Image
							src={"/images/banner.png"}
							width="424"
							height="542"
							alt="Banner"
							className="banner-image relative z-20 aspect-[424/542] object-cover rounded-tl-[45%] rounded-br-[45%] "
						/>
					</div>
				</div>

				<div className="banner-content lg:order-1 flex flex-col gap-3 justify-center items-center lg:items-start">
					<h2 className="text-5xl lg:text-7xl font-Roboto font-light">Collection</h2>
					<p className="banner-description text-lg text-center lg:text-2xl lg:text-left font-Roboto font-normal capitalize">
						you can explore ans shop many differnt collection
						<br />
						from various barands here.
					</p>

					<a
						href="/category/1"
						className="button bg-black hover:bg-black/70 font-Roboto text-white text-2xl flex gap-3 items-center p-2 px-5"
					>
						<FontAwesomeIcon icon={faBagShopping} className="w-5 h-5" />
						<span>Shop Now</span>
					</a>
				</div>
			</div>
		</div>
	);
}
