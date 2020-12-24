//require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });

module.exports = {
	distDir: "build",
	webpack: (config, { isServer }) => {
    		if (isServer) {
			//require('./pages/sitemap.xml.js');
      			require('./scripts/generate-sitemap');
    		}

    	return config;
  	}
};
