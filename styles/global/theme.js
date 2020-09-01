import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'hsl(120, 100%, 14%)',
		},
		secondary: {
			main: 'hsl(120, 3%, 45%)',
		},
		background: {
			default: 'hsl(120, 3%, 96%)',
		},
	},
});

export default theme;