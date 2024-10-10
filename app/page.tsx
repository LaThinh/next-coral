// import Image from "next/image";
import Banner from "@components/banner/Banner";
import Brands from "./components/homepage/Brands";
import GridCollection from "./components/homepage/GridCollection";
import SubscribeNewsleter from "./components/homepage/SubscribeNewsleter";
import BannerZara from "./components/homepage/BannerZara";
import BestSellerProduct from "./components/homepage/BestSellerProduct";
import InstagramSubscribe from "./components/homepage/InstagramSubscribe";

export default function Home() {
	return (
		<div className="home-page">
			<Banner />
			<Brands />
			<GridCollection />
			<SubscribeNewsleter />
			<BannerZara />
			<BestSellerProduct />
			<InstagramSubscribe />
		</div>
	);
}
