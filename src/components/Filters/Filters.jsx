import { Box, List } from "@mui/material";

import Filter from "../Filter/Filter";

export default function Filters() {
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <List>
                {["Whitelist", "NFT", "Tangible", "VR Oculus"].map((el) => (
                    <Filter key={el} title={el} />
                ))}
            </List>
        </Box>
    );
}
