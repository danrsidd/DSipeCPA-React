import React from "react";
import HighlightCard from "./HighlightCard";
import { Link } from "react-router-dom";

const TaxServicesCollection = () => {
	return (
		<div className="highlights-parent">
			<div className="row highlights-container">
				<h1>Tax Services</h1>
				<div className="row row-cols-1 row-cols-md-3 g-4 highlights-child">
					<Link to="/tax-planning" className="highlight-card-link">
						<HighlightCard title="Tax Planning" />
					</Link>
					<Link to="/tax-preparation" className="highlight-card-link">
						<HighlightCard title="Tax Preparation" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TaxServicesCollection;
