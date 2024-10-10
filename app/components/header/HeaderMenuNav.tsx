"use client";

import React, { useEffect, useState } from "react";
import { menuData } from "@/app/libs/menus";
import Link from "next/link";

export default function HeaderMenuNav() {
	const [isScrolledPast100, setIsScrolledPast100] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolledPast100(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`header-nav hidden lg:flex py-2 ${
				isScrolledPast100 ? "py-3 bg-white/70 backdrop-blur-md shadow-xl" : "py-2"
			}`}
		>
			<div
				className={`container rounded-full transition-all ease-in-out ${
					isScrolledPast100 ? "bg-gray-200/5 backdrop-blur-md" : "bg-gray-700/0"
				}`}
			>
				<nav className="menu nav flex gap-4 justify-center flex-wrap xl:justify-between xl:flex-nowrap  list-none">
					{menuData.map((menu) => (
						<li key={menu.id} className="py-2">
							<Link href={`/category/${menu.url})`} className="alink">
								{menu.title}
							</Link>
						</li>
					))}
				</nav>
			</div>
		</div>
	);
}
