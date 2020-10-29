import React from "react";
import "../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Head from 'next/head'

function Contact() {
	const github = <FontAwesomeIcon icon={faGithub} />;
	const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
	const codepen = <FontAwesomeIcon icon={faCodepen} />;
	const codepen_link = "https://codepen.io/somayyah";
	const linkedIN_link =
		"http://www.linkedin.com/in/somayyah-mohammed-630a1a177/";
	const githyb_link = "http://www.github.com/somayyah";
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="Contact Information"
					content="Find me at linkedin, github and codepen.io."
				/>
				<title>Contact information</title>
			</Head>
			<Fade bottom>
				<div className={`sm:pt-56 lg:pt-24 py-48 center-across space-y-5`}>
					<Flip right cascade>
						<h1 className="sm:text-green-900 md:text-purple-900 md:text-6xl text-teal-900 text-6xl lg:text-5xl font-serif">
							Find Me At
						</h1>
					</Flip>
					<ol className="py-5 bg-grey-100 space-y-10 md:text-purple-600 sm:text-green-500 text-teal-600 text-6xl lg:text-pink-600 lg:text-5xl">
						<li>
							<a className="hover:text-purple-600" href={linkedIN_link} rel="noopener noreferrer" target="_blank">
								<i>{linkedIn}</i>
							</a>
						</li>
						<li>
							<a className="hover:text-purple-600" href={githyb_link} rel="noopener noreferrer" target="_blank">
								<i>{github}</i>
							</a>
						</li>
						<li>
							<a className="hover:text-purple-600" href={codepen_link} rel="noopener noreferrer" target="_blank">
								<i >{codepen}</i>
							</a>
						</li>
					</ol>
				</div>
			</Fade>
		</>
	);
}

export default Contact;
