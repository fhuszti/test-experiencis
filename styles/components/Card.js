import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(theme => ({
	root: props => ({
		maxWidth: props.maxWidth,
		width: '100%',
		borderBottom: `5px solid ${props.color}`,
	}),
	avatar: props => ({
		backgroundColor: props.color,
		color: theme.palette.getContrastText(props.color),
	}),
}));