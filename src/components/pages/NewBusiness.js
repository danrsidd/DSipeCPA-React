import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/new-business.jpeg";

const NewBusiness = () => {
	return (
		<>
			<Article
				title="New Business Set-Up"
				description={
					<>
						Many factors determine whether or not a business will
						succeed, but one factor is certain:{" "}
						<em>
							<b>
								Thinking about your financial and business plans
								ahead of time can give you a greater chance to
								succeed.
							</b>
						</em>
						<br />
						<br />
						To learn more about our new business set-up services,
						please schedule a consultation. Knowing what you don’t
						know ahead of time can avoid obstacles later on.
						<br />
						<br />
						How can the professionals at Douglas G. Sipe CPA help?
						We...
						<br />
						<br />
						<ul>
							<li>
								Help you avoid common mistakes many start-ups
								face when setting up their business initially.
							</li>{" "}
							<br />
							<li>
								Establish a sound business strategy that takes
								into consideration your financial goals and
								marketing plan.
							</li>{" "}
							<br />
							<li>
								Determine if your business requires start-up
								capital and assists you in developing a plan to
								get it.
							</li>{" "}
							<br />
							<li>
								Help decide which type of business entity is
								best for your personal situation by evaluating
								liabilities, operations, and portability.
							</li>{" "}
							<br />
							<li>
								Develop a Cash Flow Budget so you understand how
								your income and projections fit into your
								multi-year plan.
							</li>{" "}
							<br />
							<li>
								Establish billing and collection best practices
								to maximize cash flow and help you to monitor
								and control your costs over the long term.
							</li>{" "}
							<br />
							<li>
								Prepare all documentation associated with your
								new business.
							</li>{" "}
							<br />
							<li>
								Set-up and manage payroll and tax filing for new
								hires.
							</li>{" "}
							<br />
							<li>Develop partnership agreements.</li>
						</ul>
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default NewBusiness;
