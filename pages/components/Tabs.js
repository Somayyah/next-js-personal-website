import React, { useState } from "react";
import "../styles/tabs.css";
import DATA from "../resume.json";
import EventWork from "./EventWork";
import EventEducation from "./EventEducation";
import Skill from "./Skill";

function Tabs() {
	const [education, setEducation] = useState(true);
	const [work, setWork] = useState(false);
	const [skills, setSkills] = useState(false);

	const events = DATA["events"];
	const lists = Object.keys(DATA["lists"]);
	let components = {},
		list_entries = {};
	Object.keys(events).forEach((name, index) => {
		components[name] = events[name];
	});
	lists.forEach((name, index) => {
		list_entries[name] = DATA["lists"][name];
	});
	let Work = components["EventWork"];
	let Education = components["EventEducation"];

	return (
		<nav className="skills-tab">	
			<h1 className="underlined_title">MORE ABOUT ME</h1>
			<div className="tabs">
				<h1
					className={`${education ? "active-tab" : ""}`}
					onClick={() => {
						setEducation(true);
						setWork(false);
						setSkills(false);
					}}
				>
					Education
				</h1>
				{education ? <EventEducation data={Education} screen={true} /> : null}
				<h1
					className={`${work ? "active-tab" : ""}`}
					onClick={() => {
						setEducation(false);
						setWork(true);
						setSkills(false);
					}}
				>
					Work Experience
				</h1>
				{work ? <EventWork data={Work} screen={true} /> : null}
				<h1
					className={`${skills ? "active-tab" : ""}`}
					onClick={() => {
						setEducation(false);
						setWork(false);
						setSkills(true);
					}}
				>
					Skills
				</h1>
				{skills ? <Skill data={list_entries} screen={true} /> : null}
			</div>
		</nav>
	);
}

export default Tabs;
