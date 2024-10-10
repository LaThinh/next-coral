import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterMenu from "./footer/FooterMenu";
import { footerMenu1, footerMenu2, footerMenu3 } from "../libs/menus";
import FooterSocial from "./footer/FooterSocial";

export default function Footer() {
	return (
		<footer>
			<div className="footer-content pt-20 pb-10">
				<div className="container flex flex-col md:flex-row gap-10 justify-between">
					<div className="footer-info flex gap-5 flex-col w-full justify-between items-center md:items-start md:w-[24%] md:max-w-[300px]">
						<div className="footer-logo">
							<Link href="/" title="Coral">
								<Image
									src={`/images/logo.png`}
									width="180"
									height="34"
									alt="Coral"
								/>
							</Link>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
						</p>
						<ul className="footer-social">
							<FooterSocial />
						</ul>
					</div>
					<div className="footer-menus max-w-[800px] flex-1 flex flex-col sm:flex-row gap-5 sm:justify-between">
						<FooterMenu title="Catalog" menus={footerMenu1} />
						<FooterMenu title="About Us" menus={footerMenu2} />
						<FooterMenu title="Customer Services" menus={footerMenu3} />
					</div>
				</div>
			</div>
			<div className="footer-bottom bg-[#1E2832] text-white">
				<div className="container flex justify-between h-[52px] items-center">
					<div className="copyright">© 2022 Coral , Inc.</div>
					<div className="footer-payment">
						<Image
							src={`/images/icons_payment.png`}
							width="180"
							height="34"
							alt="Coral"
						/>
					</div>
					<div className="scroll-to-top">Scroll to top</div>
				</div>
			</div>
		</footer>
	);
}
