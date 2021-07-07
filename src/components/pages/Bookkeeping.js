import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/bookkeeping.jpeg";

const Bookkeeping = () => {
	return (
		<>
			<Article
				title="Bookkeeping Services"
				description={
					<>
						Most businesses can benefit from the proper organization
						and accurate reporting of their transactions. Even if
						you consider yourself organized, you may find you want
						to free up some time by utilizing our bookkeeping
						services.
						<br />
						<br />
						We offer the following services:
						<br />
						<br />
						<ul>
							<li>Bank Statement Reviews</li>
							<br />
							<li>Monthly Bank & Credit Card Reconciliations</li>
							<br />
							<li>Business Expense Recordings</li>
							<br />
							<li>Accounts Payable</li>
							<br />
							<li>Accounts Receivable</li>
							<br />
							<li>Billing</li>
							<br />
							<li>Payroll</li>
							<br />
							<li>Sales Tax Reporting</li>
						</ul>
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default Bookkeeping;
