import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(theme => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '50vh',
		maxHeight: '300px',
		backgroundImage: 'url(media/images/hero_login.jpg)',
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
		
		[theme.breakpoints.up('xl')]: {
			backgroundImage: 'url(media/images/hero_login_large.jpg)',
		},
		[theme.breakpoints.down('sm')]: {
			backgroundImage: 'url(media/images/hero_login_small.jpg)',
		},
	},
}));