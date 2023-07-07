import React, { FC } from "react";
import CardContent from "@mui/material/CardContent";

import { ReactElementNull, StyleObject } from "@components/types";

interface IProps {
    children: ReactElementNull | ReactElementNull[];
    style?: StyleObject;
}

const Index: FC<IProps> = ({ children, style }) => {
    return <CardContent sx={style}>{children}</CardContent>;
};

export default Index;