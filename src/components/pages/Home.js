import React from "react";
import Headline from "../ind_components/Headline";
import accountingVector from "../../assets/images/accounting.png";
import Qualities from "../ind_components/Qualities";
import Highlights from "../ind_components/Highlights";

const Home = () => {
	return (
		<>
			<Headline
				title="Simplifying accounting so you can focus on what matters."
				description="We're a trusted Certified Public Accounting firm that
						manages all your tax and accounting needs."
				imgSrc={accountingVector}
			/>
			<Qualities />
			<Highlights />
		</>
	);
};

export default Home;
