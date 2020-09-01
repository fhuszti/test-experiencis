import React, { useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		//Retire le CSS injecté côté serveur
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles)
			jssStyles.parentElement.removeChild(jssStyles);
	}, []);
	
	return (
		<React.Fragment>
			<CssBaseline />
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp
