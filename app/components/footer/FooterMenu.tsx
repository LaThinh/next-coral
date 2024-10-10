import { IMenu } from "@/app/interface";
import React from "react";

export default function FooterMenu({ title, menus }: { title: string; menus: IMenu[] }) {
	return (
		<div className="footer-menu flex flex-col gap-6">
			<h5 className="menu-title font-bold text-black uppercase">{title}</h5>
			<ul className="flex flex-col gap-2">
				{menus.map((menu) => (
					<li key={menu.id} className="capitalize m-0">
						<a href={menu.link} className="alink text-sm">
							{menu.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
