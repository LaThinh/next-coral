import Image from "next/image";
import React from "react";

export default function GridCollection() {
	return (
		<section className="home-section section-grid-collection">
			<div className="container">
				<div className="grid grids-col-1 lg:grid-cols-[50px_1fr_1fr] gap-5">
					<div className="grid-item-1">
						<div className="box-text h-full flex bg-gray-100 relative">
							<h6
								className="text-nowrap text-[24px] font-medium  text-center w-full
							lg:text-[32px] lg:-rotate-90 lg:absolute lg:left-1/2 lg:top-1/2 lg:w-auto lg:translate-x-[-50%] lg:translate-y-[-50%]"
							>
								Explore new and popular styles
							</h6>
						</div>
					</div>
					<div className="grid-item-2">
						<div className="collection-item">
							<a className="image-wrapper" href="/category/ladies">
								<Image
									className="w-full object-cover aspect-square"
									src="/images/img/18.png"
									width={400}
									height={400}
									alt="Collection 1"
								/>
								<div className="image-title">
									<h4 className="text-2xl p-2">Ladies Collection</h4>
								</div>
							</a>
						</div>
					</div>
					<div className="grid-item-3">
						<div className="collection-group grid grid-cols-2 gap-5">
							<div className="collection-item">
								<a className="image-wrapper" href="/category/men">
									<Image
										className="w-full object-cover aspect-square"
										src="/images/img/01.png"
										width={400}
										height={400}
										alt="Collection 1"
									/>
									<div className="image-title">
										<h4>Men Collection</h4>
									</div>
								</a>
							</div>
							<div className="collection-item">
								<a className="image-wrapper" href="/category/women">
									<Image
										className="w-full object-cover aspect-square"
										src="/images/img/03.png"
										width={400}
										height={400}
										alt="Collection 1"
									/>
									<div className="image-title">
										<h4>Women Collection</h4>
									</div>
								</a>
							</div>
							<div className="collection-item">
								<a className="image-wrapper" href="/category/dress">
									<Image
										className="w-full object-cover aspect-square"
										src="/images/img/02.png"
										width={400}
										height={400}
										alt="Collection 1"
									/>
									<div className="image-title">
										<h4>Dress Collection</h4>
									</div>
								</a>
							</div>
							<div className="collection-item">
								<a className="image-wrapper" href="/category/men-jack">
									<Image
										className="w-full object-cover aspect-square"
										src="/images/img/20.png"
										width={400}
										height={400}
										alt="Collection 1"
									/>
									<div className="image-title">
										<h4>Jacket Collection</h4>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
