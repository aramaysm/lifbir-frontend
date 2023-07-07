// Create a theme instance.
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: {
            main: "#d9dbdc",
        },
        secondary: {
            main: "#e900ca",
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: "#333333",
        },
    },
});

theme = createTheme(theme, {
    palette: {
        tertiary: {
            main: "#00e9ab",
        },
        quarter: {
            main: "#0049ff",
        },
        text: {
            main: "#333333",
        },
        customGrey: {
            main: "#6B6C6F",
        },
        lightPink: {
            main: "#e075d2",
        },
        blackText: {
            main: "#000000cc",
        },
        greyText: {
            main: "#666666",
        },
        ligthText: {
            main: "#f0f2f5",
        },
        hover: {
            main: "#ef0f4f",
        },
    },
});

export default theme;