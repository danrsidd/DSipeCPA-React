import React from "react";

const HighlightCard = (props) => {
	return (
		<>
			<div className="col">
				<div className="card h-100">
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default HighlightCard;
