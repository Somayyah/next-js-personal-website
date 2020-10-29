import React from "react";
import Flip from "react-reveal/Flip";
import "../styles/elements.css";

function Skill(props) {
	let items = Object.keys(props.data);
	const width = props.screen;
	console.log(width);
	
	return (
		<div>
			{!width ? <div>
			{items.map((item, i) => {
				return (
					<div>
						<Flip right>
								<h1 className="md:text-purple-600 text-teal-600 font-serif text-3xl sm:text-4xl sm:text-green-500 md:text-5xl lg:bg-pink-600">
									{item}
								</h1>
							{Object.keys(props.data[item]).map((element, index) => {
								return (
									<div
										className="text-center flex flex-col items-left sm:bg-green-200 md:bg-purple-200 bg-teal-200 mx-5 my-2 rounded-md sm:mx-10 sm:rounded-none"
									>
										<div className="padd">
											<p
												className="sm:text-3xl text-2xl py-2 font-serif rounded-md sm:rounded-none text-gray-100 lg:bg-pink-600 md:bg-purple-600 sm:bg-green-900  bg-teal-600"
											>
												{element}
											</p>
											{props.data[item][element].map((inside, ind) => {
												return (
													<p
														className="md:text-purple-600 lg:text-pink-900 text-teal-900 sm:text-green-900 sm:text-2xl text-xl py-1"
													>
														{inside}
														<hr />
													</p>
												);
											})}
										</div>
									</div>
								);
							})}
						</Flip>
					</div>
				);
			})}
		</div> : <div className="skills">
			{items.map((item, i) => {
				return (
					<div className="skillbackground">
						<Flip right>
							{Object.keys(props.data[item]).map((element, index) => {
								return (
									<div
										className=""
									>
										<div className="padd">
											<p
												className="cname"
											>
												{element}
											</p>
											{props.data[item][element].map((inside, ind) => {
												return (
													<p
														className="ctype"
													>
														{inside}
													</p>
												);
											})}
										</div>
									</div>
								);
							})}
						</Flip>
					</div>
				);
			})}
		</div>}
		</div>
	);
}

export default Skill;
