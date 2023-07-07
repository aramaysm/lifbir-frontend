import React, { FC } from "react";
import Tab from "@mui/material/Tab";

import { TabItem } from "@components/types";

const tabStyle = {
    borderRight: 0,
    padding: (theme: { spacing: (arg0: number, arg1: number) => string }) =>
        theme.spacing(0, 4),
    textTransform: "unset",
    fontSize: (theme: { spacing: (arg0: number) => string }) => theme.spacing(2),
    color: "#ffffff !important",
    fontWeight: 400,
    background: "#00607D",
    opacity: 1,
    letterSpacing: 0.4,
    marginRight: "2px",
    "&.Mui-selected": {
        background: "#019DCC",
        opacity: 1,
    },
    width: "33%",
};

interface IProps {
    tabs: TabItem[];
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Index: FC<IProps> = ({ tabs }) => {
    const tabElement = tabs.map((t, i) => (
        <Tab key={t.id} label={t.label} {...a11yProps(i)} sx={tabStyle} />
    ));
    return <>{tabElement}</>;
};

export default Index;