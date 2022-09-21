import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Box, Container, Typography, Button, Grid } from "@mui/material";

import styles from "../styles/Home.module.css";
import gemboxStyles from "../src/components/Gembox/Gembox.module.scss";

import Marketplace from "../src/components/Marketplace/Marketplace";
import Gembox from "../src/components/Gembox/Gembox";

import marketplaceImage from "../assets/img/marketplace.png";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Z3-Marketplace</title>
            </Head>

            <div className={styles.image}>
                <Image
                    alt="Marketplace"
                    src={marketplaceImage}
                    layout="fill"
                    objectFit="cover"
                    style={{ filter: "blur(10px)" }}
                />
            </div>

            <div className={styles.connect}>
                <Button size="medium">Connect</Button>
            </div>

            <Typography
                className={styles.title}
                gutterBottom
                variant="h1"
                component="h1"
                sx={{ fontFamily: "Skygraze !important" }}>
                Marketplace
            </Typography>

            <Container maxWidth="xl">
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0.5)" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#fff",
                                    color: "#fff",
                                },
                            }}
                            sx={{
                                "& button": {
                                    color: "#fff",
                                    borderRadius: "8px 8px 0 0",
                                },
                                "& button:hover": {
                                    backgroundColor: "rgba(255,255,255,.1)",
                                },
                                "& button:focus": {
                                    backgroundColor: "rgba(255,255,255,.1)",
                                },
                                "& button:active": {
                                    backgroundColor: "rgba(255,255,255,.1)",
                                },
                                "& button.Mui-selected": {
                                    color: "#fff",
                                },
                            }}>
                            <Tab label="Marketplace" {...a11yProps(0)} />
                            <Tab label="Gemboxes" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Marketplace />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container maxWidth="xl" sx={{ padding: "0px" }}>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} sx={{ margin: "0 auto" }}>
                                        <div className={gemboxStyles.container}>
                                            <Gembox title="Diamond" cost={1000} />
                                            <Gembox title="Zircon" cost={500} />
                                            <Gembox title="Amethyst" cost={200} />
                                            <Gembox title="Sapphire" cost={50} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </TabPanel>
                </Box>

                <footer className={styles.footer}>
                    <span>ZUKU</span>
                </footer>
            </Container>
        </div>
    );
}
