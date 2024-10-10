import Image from "next/image";
import React from "react";

export default function BannerZara() {
	return (
		<section className="home-section banner-zara bg-black relative aspect-square md:aspect-[12/8] lg:aspect-[1920/776] py-10">
			<Image
				src={"/images/background-banner.png"}
				fill
				alt="Zara background"
				className="absolute left-0 right-0 top-0 bottom-0 z-0 object-cover aspect-[1920/776]"
			/>

			<div className="zara-logo-background absolute right-0 top-10 z-10">
				<Image
					src={"/images/Zara_Logo.png"}
					width={732}
					height={309}
					alt="Zara Logo"
					className=""
				/>
			</div>
			<div className="container relative z-20 flex justify-end items-center h-full">
				<div className="banner-container flex flex-col gap-5 text-white items-center lg:items-start lg:max-w-[50%]">
					<Image
						src={"/images/Zara_Logo_2.png"}
						width={190}
						height={80}
						alt="Zara Logo"
					/>
					<p
						className="w-full max-w-[510px] font-light font-Roboto text-base text-center md:text-lg leading-5 
                    lg:text-left lg:text-[24px] lg:leading-10 tracking-wider capitalize"
					>
						Lustrous yet understated. The new evening wear collection exclusively
						offered at the reopened Giorgio Armani boutique in Los Angeles.
					</p>
					<a
						href="/collection"
						className="button px-6 py-4 bg-white text-black hover:bg-gray-300 rounded-md font-bold"
					>
						See Collection
					</a>
				</div>
			</div>
		</section>
	);
}
