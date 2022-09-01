import { useState, useContext } from "react";

import { FilterContext } from "../../context/FilterContext";

import { ListItem, ListItemButton, ListItemText, Checkbox } from "@mui/material";

export default function Filter({ title }) {
    const { filters, setFilters } = useContext(FilterContext);
    const [selected, setSelected] = useState(true);

    const selectFilter = () => {
        setSelected(!selected);

        if (!selected) {
            setFilters([...filters, title]);
        } else {
            const newFilters = filters.filter((f) => f !== title);
            setFilters(newFilters);
        }
    };

    return (
        <ListItem
            sx={{ backgroundColor: "background.paper" }}
            onClick={selectFilter}
            disablePadding
            secondaryAction={
                <Checkbox
                    edge="end"
                    checked={selected}
                    style={{
                        color: "#fff",
                    }}
                />
            }>
            <ListItemButton>
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );
}
