import React, { FC } from "react";
import ListItemButton from "@mui/material/ListItemButton";

import { StyleObject } from "@components/types";

interface IProps {
    children: React.ReactElement;
    style?: StyleObject;
}

const Index: FC<IProps> = ({ children, style }) => {
    return <ListItemButton sx={style}>{children}</ListItemButton>;
};

export default Index;