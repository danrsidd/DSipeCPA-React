import React from "react";
import { Link } from "react-router-dom";

const Headline = (props) => {
	return (
		<div className="headline-parent">
			<div className="row">
				<div className="col-xl-7 headline-text">
					<h1>{props.title}</h1>
					<p>{props.description}</p>
					<Link to="/about">
						<button className="btn btn-dark">About</button>
					</Link>
					<Link to="/contact">
						<button className="btn btn-dark">Contact</button>
					</Link>
				</div>
				<div className="col-xl-5">
					<img
						className="img-fluid accounting-vector"
						src={props.imgSrc}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Headline;
