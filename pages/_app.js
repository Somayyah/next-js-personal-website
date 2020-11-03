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
import { PageTransition } from "next-page-transitions";
import { BlockRotateLoading } from "react-loadingg";

import React, { useEffect } from "react";

const TIMEOUT = 300;

export default function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout ? Component.Layout : React.Fragment;
	let width;

	useEffect(() => {
		width = window.innerWidth < 1240;
	}, []);

	return (
		<Layout>
			<Nav width_v={width} />
			<div className={`App ${!width ? "canvas" : null}`}>
				<div className="content-h-m sm:h-screen sm:flex ">
					<div className="content-sm p-6 md:p-8 lg:w-11/12 lg:p-4"></div>
					<PageTransition
						timeout={TIMEOUT}
						classNames="page-transition"
						loadingComponent={<BlockRotateLoading />}
						loadingDelay={0}
						loadingTimeout={{
							enter: 0,
							exit: 0,
						}}
						loadingClassNames="loading-indicator"
					>
						<Component {...pageProps} />
					</PageTransition>
				</div>
			</div>
			<style jsx global>{`
				.page-transition-enter {
					opacity: 0;
					transform: translate3d(0, 20px, 0);
				}
				.page-transition-enter-active {
					opacity: 1;
					transform: translate3d(0, 0, 0);
					transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
				}
				.page-transition-exit {
					opacity: 1;
				}
				.page-transition-exit-active {
					opacity: 0;
					transition: opacity ${TIMEOUT}ms;
				}
				.loading-indicator-appear,
				.loading-indicator-enter {
					opacity: 0;
				}
				.loading-indicator-appear-active,
				.loading-indicator-enter-active {
					opacity: 1;
					transition: opacity ${TIMEOUT}ms;
				}
			`}</style>
		</Layout>
	);
}
