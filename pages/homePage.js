import React from "react";
import Title from "../components/Title";
import Head from 'next/head'
import Socials from "../components/Socials";

function Home({ width_v }) {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="alt f4 - DevOps, Frontend, Cloud and Daring opinions"
					content="For DevOps, frontend and cloud computing. I write about IT automation, python, Controversial opinions, UI/UX design and Google Cloud Platform."
				/>
				<title>alt f4 - DevOps, Frontend, Cloud and Daring opinions</title>
			</Head>
			{width_v ? <Title width={width_v} /> : null}
			<Socials width={width_v} />
			<div className="lg:mt-8">
				{ width_v ? (
					<i className="md:text-purple-600 center-across text-teal-900 my-4 text-opacity-75 text-3xl tracking-widest md:text-5xl">
						&bull;&bull;&bull;
					</i>
				) : null}
				<div className={`${width_v ? "flex flex-row px-2" : "flexbox-container"}`}>
					{ width_v ? <div className="md:border-purple-600 border-teal-600 sm:border-green-900 border-l-4 h-auto "></div> : null}
					<p className={`${width_v ? "p2-m md:text-5xl sm:px-3 sm:text-4xl  md:text-purple-900 sm:text-green-900" : "flexbox-item flexbox-item-2"}`}>
					I'm a self-taught programmer with a passion for anything{" "}
								<span>Linux</span>,<span> Networking</span>, <span>DevOps</span> and <span>web development</span>. I
								write about{" "}
								<span>
									Cloud computing</span>, <span>cybersecurity</span>, <span>React.js</span>, <span>Kubernetes{" "}
								</span>
								and much more. Here, I document my projects, interests and a way
								to reach me out. I always try to diversify my Knowledge and
								challenge myself. Stay tuned!!
						<div className="title">
						{!width_v ? <Title width={width_v} /> : null}
						</div>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
