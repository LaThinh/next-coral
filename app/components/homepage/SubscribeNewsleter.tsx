import React from "react";
import ProductTabs from "../product/ProductTabs";

export default function SubscribeNewsleter() {
	return (
		<section className="home-section section-subscribe-newsletter my-10 lg:my-20">
			<div className="container">
				<h3 className="section-title">Or subscribe to the newsletter</h3>
				<ProductTabs />
			</div>
		</section>
	);
}
