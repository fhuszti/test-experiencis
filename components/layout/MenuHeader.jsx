import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from '@material-ui/icons/Person';
import useStyles from '../../styles/components/layout/MenuHeader';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";

const MenuHeader = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	
	const renderLoginButton = () => {
		return isMobile ?
			<IconButton color="inherit" aria-label="Se connecter">
				<PersonIcon/>
			</IconButton> :
			<Button color="inherit" startIcon={<PersonIcon/>}>Connexion</Button>
	};
	
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar component="section">
				<Typography variant="h6" className={classes.title}>
					Test Experiencis
				</Typography>
				{renderLoginButton()}
			</Toolbar>
		</AppBar>
	);
};

export default MenuHeader;