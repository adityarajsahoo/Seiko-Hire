import { createTheme } from '@mui/material/styles';
import { brown, lightBlue} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: brown[500],
            extra: "#efebe9"
        },
        secondary: {
            main: brown[800],
            brown: "#bcaaa4"
        },
        third: {
            main: lightBlue[500]
        }
    }
});