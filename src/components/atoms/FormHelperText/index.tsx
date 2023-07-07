import React, { FC } from "react";
import MuiFormHelperText from "@mui/material/FormHelperText";
import { StyleObject } from "@components/types";

interface IProps {
    style: StyleObject;
    error?: boolean;
    focused?: boolean;
    children: React.ReactNode;
}

const Index: FC<IProps> = ({ style, error, focused, children }) => {
    return (
        <MuiFormHelperText sx={style} error={error} focused={focused}>
            {children}
        </MuiFormHelperText>
    );
};

Index.defaultProps = {
    error: false,
    focused: false,
};

export default Index;