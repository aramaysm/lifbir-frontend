import React, { FC } from "react";
import Container from "@mui/material/Container";

import { StyleObject, BreakpointEnum } from "@components/types";

interface IProps {
    children: React.ReactElement;
    fixed?: boolean;
    maxWidth?: false | BreakpointEnum;
    style?: StyleObject;
}

const Index: FC<IProps> = ({ maxWidth, style, children }) => {
    return (
        <Container maxWidth={maxWidth} sx={style}>
            {children}
        </Container>
    );
};

Index.defaultProps = {
    fixed: false,
};

export default Index;