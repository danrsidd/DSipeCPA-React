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
						<button className="action-btn" id="callButton">
							Call Us at (908) 687-5558
						</button>
						<button className="action-btn" id="emailButton">
							Email Us at doug@dsipecpa.co
						</button>
					</div>
					<img src={callUs} alt="" id="phone" />
					<img src={emailUs} alt="" id="computer" />
				</div>
			</div>
		</>
	);
};

export default Contact;
