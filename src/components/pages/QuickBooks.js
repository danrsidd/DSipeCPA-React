import React from "react";
import Nav from "../ind_components/Nav";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/quickbooks.jpeg";
import Footer from "../ind_components/Footer";

const QuickBooks = () => {
	return (
		<>
			<Nav />
			<Article
				title="QuickBooks Services"
				description={
					<>
						QuickBooks by Intuit is the most popular and widely used
						small business accounting software. Its primary function
						is to assist business owners in managing their day to
						day financial operations quickly and easily.
						<br />
						<br />
						QuickBooks is a highly useful tool with advanced
						features. However, it is critical to set it up correctly
						to avoid trouble later on. Our expertise includes
						software setup and integration with your accounts, so
						that you will always have the most current and accurate
						information available.
						<br />
						<br />
						We assist with the following:
						<br />
						<br />
						<ul>
							<li>Standard QuickBooks set up</li>
							<br />
							<li>Custom QuickBooks set up</li>
							<br />
							<li>Set-up and install software correctly</li>
							<br />
							<li>QuickBooks advisor support</li>
							<br />
							<li>Ongoing training and assistance</li>
							<br />
							<li>Training on features and functions</li>
							<br />
							<li>
								Provide immediate answers for troubleshooting
							</li>
						</ul>
					</>
				}
				imgSrc={officeImg}
			/>
			<Footer />
		</>
	);
};

export default QuickBooks;
