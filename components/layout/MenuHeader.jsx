import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useMenuHeaderStyles } from '../../styles/components/layout';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Link from "../Link";

const MenuHeader = () => {
	const classes = useMenuHeaderStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
	
	const renderLoginButton = () => {
		return isMobile ?
			<IconButton color="inherit" aria-label="Se connecter">
				<VpnKeyIcon/>
			</IconButton> :
			<Button color="inherit" startIcon={<VpnKeyIcon/>} component={Link} naked href="/">Se connecter</Button>
	};
	
	return (
		<AppBar position="fixed" className={classes.root}>
			<Toolbar className={classes.toolbar} component="section">
				<Button color="inherit" component={Link} naked href="/">Test Experiencis</Button>
				{renderLoginButton()}
			</Toolbar>
		</AppBar>
	);
};

export default MenuHeader;