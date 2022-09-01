import { Box, Grid, Paper, Container } from "@mui/material";

import Filters from "../Filters/Filters";
import Gallary from "../Gallery/Gallary";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function Marketplace() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <Filters />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Gallary />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
