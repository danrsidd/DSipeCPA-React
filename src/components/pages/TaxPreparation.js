import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/tax-prep.jpg";

const TaxPreparation = () => {
	return (
		<>
			<Article
				title="Tax Preparation Services"
				description={
					<>
						The days and weeks leading up to Tax Day can be
						overwhelming and complicated. Even when you’re
						organized, you may often question whether you have
						completed all forms and documents correctly. To avoid
						these obstacles and to gain clarity on the tax process,
						consult our talented tax professionals. We demystify the
						complexities of yearly tax filings, make certain you
						have not overlooked any deductions, and ensure you
						receive all the credits you may be entitled to.
						<br />
						<br />
						Our services include:
						<br />
						<br />
						<ul>
							<li>
								Software reviewed tax forms to identify any
								potential issues.
							</li>
							<br />
							<li>
								Electronic filing for expedited refunds (if
								eligible).
							</li>
							<br />
							<li>
								Analysis of your potential for additional
								deductions to limit your liability for the
								following year.
							</li>
							<br />
							<li>
								Consultation in all areas of tax preparation and
								guidance.
							</li>
						</ul>
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default TaxPreparation;
