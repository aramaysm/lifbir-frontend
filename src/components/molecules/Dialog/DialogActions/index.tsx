import React, { FC, ReactElement } from "react";
import MuiDialogActions from "@mui/material/DialogActions";

interface IProps {
    children: ReactElement | ReactElement[] | null;
    style?: { [index: string]: string | number } | null;
}

const Index: FC<IProps> = ({ children, style }) => {
    return <MuiDialogActions sx={style}>{children}</MuiDialogActions>;
};

export default Index;