import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import { InputProps as MuiInputProps } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import {
    Adornment,
    ColorEnum,
    EdgePosEnum,
    StyleObject,
    TextFieldSizeEnum,
    TextFieldVariantEnum,
    TypeText,
} from "@components/types";

interface IProps {
    label?: string;
    value?:string;
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
    color: ColorEnum;
    onChange?: (event:any)=> void;
    multiline?:boolean;
    rows?: number;
}

const Index: FC<IProps> = ({
    label,
    id,
    value,
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
    color,
    onChange,
    multiline,
    rows,
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
            value={value}
            color={color}
            onChange={onChange}
            multiline
            maxRows={rows}
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