import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/nonprofit.jpeg";

const NonProfit = () => {
	return (
		<>
			<Article
				title="Non-Profit Set-Up"
				description={
					<>
						At Douglas G. Sipe CPA, we have extensive expertise in
						helping set-up and maintain non-profit organizations and
						tax-exempt statuses.
						<br />
						<br />
						Our Non-Profit services include the following:
						<br />
						<br />
						<ul>
							<li>Review and complete financial statements</li>{" "}
							<br />
							<li>
								Design, develop, and maintain accounting systems
							</li>{" "}
							<br />
							<li>Payroll preparation</li> <br />
							<li>Payroll tax preparation and deposits</li> <br />
							<li>Train accounting personnel</li> <br />
							<li>
								File your non-profit status application
							</li>{" "}
							<br />
							<li>
								Train Board of Directors on financial statement
								usage and effective budgeting.
							</li>{" "}
							<br />
							<li>
								Prepare and file the 990 and 990T tax forms
							</li>{" "}
							<br />
							<li>
								Initial start-up preparation, including
								incorporation, federal employee identification
								number (FEIN), and payroll setup with federal
								and state agencies.
							</li>
						</ul>
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default NonProfit;
