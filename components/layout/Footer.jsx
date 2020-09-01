import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
	return (
		<Container component="footer" maxWidth="sm">
			<Typography component="p" variant="body2" color="textSecondary" align="center">
				©{new Date().getFullYear()} Test Experiencis
			</Typography>
		</Container>
	);
};

export default Footer;