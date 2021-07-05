import React from "react";
import Nav from "../ind_components/Nav";
import Footer from "../ind_components/Footer";
import errorImg from "../../assets/images/404_plane.jpg";

const Error = () => {
	return (
		<>
			<Nav />
			<div className="error-parent">
				<div className="error-overlay container-fluid">
					<h1>404: Page not found.</h1>
				</div>
				<img className="img-fluid error-img" src={errorImg} alt="" />
			</div>
			<Footer />
		</>
	);
};

export default Error;
