import React from "react";
import Head from "next/head";

function Blog() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="Blog - alt f4"
					content="Read about technologies and topics like cloud computing, DevOps, react front end development. Find tips about Kubernetes, Docker, Puppet, Azure, Firebase and Google cloud platform. Explore tutorials on Python programming, and front end."
				/>
				<title>Blog - alt f4</title>
			</Head>
			<div className="center-across">
				<h1
					className={
						"md:text-purple-900 sm:text-green-900 sm:pt-56 text-4xl sm:text-6xl font-serif lg:text-mammoth lg:py-1 py-10 text-teal-600"
					}
				>
					My Personal Blog
				</h1>
				<p className="sm:text-6xl sm:text-green-500 md:text-purple-600 text-2xl font-serif text-teal-600 lg:text-mammoth lg:text-pink-600">
					Soon :)
				</p>
			</div>
		</>
	);
}

export default Blog;
