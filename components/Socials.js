import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faCodepen,
} from "@fortawesome/free-brands-svg-icons";
//import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
//import Emailme from "../components/Emailme";

function Socials({ width }) {
	const [emailC, setEmail] = useState(false);
	const github = <FontAwesomeIcon icon={faGithub} />;
	const codepen = <FontAwesomeIcon icon={faCodepen} />;
	const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
	//const envelope = <FontAwesomeIcon icon={faEnvelope} />;
	const linkedIN_link =
		"http://www.linkedin.com/in/somayyah-mohammed-630a1a177/";
	const githyb_link = "http://www.github.com/somayyah/";
	const codepen_link = "https://codepen.io/somayyah";
	return (
		<div>
			{!width ? (
				<div>
					{emailC ? <Emailme email={emailC} /> : null}
					<ol className="icons-container">
						<li>
							<a href={githyb_link} rel="noopener noreferrer" target="_blank">
								<i className="github">{github}</i>
							</a>
						</li>
						<li>
							<a href={linkedIN_link} rel="noopener noreferrer" target="_blank">
								<i className="linkedIn">{linkedIn}</i>
							</a>
						</li>
						<li>
							<a href={codepen_link} rel="noopener noreferrer" target="_blank">
								<i className="linkedIn">{codepen}</i>
							</a>
						</li>
					</ol>
				</div>
			) : null}
		</div>
	);
}

export default Socials;

/*
<li>
							<button className="linkedIn" onClick={() => setEmail(!emailC)}>
								<i>{envelope}</i>
							</button>
						</li>
*/
