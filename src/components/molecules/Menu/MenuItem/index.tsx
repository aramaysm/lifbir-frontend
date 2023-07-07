import React, { FC } from "react";
import MenuItem from "@mui/material/MenuItem";

import { StyleObject } from "@components/types";

interface IProps {
    children: React.ReactElement;
    clickHandler?: React.MouseEventHandler<HTMLLIElement>;
    style?: StyleObject;
}

const Index: FC<IProps> = ({ children, clickHandler, style }) => {
    return (
        <MenuItem onClick={clickHandler} sx={style}>
            {children}
        </MenuItem>
    );
};

export default Index;