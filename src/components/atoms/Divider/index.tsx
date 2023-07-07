import React, { FC } from "react";
import MuiDivider from "@mui/material/Divider";

import { OrientationEnum, StyleObject } from "@components/types";

interface IProps {
    orientation?: OrientationEnum;
    style?: StyleObject;
}

const Index: FC<IProps> = ({ orientation, style }) => {
    return (
        <MuiDivider
            sx={style}
            orientation={orientation}
            flexItem={orientation === OrientationEnum.VERTICAL}
        />
    );
};

Index.defaultProps = {
    orientation: OrientationEnum.HORIZONTAL,
};

export default Index;