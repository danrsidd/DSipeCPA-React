import React from "react";
import { Link } from "react-router-dom";
import Nav from "../ind_components/Nav";
import Footer from "../ind_components/Footer";

const Sitemap = () => {
	return (
		<>
			<Nav />
			<div className="sitemap-container">
				<h1>Sitemap</h1>
				<ul>
					<Link>
						<li>Home</li>
					</Link>
					<Link>
						<li>About</li>
					</Link>
					<Link>
						<li>Contact</li>
					</Link>
					<Link>
						<li>Location</li>
					</Link>
					<Link>
						<li>Privacy Policy</li>
					</Link>
					<Link>
						<li>Sitemap</li>
					</Link>
					<Link>
						<li>Tax Planning</li>
					</Link>
					<Link>
						<li>Tax Preparation</li>
					</Link>
					<Link>
						<li>Bookkeeping</li>
					</Link>
					<Link>
						<li>Payroll Services</li>
					</Link>
					<Link>
						<li>New Business Set-Up</li>
					</Link>
					<Link>
						<li>Non-Profit Set-Up</li>
					</Link>
					<Link>
						<li>QuickBooks Services</li>
					</Link>
				</ul>
			</div>
			<Footer />
		</>
	);
};

export default Sitemap;
