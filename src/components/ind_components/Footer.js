import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<h2 className="footer-logo">Douglas G. Sipe CPA, LLC.</h2>
						<p className="footer-info">
							Simplifying accounting so you can focus on what
							matters.
						</p>
						<Link to="https://www.google.com/maps/place/Douglas+G.+Sipe+CPA,+LLC/@40.8951736,-74.281853,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3adc088e87d95:0x704e0d3506a78625!8m2!3d40.8951736!4d-74.279659?shorturl=1" target="_blank">
							<div className="container footer-address-container">
								<i className="fas fa-map-marked-alt"></i>
								<br />
								75 Lane Road
								<br />
								Suite 403
								<br />
								Fairfield, NJ 07004
							</div>
						</Link>
					</div>
					<div className="col-md-4">
						<p className="footer-title">Quick Links</p>
						<ul>
							<li>
								<Link to="/tax-planning">
									<p className="quick-links">Tax Planning</p>
								</Link>
							</li>
							<li>
								<Link to="/tax-preparation-2">
									<p className="quick-links">Tax Preparation</p>
								</Link>
							</li>
							<li>
								<Link to="/bookkeeping">
									<p className="quick-links">Bookkeeping</p>
								</Link>
							</li>
							<li>
								<Link to="/payroll-services">
									<p className="quick-links">Payroll Services</p>
								</Link>
							</li>
							<li>
								<Link to="/new-business-set-up">
									<p className="quick-links">
										New Business Set-Up
									</p>
								</Link>
							</li>
							<li>
								<Link to="/non-profit-set-up">
									<p className="quick-links">Non-Profit Set-Up</p>
								</Link>
							</li>
							<li>
								<Link to="/quick-books-services">
									<p className="quick-links">
										QuickBooks Services
									</p>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-4">
						<p className="footer-title" id="quickLinks2">
							Quick Links
						</p>
						<ul>
							<li>
								<Link to="/about-the-company">
									<p className="quick-links">About</p>
								</Link>
							</li>
							<li>
								<Link to="/contact">
									<p className="quick-links">Contact</p>
								</Link>
							</li>
							<li>
								<Link to="/privacy-policy">
									<p className="quick-links">Privacy Policy</p>
								</Link>
							</li>
							{/* <li>
								<Link to="/sitemap">
									<p className="quick-links">Sitemap</p>
								</Link>
							</li> */}
						</ul>
					</div>
				</div>
			</div>
			<div className="row copyright">
				<p>© {year} Douglas G. Sipe CPA, LLC.</p>
			</div>
		</footer>
	);
};

export default Footer;
