import React, { FC } from "react";
import ListItemText from "@mui/material/ListItemText";

interface IProps {
    primary: string;
    secondary?: string;
}

const Index: FC<IProps> = ({ primary, secondary }) => {
    return <ListItemText primary={primary} secondary={secondary} />;
};

export default Index;