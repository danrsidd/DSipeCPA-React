import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/tax-planning.jpg";

const TaxPlanning = () => {
	return (
		<>
			<Article
				title="Tax Planning Services"
				description={
					<>
						To keep tax liabilities low and maximize profits,
						businesses should create and implement a thorough tax
						planning strategy. Such a strategy ensures you hold on
						to all funds you are entitled to, while making use of
						all eligible tax deductions. At Douglas G. Sipe CPA, we
						pair you with experienced tax professionals that will
						analyze your business and create a robust tax planning
						strategy, ensuring your business remains successful and
						compliant.
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default TaxPlanning;
