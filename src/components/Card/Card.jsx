import { useState } from "react";
import Image from "next/image";

import { Card, CardActions, CardContent, Button, Typography, Stack, Chip } from "@mui/material";

import nftImg from "../../../assets/img/bayc.png";
import ticketImg from "../../../assets/img/ticket.png";
import vrImg from "../../../assets/img/vr.jpg";
import giantsImg from "../../../assets/img/barkley-jersey.jpeg";

import styles from "./Card.module.scss";

const imgObj = {
    Whitelist: ticketImg,
    NFT: nftImg,
    "VR Oculus": vrImg,
    Tangible: giantsImg,
};

export default function ImgMediaCard({ title, cost, type, thumbnail }) {
    const [hover, setHover] = useState(3);

    const mouseOver = () => setHover(9);
    const mouseLeave = () => setHover(3);

    return (
        <Card
            className={styles.card}
            elevation={hover}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}>
            <Image src={imgObj[type]} alt="Picture of the author" width={500} height={500} />

            <CardContent>
                <Typography className={styles.title} gutterBottom variant="h5" component="h5">
                    {title}
                </Typography>
                <Stack direction="row" alignItems="center">
                    <Typography className={styles.price} gutterBottom variant="h5" component="h5">
                        Price:{" "}
                    </Typography>
                    <Typography className={styles.cost} variant="body2" color="text.secondary">
                        {cost.toLocaleString("en-US")} $Z3
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions className={styles.actions}>
                <Button className={styles.button} size="small">
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}
