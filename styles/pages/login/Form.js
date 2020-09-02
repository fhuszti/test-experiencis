import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: "flex-end",
	},
	input: {
		marginBottom: "1rem",
	},
	button: {
		marginTop: "1rem",
	}
}));