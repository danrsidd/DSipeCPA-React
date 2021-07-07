import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/payroll.jpeg";

const Payroll = () => {
	return (
		<>
			<Article
				title="Payroll Services"
				description={
					<>
						The many rules and regulations surrounding payroll make
						it a time consuming process for business owners. On
						average, more than 12 hours a month are dedicated to
						addressing payroll processes and obstacles. We ensure
						our payroll solutions meet your business’ needs, so that
						you have more time to focus on other important matters.
						<br />
						<br />
						We offer <em>after-the-fact payroll services</em>. We
						help you determine the amount of each employee’s net
						paycheck and calculate your monthly payroll deposits. At
						the end of the quarter, we take your manual payroll
						records, prepare and e-file your Federal and State
						payroll tax returns, and prepare and e-file Forms W-2
						and W-3.
						<br />
						<br />
						We also offer the following services:
						<br />
						<br />
						<ul>
							<li>Worker’s Compensation Audits</li>
							<br />
							<li>Processing 1099 and 1096 forms</li>
							<br />
							<li>Federal and State registration forms</li>
						</ul>
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default Payroll;
