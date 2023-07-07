import React, { FC } from "react";
import { InputBase, InputProps } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import { Adornment, EdgePosEnum, StyleObject } from "@components/types";

interface IProps {
    placeholder?: string;
    style?: StyleObject;
    adornment?: Adornment;
}

const Index: FC<IProps> = ({ placeholder, style, adornment }) => {
    const props: InputProps = {};
    if (adornment && adornment.position === EdgePosEnum.START) {
        props.startAdornment = (
            <InputAdornment position={EdgePosEnum.START}>
                {adornment.adornment}
            </InputAdornment>
        );
    } else if (adornment) {
        props.endAdornment = (
            <InputAdornment position={EdgePosEnum.END}>
                {adornment.adornment}
            </InputAdornment>
        );
    }

    return (
        <InputBase
            sx={style}
            placeholder={placeholder}
            inputProps={{ "aria-label": "search google maps" }}
            {...props}
        />
    );
};

export default Index;