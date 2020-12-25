const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

<<<<<<< HEAD
const robot = `User-agent: *
Sitemap: https://alt-f4.netlify.app/sitemap.xml`

=======
>>>>>>> 9122d147537e46a7eb95386a52d67696805cd7c8
(async () => {
	const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = await globby([
		"pages/**/*{.js,.mdx}",
		"!pages/_*.js",
		"!pages/api",
	]);
	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
							.map((page) => {
								const path = page
									.replace("pages", "")
									.replace(".js", "")
									.replace(".mdx", "");
								const route = path === "/index" ? "" : path;

								return `
                        <url>
                            <loc>${`https://alt-f4.netlify.app${route}`}</loc>
                        </url>
                    `;
							})
							.join("")}
        </urlset>
    `;

	// If you're not using Prettier, you can remove this.
	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: "html",
	});

	fs.writeFileSync("public/sitemap.xml", formatted);
<<<<<<< HEAD
	fs.writeFileSync("public/robots.txt", robot);
=======
>>>>>>> 9122d147537e46a7eb95386a52d67696805cd7c8
})();
