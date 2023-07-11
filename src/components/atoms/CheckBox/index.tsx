import { StyleObject, TextFieldSizeEnum } from "@components/types";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { FC } from "react";

interface IProps {
    label?: string;
    id?: string;
    disabled?: boolean;
    placeholder?: string;
    style?: StyleObject;
    fullWidth?: boolean;
    size?: TextFieldSizeEnum;
    onChange: ()=> void;
    checked: boolean;
    
}

const Index: FC<IProps> = ({
    label,
    id,
    placeholder,
    style,
    fullWidth,
    size,
   onChange,
   checked,
}) => {
    
    
    return (
        <FormControlLabel style={style} control={<Checkbox defaultChecked 
            checked={checked}
            sx={{
                    '&.Mui-checked': {
                    color: "secondary.main",
                    },
                }}
        onChange={onChange} />} label={label} />
    );
};

Index.defaultProps = {
    disabled: false,
    fullWidth: false,
    size: TextFieldSizeEnum.MEDIUM,
};

export default Index;