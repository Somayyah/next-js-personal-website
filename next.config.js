//require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });
const withMDX = require('@next/mdx'){};

module.exports = {
	distDir: "build",
	webpack: (config, { isServer }) => {
    		if (isServer) {
<<<<<<< HEAD
=======
			//require('./pages/sitemap.xml.js');
>>>>>>> 9122d147537e46a7eb95386a52d67696805cd7c8
      			require('./scripts/generate-sitemap');
    		}

    	return config;
<<<<<<< HEAD
  	},
	withMDX({
		pageExtensions: ['js', 'mdx']
	})
=======
  	}
>>>>>>> 9122d147537e46a7eb95386a52d67696805cd7c8
};
