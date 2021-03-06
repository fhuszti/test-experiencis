import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';
import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="fr">
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// On s'assure que le front et le serveur s'accordent sur le JSS
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
	
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});
	
	const initialProps = await Document.getInitialProps(ctx);
	
	return {
		...initialProps,
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};

export default MyDocument;