import Nav from "../components/Nav";
import "../styles/tailwind.css";
import "../styles/main.css";
import "../styles/nav.css";
import "../styles/ContactUs.css";
import "../styles/elements.css";
import "../styles/views/home.css";
import "../styles/tabs.css";
import "../styles/title.css";
import "../styles/views/home.css";

import React from "react";

export default function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;
	let width;

	if (typeof window !== "undefined") width = window.innerWidth < 1240;

	return (
		<Layout>
			<div className={`App ${!width ? "canvas" : null}`}>
				<div className="content-h-m sm:h-screen sm:flex ">
					<div className="content-sm p-6 md:p-8 lg:w-11/12 lg:p-4">
						<Component {...pageProps} />
					</div>
					<Nav />
				</div>
			</div>
		</Layout>
	);
}
