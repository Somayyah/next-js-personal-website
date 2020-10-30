import React from "react";
import Tabs from "../components/Tabs"
import ResumeTitle from "../components/ResumeTitle";
import JSONWrapper from "../components/JSONWrapper";
import Fade from "react-reveal/Fade";
import Head from 'next/head'

function Resume({width_v}) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="More about me - Resume"
					content="Find more about my education and skills in topics cloud computing, DevOps and front end development. Read more about my work experience with Kubernetes, Docker, Puppet, Azure, Firebase and Google cloud platform, Python programming, and front end."
				/>
				<title>More about me - Resume</title>
			</Head>
			<Fade>
				{width_v ? <div>
					<ResumeTitle />
					<JSONWrapper screen={false} />
				</div> : <Tabs screen={true}/>}
			</Fade>
		</>
	);
}

export default Resume;
