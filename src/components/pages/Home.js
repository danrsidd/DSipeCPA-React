import React from "react";
import Nav from "../ind_components/Nav";
import Headline from "../ind_components/Headline";
import accountingVector from "../../assets/images/accounting.png";
import Qualities from "../ind_components/Qualities";
import Highlights from "../ind_components/Highlights";
import Footer from "../ind_components/Footer";

const Home = () => {
	return (
		<>
			<Nav />
			<Headline
				title="Simplifying accounting so you can focus on what matters."
				description="We're a trusted Certified Public Accounting firm that
						manage all your tax and accounting needs."
				imgSrc={accountingVector}
			/>
			<Qualities />
			<Highlights />
			<Footer />
		</>
	);
};

export default Home;
