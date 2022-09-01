import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";

import Card from "../Card/Card";

import data from "../../../data.json";

import styles from "./Gallary.module.scss";

export default function Gallary() {
    const { filters } = useContext(FilterContext);

    return (
        <div className={styles.container}>
            {data
                .filter((el) => filters.includes(el.type))
                .map((el) => (
                    <Card
                        key={el.id}
                        title={el.name}
                        cost={el.cost}
                        type={el.type}
                        thumbnail={el.thumbnail}
                    />
                ))}
        </div>
        // <div className={styles.container}>
        //     {data.map((el) => (
        //         <Card
        //             key={el.id}
        //             title={el.name}
        //             cost={el.cost}
        //             type={el.type}
        //             thumbnail={el.thumbnail}
        //         />
        //     ))}
        // </div>
    );
}
