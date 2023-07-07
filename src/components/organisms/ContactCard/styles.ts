export const stylesCardActions = {
    paddingBottom: 2,
    paddingRight: 2,    
};

export const stylesButton = {
    backgroundColor: "white",
    color: "hover.main",
    fontSize: "15px",
    borderRadius:"7px ",
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 20%)",
    border:"none",
    width: "180px",
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "hover.main",
        color:"white"
    },
};

export const stylesGridRow = {
    justifyContent:"space-around !important",
    alignContent:"space-around !important",
};

export const stylesGridButton = {
    justifyContent:"center !important",
    alignItems:"center !important",
    marginTop:"auto", 
    marginBottom:"auto"
};

export const stylesCard = (
    maxWidth?: string,
    height?: string,
    bgColor?: string
) => {
    return {
        maxWidth: maxWidth,
        height: height,
        padding:"5px",
        border:"none !important",
        marginTop:"25px",
        marginBottom:"25px",
        borderRadius:"20px",
        backgroundImage: "linear-gradient(to left, #ef0f74,#ef0f4f)",
        boxShadow:"5px 15px 20px 12px rgb(255 210 249 / 20%) !important",
        "&:hover": {
            transform: "scale(1.02)",
            transition: "0.5s",
            cursor: "pointer",
        },
    };
};

