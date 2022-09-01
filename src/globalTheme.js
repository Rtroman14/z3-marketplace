import { createTheme } from "@mui/material/styles";

const headerFont = "Titillium Web";
const bodyFont = "Montserrat";

export const globalTheme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                color: "primary",
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    borderRadius: "3px",
                    fontSize: "10px",
                    backgroundColor: "#fff",
                    color: "black",
                    "&:hover": {
                        backgroundColor: "rgba(255,255,255,.8)",
                    },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: "small",
                variant: "outlined",
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "3px",
                },
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: "medium",
                sx: {
                    ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
                        borderRadius: "6px",
                    },
                },
            },
            styleOverrides: {
                root: {
                    borderRadius: "6px",
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 3,
            },
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    padding: "0px !important",
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                columnHeaders: {
                    backgroundColor: "#F4F7F9",
                },
            },
        },
        MuiSvgIcon: {
            defaultProps: {
                fontSize: "small",
            },
        },
    },
    typography: {
        fontFamily: bodyFont,
        h1: {
            fontFamily: headerFont,
        },
        h2: {
            fontFamily: headerFont,
            fontSize: "1.3rem",
        },
        h3: {
            fontFamily: headerFont,
        },
        h4: {
            fontFamily: headerFont,
        },
        h5: {
            fontFamily: headerFont,
        },
        h6: {
            fontFamily: headerFont,
        },
        body1: {
            // fontSize: "14px"
        },
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#0A1929",
        },
        secondary: {
            main: "#F4F7F9",
        },
        hover: {
            light: "",
            dark: "rgba(255,255,255,.2)",
        },
    },
    shape: {
        // borderRadius: 8
    },
});
