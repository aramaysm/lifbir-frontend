import React, { FC } from "react";
import MuiCardActions from "@mui/material/CardActions";

import { ReactElementNull, StyleObject } from "@components/types";

interface IProps {
    children: ReactElementNull | ReactElementNull[];
    style?: StyleObject;
}

const Index: FC<IProps> = ({ children, style }) => {
    return <MuiCardActions sx={style}>{children}</MuiCardActions>;
};

export default Index;