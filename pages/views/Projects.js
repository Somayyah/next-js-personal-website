import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/elements.css";
import "../styles/views/home.css";
import Head from 'next/head'

function Projects() {
	const github = <FontAwesomeIcon icon={faGithub} />;
	const githyb_link = "https://github.com/Somayyah/netflixish";

	return (
		<>
		<Head>
			<meta charSet="utf-8" />
				<meta
					name="Projects - Frontend Development, Programming and DevOps"
					content="My projects and contributions for DevOps, frontend and cloud computing. This includes Python programming, IT automation, system administration and frontend development."
				/>
				<title>Projects - Frontend Development, Programming and DevOps</title>
		</Head>
		<div className="father">
			<div className="child">
				<h1 className="headline">Nelflixis</h1>
				<p className="descreption">A netflix clone</p>
				<h2 className="what">Technologies used:</h2>
				<ul>
					<li>React.js</li>
					<li>TailwindCSS</li>
					<li>Firebase</li>
					<li>TMDB Api</li>
				</ul>
				<div className="livedemo">
					<a href={githyb_link} rel="noopener noreferrer" target="_blank">
						<i className="githublink">{github}</i>
					</a>
					<a href="https://netflix-ish-2e7dd.firebaseapp.com/" rel="noopener noreferrer"  target="_blank">Live Demo</a>
				</div>
			</div>
		</div>
		</>
	);
}

export default Projects;
