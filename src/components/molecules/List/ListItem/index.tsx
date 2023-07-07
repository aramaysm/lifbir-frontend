import React, { FC } from "react";
import ListItem from "@mui/material/ListItem";

interface IProps {
    disablePadding?: boolean;
    children: React.ReactElement;
}

const Index: FC<IProps> = ({ disablePadding, children }) => {
    return <ListItem disablePadding={disablePadding}>{children}</ListItem>;
};

Index.defaultProps = {
    disablePadding: false,
};

export default Index;