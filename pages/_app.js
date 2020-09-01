import React, { useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from "../components/layout/Layout";
import theme from "../styles/global/theme";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		//Retire le CSS injecté côté serveur
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles)
			jssStyles.parentElement.removeChild(jssStyles);
	}, []);
	
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default MyApp
