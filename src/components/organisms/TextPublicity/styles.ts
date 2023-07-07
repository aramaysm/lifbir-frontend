export const stylesBoxContent = (imageBG:any) => {

    return {
        display: "flex",
        position:"relative",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: 1,              
        padding: 4,
        "&:hover": {
            transform: "scale(1.02)",
            transition: "0.5s",
            cursor: "pointer",
        },
        

    }
    
};
export const stylesTextTitle = {
    fontWeight: "bold",
    fontSize: 18,
    fontStyle: "italic",
    paddingBottom: 1,
    color:"white"
};

export const stylesButton = {
    backgroundColor: "secondary.main",
    color: "white",
    fontSize: "15px",
    borderRadius:"7px ",
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 20%)",
    border:"none",
    width: "180px",
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "hover.main",
    },
};