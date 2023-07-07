import React, { FC } from "react";
import Stack from "@mui/material/Stack";

import { Divider } from "@components/index";
import {
    DirectionEnum,
    OrientationEnum,
    PositionEnum,
    ReactElementNull,
    ResponsiveDirection,
    ResponsivePosition,
    StyleObject,
} from "@components/types";

interface IProps {
    children: ReactElementNull | ReactElementNull[];
    direction?: DirectionEnum | ResponsiveDirection;
    divider?: boolean;
    spacing?: number;
    horizontalPosition?: PositionEnum | ResponsivePosition;
    verticalPosition?: PositionEnum | ResponsivePosition;
    style?: StyleObject;
}

const Index: FC<IProps> = ({
    children,
    direction,
    divider,
    horizontalPosition,
    spacing,
    verticalPosition,
    style,
}) => {
    let dividerContent = null;
    if (divider && direction === DirectionEnum.COLUMN) {
        dividerContent = <Divider />;
    } else if (divider) {
        dividerContent = <Divider orientation={OrientationEnum.VERTICAL} />;
    }
    return (
        <Stack
            divider={dividerContent}
            spacing={spacing}
            justifyContent={horizontalPosition}
            direction={direction}
            alignItems={verticalPosition}
            sx={style}
        >
            {children}
        </Stack>
    );
};

Index.defaultProps = {
    direction: DirectionEnum.COLUMN,
    horizontalPosition: PositionEnum.START,
    verticalPosition: PositionEnum.START,
    divider: false,
    spacing: 1,
};

export default Index;