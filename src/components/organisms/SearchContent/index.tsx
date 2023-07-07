import React, { SyntheticEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import image from "@public/images/Curve.svg"
import { EdgePosEnum, ImageLayoutEnum, ImageObjectFitEnum, TabItem } from "@components/types";
import { Box, IconButton, InputBase, Tab, Typography,Image } from "@components";
import {
    stylesBoxText,
    stylesText,
    stylesBoxTabs,
    stylesBoxSearch,
    stylesSearch,
    stylesBoxCurve,
    stylesHR
} from "@components/organisms/SearchContent/styles";

const tabs: TabItem[] = [
    { id: 1, label: "Venta" },
    { id: 2, label: "Permuta" },
    { id: 3, label: "Renta" },
];

const text: TabItem[] = [
    { id: 0, label: "nueva casa" },
    { id: 1, label: "permuta" },
    { id: 2, label: "mejor renta" },
];

export default function Index() {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ position: "relative" }}>
            <Box sx={stylesBoxText}>
                <Typography gutterBottom variant="h5" component="div" sx={stylesText}>
                    {"Encuentre su "+text[value].label}                  
                    <hr align="right" style={stylesHR}/>
                              
                </Typography>
            </Box>
            <Box sx={stylesBoxTabs}>
                <Tab
                    centered={true}
                    tabs={tabs}
                    valueSelected={value}
                    changeHandler={handleChange}
                />
            </Box>

            <Box sx={stylesBoxSearch}>
                <InputBase
                    style={stylesSearch}
                    placeholder={"Codigo postal, Estado, Pais"}
                    adornment={{
                        position: EdgePosEnum.END,
                        adornment: (
                            <IconButton edge={EdgePosEnum.END} aria-label="search">
                                <SearchIcon sx={{ color: "secondary.main" }} />
                            </IconButton>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
}