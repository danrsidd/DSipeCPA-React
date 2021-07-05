import React from "react";
import HighlightCard from "./HighlightCard";
import { Link } from "react-router-dom";

const AccountingServicesCollection = () => {
	return (
		<div className="highlights-parent">
			<div className="row highlights-container">
				<h1>Accounting Services</h1>
				<div className="row row-cols-1 row-cols-md-3 g-4 highlights-child">
					<Link to="/bookkeeping" className="highlight-card-link">
						<HighlightCard title="Bookkeeping" />
					</Link>
					<Link to="/payroll" className="highlight-card-link">
						<HighlightCard title="Payroll Services" />
					</Link>
					<Link to="/new-business" className="highlight-card-link">
						<HighlightCard title="New Business Set-Up" />
					</Link>
					<Link to="/non-profit" className="highlight-card-link">
						<HighlightCard title="Non-Profit Set-Up" />
					</Link>
					<Link to="/quickbooks" className="highlight-card-link">
						<HighlightCard title="QuickBooks Services" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AccountingServicesCollection;
