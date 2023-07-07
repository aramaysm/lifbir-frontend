import React, { FC, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import { OverridableStringUnion } from "@mui/types";
import { TabsPropsIndicatorColorOverrides } from "@mui/material/Tabs/Tabs";

import { ColorEnum, StyleObject, TabsVariantEnum } from "@components/types";

interface IProps {
    value?: number;
    variant?: TabsVariantEnum;
    children: React.ReactElement | React.ReactElement[];
    changeHandler?: (event: SyntheticEvent, newValue: number) => void;
    centered?: boolean;
    style?: StyleObject;
    color?: ColorEnum;
    indicatorColor?: OverridableStringUnion<
        "secondary" | "primary",
        TabsPropsIndicatorColorOverrides
    >;
}

const Index: FC<IProps> = ({
    value,
    color,
    changeHandler,
    children,
    style,
    centered,
    variant,
    indicatorColor,
}) => {
    return (
        <Tabs
            value={value}
            textColor={color}
            indicatorColor={indicatorColor}
            onChange={changeHandler}
            variant={variant}
            sx={style}
            centered={centered}
        >
            {children}
        </Tabs>
    );
};

Index.defaultProps = {
    centered: false,
    color: ColorEnum.PRIMARY,
    variant: TabsVariantEnum.STANDARD,
};

export default Index;