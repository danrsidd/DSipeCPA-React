import React from "react";
import Nav from "../ind_components/Nav";
import Headline from "../ind_components/Headline";
import taxVector from "../../assets/images/taxServices.png";
import TaxServicesCollection from "../ind_components/TaxServicesCollection";
import Footer from "../ind_components/Footer";

const TaxServices = () => {
	return (
		<>
			<Nav />
			<Headline
				title="Free yourself from tax worries."
				description="Our tax services for individuals and businesses are proven to be effective and timely. We help you overcome complex tax obstacles and prevent them from ever occurring."
				imgSrc={taxVector}
			/>
			<TaxServicesCollection />
			<Footer />
		</>
	);
};

export default TaxServices;
