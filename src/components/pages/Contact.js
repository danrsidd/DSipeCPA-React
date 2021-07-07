import React from "react";
import { Link } from "react-router-dom";
import callUs from "../../assets/images/callUs.png";
import emailUs from "../../assets/images/emailUs.png";

const Contact = () => {
	return (
		<>
			<div className="contact-parent">
				<div className="contact-img-container">
					<div className="contact-buttons-container">
						<Link
							to="#"
							onClick={(e) => {
								window.location = "tel:9086875558";
								e.preventDefault();
							}}
						>
							<button className="action-btn" id="callButton">
								Call Us
							</button>
						</Link>
						<Link
							to="#"
							onClick={(e) => {
								window.location = "mailto:doug@dsipecpa.com";
								e.preventDefault();
							}}
						>
							<button className="action-btn" id="emailButton">
								Email Us
							</button>
						</Link>
					</div>
					<Link
						to="#"
						onClick={(e) => {
							window.location = "tel:9086875558";
							e.preventDefault();
						}}
					>
						<img src={callUs} alt="" id="phone" />
					</Link>
					<Link
						to="#"
						onClick={(e) => {
							window.location = "mailto:doug@dsipecpa.com";
							e.preventDefault();
						}}
					>
						<img src={emailUs} alt="" id="computer" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Contact;
