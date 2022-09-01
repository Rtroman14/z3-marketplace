import "../styles/globals.css";

import { ThemeProvider } from "@mui/material/styles";
import { globalTheme } from "../src/globalTheme";

import { FilterProvider } from "../src/context/FilterContext";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={globalTheme}>
            <FilterProvider>
                <Component {...pageProps} />
            </FilterProvider>
        </ThemeProvider>
    );
}
