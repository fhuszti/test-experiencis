import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'hsl(120, 100%, 14%)',
			transparent: 'hsla(120, 100%, 14%, 0.15)'
		},
		secondary: {
			main: 'hsl(120, 3%, 45%)',
			transparent: 'hsla(120, 3%, 45%, 0.15)'
		},
		background: {
			default: 'hsl(120, 3%, 96%)',
		},
	},
});

export default theme;