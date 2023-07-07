export const stylesCard = (
    maxWidth?: string,
    height?: string,
    bgColor?: string
) => {
    return {
        maxWidth: maxWidth,
        height: height,
        backgroundColor: bgColor,
        //boxShadow: "0 5px 10px 2px rgb(0 0 0 / 10%)",
        boxShadow:"none !important",
        borderRadius:"15px",
        "&:hover": {
            transform: "scale(1.01)",
            transition: "0.5s",
            cursor: "pointer",
        },
    };
};

export const stylesTitlePrimary={
    fontWeight:"bold",
    
};


export const stylesTitleSecondary = {
    fontWeight:"bold",
    color:"secondary.main"
};

export const styleHR = {
 height:"2.5px",
 width:"30px", 
 backgroundColor:"#e900ca",
 border:"none", 
 textAlign:"start"
};

export const styleCardContent= {
     marginTop:"auto",
     marginBottom:"auto" };
     