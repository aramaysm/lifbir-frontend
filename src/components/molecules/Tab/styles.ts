export const tabStyle = {
    borderRight: 0,
    padding: (theme: { spacing: (arg0: number, arg1: number) => unknown }) =>
        theme.spacing(0, 4),
    textTransform: "unset",
    fontSize: {xs:"16px",md:"18px"},
    color: "#ffffff !important",
    fontWeight: "bold",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    opacity: 1,
    letterSpacing: 0.4,
    marginRight: "2px",
    ":hover": {
        borderBottom: "2px solid white",
        opacity: 1,
    },
    "&.Mui-selected": {
        borderBottom: "2px solid white",
    },
    width: "33%",
    minHeight: "32px",
};

export const stylesBox = {
    width: "100%",
    bgcolor: "transparent",
    height: "100%",
};

export const stylesTabs = {
    "& .MuiTabs-indicator": {
        backgroundColor: "inherit",
        bottom: "0px",
    },
    minHeight: "32px",
};