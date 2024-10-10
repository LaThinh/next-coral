import React from "react";
import ProductTabs from "../product/ProductTabs";

export default function BestSellerProduct() {
	return (
		<section className="home-section section-subscribe-newsletter my-10 lg:my-20">
			<div className="container">
				<h3 className="section-title">Best sellers</h3>
				<ProductTabs displayType="slider" />
			</div>
		</section>
	);
}
