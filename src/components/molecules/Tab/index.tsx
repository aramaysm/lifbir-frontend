import React, { FC, SyntheticEvent } from "react";
import Tab from "@mui/material/Tab";

import { ColorEnum, TabsVariantEnum, TabItem } from "@components/types";
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
};

const Index: FC<Props> = ({ centered, tabs, valueSelected, changeHandler }) => {
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
                color={ColorEnum.INHERIT}
                style={stylesTabs}
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