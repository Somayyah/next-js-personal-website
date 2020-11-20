import React, { useState } from "react";
import Link from "./ActiveLink";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faFile, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import ReactPlayer from "react-player/soundcloud";

const StyledLink = styled(Link)`
	text-decoration: none;
	${(props) => props.active && "color: #040055;background-color: #e61d6d;"}
`;
function Nav() {
	let width_v;

	if (typeof window !== "undefined") width_v = window.innerWidth < 1240;

	if (typeof window !== "undefined") width_v = window.innerWidth < 1240;
	const home = <FontAwesomeIcon icon={faHome} />;
	const resume = <FontAwesomeIcon icon={faFile} />;
	const blog = <FontAwesomeIcon icon={faBlog} />;
	const contact = <FontAwesomeIcon icon={faAddressBook} />;

	const project = <FontAwesomeIcon icon={faProjectDiagram} />;
	const soundcloud = <FontAwesomeIcon icon={faSoundcloud} />;
	const [play_track, setplay] = useState(false);
	const track = `https://soundcloud.com/bitesizekid/minecraft-background-music`;

	return (
		<nav>
			{!width_v ? (
				<ReactPlayer hidden={true} url={track} playing={play_track} />
			) : null}
			<ul
				className={`${
					width_v ? "nav-m nav-sm md:text-6xl md:bg-purple-600" : "banner"
				}`}
			>
				{!width_v ? (
					<li className="circle" onClick={() => setplay(!play_track)}>
						<i>{soundcloud}</i>
					</li>
				) : null}
				<StyledLink href="/">
					<li className={`${!width_v ? "item movement" : ""}`}>
						<i>{home}</i>
						{!width_v ? <span className="home">Home</span> : null}
					</li>
				</StyledLink>
				<StyledLink href="/resume">
					<li className={`${!width_v ? "item movement" : ""}`}>
						<i>{resume}</i>
						{!width_v ? (
							<span className="extra-small-resume ">Resume</span>
						) : null}
					</li>
				</StyledLink>
				{!width_v ? (
					<StyledLink exact href="/projects">
						<li className="text-extra-sm item movement">
							<i>{project}</i>
							<span className="extra-small">Projects</span>
						</li>
					</StyledLink>
				) : null}
				<StyledLink href="/blog">
					<li className=" item movement">
						<i>{blog}</i>
						{!width_v ? <span className="blog">Blog</span> : null}
					</li>
				</StyledLink>
				<StyledLink href="/contact">
					<li className="text-extra-sm item movement">
						<i>{contact}</i>
						{!width_v ? (
							<span className="extra-small-contacts">&nbsp;Contacts</span>
						) : null}
					</li>
				</StyledLink>
			</ul>
		</nav>
	);
}

export default Nav;
