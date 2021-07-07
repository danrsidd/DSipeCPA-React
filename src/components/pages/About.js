import React from "react";
import Article from "../ind_components/Article";
import officeImg from "../../assets/images/office.jpeg";

const About = () => {
	return (
		<>
			<Article
				title="About Us"
				description={
					<>
						For over 20 years Douglas G. Sipe CPA, LLC has served
						businesses and individuals as a trusted financial
						advisor in areas ranging from taxation to accounting.
						We’re licensed in both New York and New Jersey, and
						serve clients across the United States. We maintain our
						membership with the American Institute of Certified
						Public Accountants (AICPA) and the New Jersey Society of
						Certified Public Accountant (NJSCPA). <br /> <br />
						Prior to founding his firm, Douglas Sipe held various
						accounting positions in public accounting firms,
						financial corporations, and technology start-ups. He
						holds a Bachelors in Business Administration and a
						Masters of Science in Taxation from Pace University.
					</>
				}
				imgSrc={officeImg}
			/>
		</>
	);
};

export default About;
