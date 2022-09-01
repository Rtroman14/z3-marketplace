// import { useState } from "react";
// import Image from "next/image";

// import gembox from "../../../assets/img/gembox.jpg.png";

// export default function Gembox() {
//     return (
//         <div style={{ width: "500px", height: "500px", position: "relative" }}>
//             <Image src={gembox} alt="Gembox" layout="fill" objectFit="contain" />
//         </div>
//     );
// }

import { useState } from "react";
import Image from "next/image";

import { Card, CardActions, CardContent, Button, Typography, Stack, Chip } from "@mui/material";

import gembox from "../../../assets/img/gembox.jpg.png";

import styles from "./Gembox.module.scss";

export default function GemboxCard({ title, cost }) {
    const [hover, setHover] = useState(3);

    const mouseOver = () => setHover(9);
    const mouseLeave = () => setHover(3);

    return (
        <Card
            className={styles.card}
            elevation={hover}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}>
            <div className={styles.image}>
                <Image src={gembox} alt="Gembox" layout="fill" objectFit="contain" />
            </div>
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
                    Open
                </Button>
            </CardActions>
        </Card>
    );
}
