import React, { FC, MouseEventHandler } from "react";
import IconButton from "@mui/material/IconButton";

import {
    ButtonSizeEnum,
    ColorEnum,
    EdgePosEnum,
    StyleObject,
} from "@components/types";

interface IProps {
    children: React.ReactElement;
    color?: ColorEnum;
    size?: ButtonSizeEnum;
    edge?: EdgePosEnum;
    ariaLabel?: string;
    ariaControls?: string;
    ariaHaspopup?: boolean;
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
    style?: StyleObject;
}

const Index: FC<IProps> = ({
    ariaLabel,
    ariaHaspopup,
    ariaControls,
    color,
    children,
    clickHandler,
    edge,
    size,
    style,
}) => {
    return (
        <IconButton
            aria-label={ariaLabel}
            aria-haspopup={ariaHaspopup}
            aria-controls={ariaControls}
            color={color}
            edge={edge}
            size={size}
            onClick={clickHandler}
            sx={style}
        >
            {children}
        </IconButton>
    );
};

Index.defaultProps = {
    color: ColorEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
};

export default Index;