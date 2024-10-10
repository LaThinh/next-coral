import React from "react";
import InstagramSlider from "./InstagramSlider";

export default function InstagramSubscribe() {
	return (
		<section className="home-section bg-black/5 py-20">
			<div className="container">
				<h3 className="section-title">Follow products and discounts on Instagram</h3>
				<InstagramSlider />

				<div className="subscribe-newsletter w-full m-auto mt-10 max-w-[760px] flex flex-col gap-10">
					<h3 className="section-title">Or subscribe to the newsletter</h3>
					<form action="" className="flex justify-between gap-4">
						<div className="field flex-1 h-full bg-slate-200">
							<input
								type="text"
								placeholder="Email Address"
								className="form-control w-full h-12 p-3 px-5
                                bg-transparent outline-none border-b border-black"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary border-b border-black bg-transparent hover:bg-gray-300 p-3 px-8"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
