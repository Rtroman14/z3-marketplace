import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider(props) {
    const [filters, setFilters] = useState(["Whitelist", "NFT", "Tangible", "VR Oculus"]);

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {props.children}
        </FilterContext.Provider>
    );
}
