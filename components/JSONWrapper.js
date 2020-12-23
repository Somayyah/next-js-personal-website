import React from "react";
import DATA from '../pages/resume.json'
import EventWork from './EventWork'
import EventEducation from './EventEducation'
import Skill from './Skill'
import Fade from 'react-reveal/Fade';

function JSONWrapper({screen}){
	const events = DATA["events"]
	const lists = Object.keys(DATA["lists"])
	let components = {}, list_entries = {};
	Object.keys(events).forEach((name, index)=>{
		components[name] = events[name]
	})
	lists.forEach((name, index)=>{
		list_entries[name] = DATA["lists"][name]
	})
	let Work = components["EventWork"]
	let Education = components["EventEducation"]
	return(
		<div className="sm:py-1">
			<Fade bottom big>
				<EventEducation data={Education} screen={false} />
				<EventWork data={Work} screen={false}/>
				<Skill data={list_entries} screen={false}/>
			</Fade>
		</div>
	)
}

export default JSONWrapper;
