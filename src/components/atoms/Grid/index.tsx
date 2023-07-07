import React, { FC } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

import {
    DirectionEnum,
    PositionEnum,
    ReactElementNull,
    StyleObject,
} from "@components/types";

interface IProps {
    container?: boolean;
    children?: ReactElementNull[] | ReactElementNull;
    columnSpacing?: number;
    direction?: DirectionEnum;
    horizontalPosition?: PositionEnum;
    verticalPosition?: PositionEnum;
    rowSpacing?: number;
    style?: StyleObject;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    spacing?: number;
}

const Index: FC<IProps> = ({
    container,
    children,
    direction,
    columnSpacing,
    rowSpacing,
    horizontalPosition,
    verticalPosition,
    style,
    xs,
    sm,
    md,
    lg,
    spacing,
}) => {
    return (
        <Grid2
            container={container}
            direction={direction}
            justifyContent={horizontalPosition}
            alignItems={verticalPosition}
            columnSpacing={columnSpacing}
            rowSpacing={rowSpacing}
            sx={style}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            spacing={spacing}
        >
            {children}
        </Grid2>
    );
};

Index.defaultProps = {
    container: false,
    direction: DirectionEnum.ROW,
    horizontalPosition: PositionEnum.START,
    verticalPosition: PositionEnum.START,
    spacing: 1,
};

export default Index;