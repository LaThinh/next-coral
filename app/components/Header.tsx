// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderMenuNav from "./header/HeaderMenuNav";

export default function Header() {
	return (
		<header className="bg-c_black/5 z-50 sticky -top-20">
			<div className="container flex justify-between items-center border-b border-b-[#E3E3E3] min-h-20">
				<div className="header-search">Search</div>
				<div className="header-logo">
					<Link href="/" title="Coral">
						<Image src={`/images/logo.png`} width="180" height="34" alt="Coral" />
					</Link>
				</div>
				<div className="header-account">
					<ul className="flex items-center gap-4">
						<li className="flex items-center gap-2">
							<FontAwesomeIcon icon={faUser} className="w-4 h-4" />
							<a href="/account">Account</a>
						</li>
						<li className="flex items-center gap-2">
							<FontAwesomeIcon icon={faBagShopping} className="w-4 h-4" />
							<a href="/cart">Shopping</a>
						</li>
					</ul>
				</div>
			</div>

			<HeaderMenuNav />
		</header>
	);
}
