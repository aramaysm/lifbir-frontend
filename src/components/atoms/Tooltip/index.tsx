import React, { FC } from "react";
import Tooltip from "@mui/material/Tooltip";

interface IProps {
    children: React.ReactElement;
    title: string;
}

const Index: FC<IProps> = ({ title, children }) => {
    return (
        <Tooltip title={title}>
            <>{children}</>
        </Tooltip>
    );
};

export default Index;