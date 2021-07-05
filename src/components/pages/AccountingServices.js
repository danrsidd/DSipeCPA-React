import React from "react";
import Nav from "../ind_components/Nav";
import Headline from "../ind_components/Headline";
import accountingVector from "../../assets/images/accountingServices.png";
import AccountingServicesCollection from "../ind_components/AccountingServicesCollection";
import Footer from "../ind_components/Footer";

const AccountingServices = () => {
	return (
		<>
			<Nav />
			<Headline
				title="Flexible and reliable accounting services."
				description="We specialize in a number of accounting services for business and personal finances."
				imgSrc={accountingVector}
			/>
			<AccountingServicesCollection />
			<Footer />
		</>
	);
};

export default AccountingServices;
