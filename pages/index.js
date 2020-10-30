//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React, { useEffect } from "react";
import Nav from "../components/Nav";
import HomePage from "./homePage";
import Blog from "./blog";
import Resume from "./resume";
import Contact from "./contact";
import Project from "./projects";
import { StaticRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  	let width = false;
	useEffect(() => {
		width = window.innerWidth < 1240
	}, []);

	return (
		<div>
			<Router>
				<div className={`App ${!width ? "canvas" : null}`}>
					<div className="content-h-m sm:h-screen sm:flex ">
						<div className="content-sm p-6 md:p-8 lg:w-11/12 lg:p-4">
							<Switch>
								<Route
									path="/" exact
									component={() => <HomePage width_v={width} />}
								></Route>
								<Route
									path="/resume"
									component={() => <Resume width_v={width} />}
								></Route>
								<Route
									path="/contact"
									component={() => <Contact width_v={width} />}
								></Route>
								<Route
									path="/blog"
									component={() => <Blog width_v={width} />}
								></Route>
								<Route
									path="/projects"
									component={() => <Project width_v={width} />}
								></Route>
							</Switch>
						</div>
						<Nav width_v={width} />
					</div>
				</div>
			</Router>
		</div>
	);
}
