import React from "react";
import errorImg from "../../assets/images/404_plane.jpg";

const Error = () => {
	return (
		<>
			<div className="error-parent">
				<div className="error-overlay container-fluid">
					<h1>404: Page not found.</h1>
				</div>
				<img className="img-fluid error-img" src={errorImg} alt="" />
			</div>
		</>
	);
};

export default Error;
