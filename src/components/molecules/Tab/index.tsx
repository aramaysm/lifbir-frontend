import React, { FC, SyntheticEvent } from "react";
import Tab from "@mui/material/Tab";
import { a11yProps } from "@util/util";
import { ColorEnum, TabsVariantEnum, TabItem, StyleObject } from "@components/types";
import { Box, Tabs } from "@components";

import {
    tabStyle,
    stylesTabs,
    stylesBox,
} from "@components/molecules/Tab/styles";

type Props = {
    centered: boolean;
    valueSelected: number;
    changeHandler: (event: SyntheticEvent, newValue: number) => void;
    tabs: TabItem[];
    styleTabsProps?: any;
};

const Index: FC<Props> = ({ centered, tabs, valueSelected, 
    changeHandler,styleTabsProps }) => {
    const tabsContent = tabs.map((t, i) => (
        <Tab key={i} label={t.label} {...a11yProps(i)} sx={tabStyle} />
    ));

    return (
        <Box sx={stylesBox}>
            <Tabs
                value={valueSelected}
                changeHandler={changeHandler}
                centered={centered}
                variant={TabsVariantEnum.FULLWIDTH}
                color={ColorEnum.PRIMARY}
                style={styleTabsProps ? styleTabsProps : stylesTabs}
            >
                {tabsContent}
            </Tabs>
        </Box>
    );
};

Index.defaultProps = {
    centered: false,
};

export default Index;