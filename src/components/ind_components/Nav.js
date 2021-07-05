import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark">
			<div className="container-fluid navbar-container">
				<div className="d-flex me-1">
					<Link className="navbar-brand" to="/">
						Douglas G. Sipe CPA
					</Link>
				</div>
				<div className="d-flex ms-auto">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav ms-auto">
						<Link className="nav-link" to="/about">
							About
						</Link>
						<Link className="nav-link" to="/accounting">
							Accounting Services
						</Link>
						<Link className="nav-link" to="/tax">
							Tax Services
						</Link>
						<Link to="/contact">
							<button className="btn btn-dark" type="button">
								Contact
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
