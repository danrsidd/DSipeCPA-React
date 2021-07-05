import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<h2 class="footer-logo">Douglas G. Sipe CPA, LLC.</h2>
						<p class="footer-info">
							Simplifying accounting so you can focus on what
							matters.
						</p>
						<Link
							to={{
								pathname:
									"https://www.google.com/maps/place/Douglas+G.+Sipe+CPA,+LLC/@40.8951736,-74.281853,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3adc088e87d95:0x704e0d3506a78625!8m2!3d40.8951736!4d-74.279659?shorturl=1",
							}}
							target="_blank"
						>
							<div class="container footer-address-container">
								<i class="fas fa-map-marked-alt"></i>
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
						<p class="footer-title">Quick Links</p>
						<ul>
							<li>
								<Link to="/tax-planning">
									<a class="quick-links">Tax Planning</a>
								</Link>
							</li>
							<li>
								<Link to="/tax-preparation">
									<a class="quick-links">Tax Preparation</a>
								</Link>
							</li>
							<li>
								<Link to="/bookkeeping">
									<a class="quick-links">Bookkeeping</a>
								</Link>
							</li>
							<li>
								<Link to="/payroll">
									<a class="quick-links">Payroll Services</a>
								</Link>
							</li>
							<li>
								<Link to="/new-business">
									<a class="quick-links">
										New Business Set-Up
									</a>
								</Link>
							</li>
							<li>
								<Link to="/non-profit">
									<a class="quick-links">Non-Profit Set-Up</a>
								</Link>
							</li>
							<li>
								<Link to="/quickbooks">
									<a class="quick-links">
										QuickBooks Services
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-4">
						<p class="footer-title" id="quickLinks2">
							Quick Links
						</p>
						<ul>
							<li>
								<Link to="/about">
									<a class="quick-links">About</a>
								</Link>
							</li>
							<li>
								<Link to="/contact">
									<a class="quick-links">Contact</a>
								</Link>
							</li>
							<li>
								<Link to="/privacy-policy">
									<a class="quick-links">Privacy Policy</a>
								</Link>
							</li>
							{/* <li>
								<Link to="/sitemap">
									<a class="quick-links">Sitemap</a>
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
