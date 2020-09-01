import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from '@material-ui/icons/Person';
import useStyles from '../../styles/components/layout/MenuHeader';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Link from "../Link";

const MenuHeader = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	
	const renderLoginButton = () => {
		return isMobile ?
			<IconButton color="inherit" aria-label="Se connecter">
				<PersonIcon/>
			</IconButton> :
			<Button color="inherit" startIcon={<PersonIcon/>} component={Link} naked href="/">Connexion</Button>
	};
	
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar className={classes.toolbar} component="section">
				<Button color="inherit" component={Link} naked href="/">Test Experiencis</Button>
				{renderLoginButton()}
			</Toolbar>
		</AppBar>
	);
};

export default MenuHeader;