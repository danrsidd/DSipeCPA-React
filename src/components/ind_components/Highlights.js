import React from "react";
import HighlightCard from "./HighlightCard";
import { Link } from "react-router-dom";

const Highlights = () => {
	return (
		<div className="highlights-parent">
			<div className="row highlights-container">
				<h1>Our Services</h1>
				<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 highlights-child">
					<Link to="/tax-planning" className="highlight-card-link">
						<HighlightCard title="Tax Planning" />
					</Link>
					<Link
						to="/tax-preparation-2"
						className="highlight-card-link"
					>
						<HighlightCard title="Tax Preparation" />
					</Link>
					<Link to="/bookkeeping" className="highlight-card-link">
						<HighlightCard title="Bookkeeping" />
					</Link>
					<Link
						to="/payroll-services"
						className="highlight-card-link"
					>
						<HighlightCard title="Payroll Services" />
					</Link>
					<Link
						to="/new-business-set-up"
						className="highlight-card-link"
					>
						<HighlightCard title="New Business Set-Up" />
					</Link>
					<Link
						to="/non-profit-set-up"
						className="highlight-card-link"
					>
						<HighlightCard title="Non-Profit Set-Up" />
					</Link>
					<Link
						to="/quick-books-services"
						className="highlight-card-link"
					>
						<HighlightCard title="QuickBooks Services" />
					</Link>
					<Link to="/contact" className="highlight-card-link">
						<HighlightCard title="Schedule a Consultation" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Highlights;
