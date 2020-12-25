module.exports = {
	distDir: "build",
	webpack: (config, { isServer }) => {
    		if (isServer) {
      			require('./scripts/generate-sitemap');
    		}

    	return config;
  	},
};
