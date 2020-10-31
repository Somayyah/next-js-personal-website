import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import HomePage from "../pages/homePage";
import Blog from "../pages/blog";
import Resume from "../pages/resume";
import Contact from "../pages/contact";
import Project from "../pages/projects";

export default function Home() {
	let width = window.innerWidth < 1240;;
	/*useEffect(() => {
		width = window.innerWidth < 1240;
	}, []);*/

	const [page, setPage] = useState("/");

	return (
		<div>
			<div className={`App ${!width ? "canvas" : null}`}>
				<div className="content-h-m sm:h-screen sm:flex ">
					<div className="content-sm p-6 md:p-8 lg:w-11/12 lg:p-4">
						<HomePage width_v={width} />
						<Blog width_v={width} />
					</div>
					<Nav width_v={width} />
				</div>
			</div>
		</div>
	);
}

/*

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
*/
