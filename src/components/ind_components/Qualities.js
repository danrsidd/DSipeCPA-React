import React from "react";

const Qualities = () => {
	return (
		<div className="qualities">
			<div className="row">
				<div className="feature col-md-6 col-lg-3">
					<i className="far fa-handshake"></i>{" "}
					<div className="feature-heading">Trusted Advisor for</div>
					<div className="feature-important">25+ Years</div>
				</div>
				<div className="feature col-md-6 col-lg-3">
					<i className="far fa-comment"></i>
					<div className="feature-heading">Quick & Responsive</div>
					<div className="feature-important">Communication</div>
				</div>
				<div className="feature col-md-6 col-lg-3">
					<i className="fas fa-user-lock"></i>
					<div className="feature-heading">Custom & Secure</div>
					<div className="feature-important">Client Portals</div>
				</div>
				<div className="feature col-md-6 col-lg-3">
					<i className="far fa-calendar-alt"></i>
					<div className="feature-heading">Call Now for a</div>
					<div className="feature-important">Free Consultation</div>
				</div>
			</div>
		</div>
	);
};

export default Qualities;
