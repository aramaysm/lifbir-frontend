export const stylesCardButton = {
    backgroundColor: "secondary.main",
    color: "white",
    fontSize: "14px",
    borderRadius:"20px",
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 30%)",
    border:"none",
    width: "192px",
    textTransform: "capitalize",
    "&:hover": {
        transition: "0.5s",
        backgroundColor: "hover.main",
    },
};

export const stylesCardButtonBordered = {
    backgroundColor: "secondary.main",
    color: "white",
    fontSize: "15px",
    borderRadius:"20px 0 20px 0",
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 30%)",
    border:"none",
    width: "180px",
    textTransform: "capitalize",
    "&:hover": {
        transition: "0.5s",
        backgroundColor: "hover.main",
        transform: "rotate(-5deg)",
    },
};

export const stylesCardAction = (
    paddingBottom: number|string,
    justifyContent: string
) => {
    return {
        paddingBottom:  paddingBottom,
        justifyContent: justifyContent,
       
    };
};