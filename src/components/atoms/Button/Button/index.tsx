import React, { FC, MouseEventHandler } from "react";
import Button from "@mui/material/Button";

import {
    ButtonSizeEnum,
    ButtonVariantEnum,
    ColorEnum,
    StyleObject,
} from "@components/types";

interface IProps {
    color?: ColorEnum;
    size?: ButtonSizeEnum;
    variant?: ButtonVariantEnum;
    label: string;
    style?: StyleObject;
    startIcon?: React.ReactElement;
    clickHandler?: MouseEventHandler;
    disabled?: boolean;
}

const Index: FC<IProps> = ({
    color,
    clickHandler,
    label,
    size,
    startIcon,
    variant,
    style,
    disabled,
}) => {
    return (
        <Button
            type="submit"
            disabled={disabled}
            color={color}
            size={size}
            variant={variant}
            sx={style}
            startIcon={startIcon}
            onClick={clickHandler}
        >
            {label}
        </Button>
    );
};

Index.defaultProps = {
    color: ColorEnum.PRIMARY,
    size: ButtonSizeEnum.MEDIUM,
    variant: ButtonVariantEnum.CONTAINED,
    disabled: false,
};

export default Index;