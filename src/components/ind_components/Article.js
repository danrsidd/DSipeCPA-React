import React from "react";

const Article = (props) => {
	return (
		<div className="row article-parent">
			<div className="col-xl-12 article-title-container">
				<h1>{props.title}</h1>
			</div>
			<div className="col-md-6 article-img-container">
				<img src={props.imgSrc} className="img-fluid" alt="" />
			</div>
			<div className="col-md-6 article-text-container">
				<div className="article-text">
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Article;
