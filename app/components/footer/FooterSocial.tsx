import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSocial() {
	return (
		<div className="footer-social">
			<ul className="flex gap-4">
				<li className="flex items-center gap-2">
					<a href="https://www.facebook.com/" title="Facebook" target="_blank">
						<FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
					</a>
				</li>
				<li className="flex items-center gap-2">
					<a href="https://x.com/" title="Twitter" target="_blank">
						<FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
					</a>
				</li>
				<li className="flex items-center gap-2">
					<a href="https://www.linkedin.com/" title="LinkedIn" target="_blank">
						<FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
					</a>
				</li>
				<li className="flex items-center gap-2">
					<a href="https://www.instagram.com/" title="Instagram" target="_blank">
						<FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
					</a>
				</li>
			</ul>
		</div>
	);
}
