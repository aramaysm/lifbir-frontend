import React, { FC } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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
import { CountryType } from '@models';

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
    items: readonly any[];
    helperText?: string;
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
    items,
    helperText,
}) => {

    const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
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
   <FormControl variant={variant} sx={{ m: 1, minWidth: 120 }} fullWidth={fullWidth}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select size={size} style={style}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          placeholder={placeholder}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {
            items.map((item:any) => 
                <MenuItem key={item.id} value={item.label}>{item.label}</MenuItem>  
           )}          
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
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