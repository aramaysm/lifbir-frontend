
import React, { FC } from "react";

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputProps as MuiInputProps } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';
import {
    StyleObject,
    TextFieldSizeEnum,
    TextFieldVariantEnum,
    TypeText,
} from "@components/types";
import { RadioButtonType } from "@models";


interface IProps {
    label?: string;
   color?:string;
    style?: StyleObject;
    variant?: TextFieldVariantEnum;
    fullWidth?: boolean;
    size?: TextFieldSizeEnum;
    name?: string;
    items: readonly RadioButtonType[];
    
}

const Index: FC<IProps> = ({
    label,
    style,
    variant,
    fullWidth,
    size,
    name,
    items,    
}) => {

    const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
   
    return (
   
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    {
        items.map((item)=>
            <FormControlLabel key={item.label} value={item.value} control={<Radio />} 
            label={item.label} />        
        )
    }
    
      
  </RadioGroup>
</FormControl>
    );
};

Index.defaultProps = {
    variant: TextFieldVariantEnum.STANDARD,
     fullWidth: false,
    size: TextFieldSizeEnum.MEDIUM,
};

export default Index;

