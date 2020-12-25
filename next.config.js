//require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });
const withMDX = require('@next/mdx'){};

module.exports = {
	distDir: "build",
	webpack: (config, { isServer }) => {
    		if (isServer) {
      			require('./scripts/generate-sitemap');
    		}

    	return config;
  	},
	withMDX({
		pageExtensions: ['js', 'mdx']
	})
};
