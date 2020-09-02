import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.secondary.transparent,
		boxShadow: 'none',
	},
	toolbar: {
		display: 'flex',
		justifyContent: "space-between",
	},
}));