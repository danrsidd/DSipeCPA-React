import React from "react";
import Headline from "../ind_components/Headline";
import accountingVector from "../../assets/images/accountingServices.png";
import AccountingServicesCollection from "../ind_components/AccountingServicesCollection";

const AccountingServices = () => {
	return (
		<>
			<Headline
				title="Flexible and reliable accounting services."
				description="We specialize in a number of accounting services for business and personal finances."
				imgSrc={accountingVector}
			/>
			<AccountingServicesCollection />
		</>
	);
};

export default AccountingServices;
