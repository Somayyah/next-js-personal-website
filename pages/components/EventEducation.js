import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/elements.css";

function EventEducation(props) {
	const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;
	const time = <FontAwesomeIcon icon={faCalendarAlt} />;
	const width = props.screen;
	let events = [];

	props.data.map((item, index) => {
		events.push(
			<div key={index}>
				<div
					key={`${item["name"]}-${index}`}
					className={`${!width ? "px-3 flex flex-col items-left" : null}`}
				>
					<div className={`${!width ? "flex flex-row text-lg" : null}`}>
						<h1
							key="uniqueId2"
							className={`${!width ? "sm:text-2xl md:text-3xl" : 'edutitle'}`}
						>
							<span
								className={`${
									!width
										? "text-teal-600 lg:text-pink-900 md:text-purple-900 sm:text-green-900"
										: "bullets"
								}`}
							>
								&#9642;
							</span>
							&nbsp;&nbsp;{item["name"]}&nbsp;
							<span className="text-md">{item["type"]}</span>
						</h1>
					</div>
					<div
						className={`${
							!width
								? "text-lg py-1 px-4 sm:px-0 md:text-2xl flex flex-row justify-between"
								: null
						}`}
					>
						<div className={`${!width ? "flex flex-row" : 'content'}`}>
							<p
								key={`${item["where"]}-${index}`}
								className={`${!width ? "text-sm sm:text-lg md:text-xl" : null}`}
							>
								<i
									className={`${
										!width
											? "text-teal-600 lg:text-pink-900 md:text-purple-900 sm:text-green-900"
											: null
									}`}
								>
									{location}
								</i>
								&nbsp;&nbsp;{item["where"]}{" "}
								<span className="sm:visible">&nbsp;&nbsp;</span>
							</p>
						</div>
						<div className={`${
								!width
									? "flex flex-row sm:flex-col text-sm lg:text-pink-900"
									: 'content'
							}`}
						>
							<p
								key={`${item["date"]}-${index}`}
								className={`${!width ? "sm:text-lg md:text-xl" : null}`}
							>
								&nbsp;&nbsp;
								<i
									className={`${
										!width
											? "text-teal-600 lg:text-pink-900 md:text-purple-900 sm:text-green-900"
											: null
									}`}
								>
									{time}&nbsp;&nbsp;
								</i>
								{item["date"]}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
		return null
	});

	return (
		<div
			className={`${
				!width ? " text-teal-900 lg:text-pink-900" : "event slider"
			}`}
		>
			{!width ? (
				<h1
					className={`${
						width
							? "md:text-purple-600 text-teal-600 font-serif md:text-5xl sm:text-4xl text-3xl sm:text-green-500 lg:text-pink-600"
							: null
					}`}
				>
					Education
				</h1>
			) : null}

			{events.map((item , index)=> {
				return <div key={`index-${index}`} className="slide">
					{item}
				</div>
			})}
		</div>
	);
}

export default EventEducation;
