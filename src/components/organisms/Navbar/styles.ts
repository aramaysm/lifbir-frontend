import { TypeDisplay } from "@components/types";

export const styleIconButton = {
    p: 1,
    m: 0.5,
    
    borderRadius: "6px",   
    "& :hover": {
        color: "hover.main",
    },
    "&:hover": {
        borderColor: "hover.main",
    },
};

export const styleIcon = {
    color: "secondary.main",
    height:"25px",
    width:"25px",
    fontSize:"25px",
};

export const styleMenuItem = {
    fontSize: 12,
};

export const stylesBoxImage = (xs: TypeDisplay, md: TypeDisplay) => {
    return {
        display: { xs: xs, md: md },
        mr: 1,
        width: 150,
        height: 65,
        padding: 1,
    };
};