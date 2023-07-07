import React, { FC } from "react";
import Menu from "@mui/material/Menu";

import {
    PopoverHorizontalEnum,
    PopoverOrigin,
    PopoverVerticalEnum,
    StyleObject,
} from "@components/types";

interface IProps {
    id?: string;
    anchorEl?: HTMLElement | null;
    anchorOrigin?: PopoverOrigin;
    children: React.ReactElement[] | React.ReactElement;
    keepMounted?: boolean;
    transformOrigin?: PopoverOrigin;
    closeHandler?: (event: unknown, reason: string) => void;
    style?: StyleObject;
}

const Index: FC<IProps> = ({
    id,
    anchorEl,
    anchorOrigin,
    children,
    closeHandler,
    keepMounted,
    style,
}) => {
    return (
        <Menu
            id={id}
            anchorEl={anchorEl}
            anchorOrigin={anchorOrigin}
            onClose={closeHandler}
            open={Boolean(anchorEl)}
            keepMounted={keepMounted}
            sx={style}
        >
            {children}
        </Menu>
    );
};

Index.defaultProps = {
    anchorOrigin: {
        horizontal: PopoverHorizontalEnum.LEFT,
        vertical: PopoverVerticalEnum.TOP,
    },
    keepMounted: false,
};

export default Index;