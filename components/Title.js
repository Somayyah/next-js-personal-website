import React from "react";

function HandleC({width_v}){
	console.log(width_v)
	let title;
	console.log("width: ", width_v)
	if (width_v) {
		title = <div className="title-border-m sm:border-green-900">
			<h1 className="title-m sm:text-6xl sm:text-green-500 md:text-purple-600">ALT - F4</h1>
		</div>;
	  } else {
		title = <h1 className="font-type">ALT - F4</h1>;
	 }
	 return title
}

function Title({width}){
	return(
		<HandleC width_v={width}/>
	)
}	

export default Title;