import React, { FC, ReactElement } from "react";
import MuiDialogContent from "@mui/material/DialogContent";

interface IProps {
    children: ReactElement | ReactElement[] | null;
    style?: { [index: string]: string | number } | null;
}

const Index: FC<IProps> = ({ children, style }) => {
    return <MuiDialogContent sx={style}>{children}</MuiDialogContent>;
};

export default Index;