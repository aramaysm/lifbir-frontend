import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { InputProps as MuiInputProps } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import {
    Adornment,
    EdgePosEnum,
    StyleObject,
    TextFieldSizeEnum,
    TextFieldVariantEnum,
    TypeText,
} from "@components/types";

interface IProps {
    label?: string;
    id?: string;
    disabled?: boolean;
    placeholder?: string;
    style?: StyleObject;
    adornment?: Adornment;
    inputProps?: object;
    InputProps?: object;
    InputLabelProps?: object;
    variant?: TextFieldVariantEnum;
    fullWidth?: boolean;
    size?: TextFieldSizeEnum;
    typeText?: TypeText;
    name?: string;
}

const Index: FC<IProps> = ({
    label,
    id,
    adornment,
    placeholder,
    style,
    variant,
    InputProps,
    inputProps,
    fullWidth,
    size,
    typeText,
    name,
}) => {
    const inputComponentProps: MuiInputProps = InputProps
        ? { ...InputProps }
        : {};
    if (adornment && adornment.position === EdgePosEnum.START) {
        inputComponentProps.startAdornment = (
            <InputAdornment position={EdgePosEnum.START}>
                {adornment.adornment}
            </InputAdornment>
        );
    } else if (adornment) {
        inputComponentProps.endAdornment = (
            <InputAdornment position={EdgePosEnum.END}>
                {adornment.adornment}
            </InputAdornment>
        );
    }
    return (
        <TextField
            label={label}
            id={id}
            placeholder={placeholder}
            sx={style}
            inputProps={inputProps}
            InputProps={inputComponentProps}
            variant={variant}
            fullWidth={fullWidth}
            size={size}
            type={typeText}
            name={name}
        />
    );
};

Index.defaultProps = {
    variant: TextFieldVariantEnum.STANDARD,
    disabled: false,
    fullWidth: false,
    typeText: TypeText.TEXT,
    size: TextFieldSizeEnum.MEDIUM,
};

export default Index;