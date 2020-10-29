import React from "react";
import '../styles/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUniversity, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import "../styles/elements.css"

function EventWork(props){
	const university = <FontAwesomeIcon icon={faUniversity}/>
	const time = <FontAwesomeIcon icon={faCalendarAlt}/>
	const width = props.screen
	
	return(
		<div className={`${width ? "event slider work" : " text-teal-900"}`}>
			{ !width ? <h1 className="md:text-purple-600 text-teal-600 font-serif text-3xl sm:text-green-500 sm:text-4xl md:text-5xl lg:text-pink-600">Work Experience</h1> : null}
			{props.data.map((item, index)=>{
				return <div key={`${item["name"]}-${index}`}
					className={`${width ? "null" : "px-3 flex flex-col items-left md:text-purple-900 sm:text-green-900"}`}>
					<div className={`${width ? 'work' : "flex flex-row md:text-3xl text-lg sm:text-2xl"}`}>
						<h1 key={`h1-${item["name"]}-${index}`}>
							<span className={`${width ? "bullets" : "text-teal-600 lg:text-pink-900 md:text-purple-900 sm:text-green-900"}`}>&#9642;</span>&nbsp;&nbsp;{item["name"]}&nbsp;
						</h1>
						{!width? <p key={`${item["type"]}-${index}`}
							className="">
							{!width ? <span className={`${width ? null : "text-teal-600 lg:text-pink-900 sm:text-green-900"}`}>-</span> : null} {item["type"]}
						</p> : null}
					</div>
					<div className={`${width ? 'workcontent' : "sm:text-lg md:text-xl text-sm py-1 px-4 flex flex-row justify-between sm:px-0"}`}>
						<div className={`${width ? 'workcontent' : "flex flex-row"}`}>
							<i className={`${width ? null : "text-teal-600  lg:text-pink-900 md:text-purple-900 sm:text-green-900"}`}>{university}&nbsp;&nbsp;</i>
							<p key={`${item["company"]}-${index}`}
						className="">
							{item["company"]}
							</p>
						</div>
						<div className={`${width ? 'workcontent' : "flex flex-row"}`}>
						&nbsp;&nbsp;<i className={`${width ? null : " md:text-purple-900 lg:text-pink-900 text-teal-600 sm:text-green-900"}`}>{time}&nbsp;&nbsp;</i>
							<p key={`${item["date"]}-${index}`}
							className="">
								{item["date"]}
							</p>
						</div>
					</div>
				</div>
			})}
		</div>
	)
}

export default EventWork;
