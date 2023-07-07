export const stylesBoxText = {
    py: { xs: "unset", md: 1.5 },
    bgcolor: "transparent",
    position: "absolute",
    left: 0,
    top: { xs: -240, sm: -340, md: -380, xl: -410 },
    right: 0,
    mx: "auto",
    zIndex: 3,
    boxShadow: 0,
    display: { xs: "flex", md: "flex" },
    width: 350,
    height: 35,
    paddingTop: { xs: "8px !important", md: "0px !important" },
    paddingBottom: "10px !important",
    justifyContent: "center",
};

export const stylesText = {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: { xs: "20px", md: "1.75rem" },
    color:"white",
};

export const stylesBoxCurve = {
     py: { xs: "unset", md: 1.5 },
    bgcolor: "transparent",
    position: "absolute",
    left: 0,
    top: { xs: -155, sm: -255, md: -355, xl: -385 },
    right: 0,
    zIndex: 3,
    boxShadow: 0,
    display: "flex-wrap",
    width: 150,
    height: 35,
    paddingTop: { xs: "8px !important", md: "0px !important" },
    paddingBottom: "10px !important",
    justifyContent: "end",
    alignContent:"end",
    marginLeft:"auto",
  
};

export const stylesBoxTabs = {
    py: { xs: "unset", md: 1.5 },
    bgcolor: "transparent",
    position: "absolute",
    left: 0,
    top: { xs: -170, sm: -220, md: -300, xl: -340 },
    right: 0,
    mx: "auto",
    zIndex: 3,
    boxShadow: 0,
    width: { xs: 310, sm: 500, md: 646, xl: 846 },
    height: 32,
    paddingTop: "15px !important",
    borderRadius: "4px !important",
};

export const stylesBoxSearch = {
    py: { xs: "unset", md: 1.5 },
    position: "absolute",
    left: 0,
    top: { xs: -100, sm: -150, md: -200, xl: -280 },
    right: 0,
    mx: "auto",
    zIndex: 3,
    width: { xs: 310, sm: 450, md: 600, xl: 800 },
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
    borderRadius:"15px",
    bgcolor:"ligthText.main",
   
};

export const stylesSearch = {
    ml: 1,
    flex: 1,
    width: { xs: "95%", sm: "95", md: "98%", xl: "98%" },
    paddingLeft: 1,
    paddingRight: 1,
    fontSize: "16px",
    color: "greyText.main",
    "& .MuiInputBase-input": {
        padding: "6px 0 6px",
    },
};

export const stylesHR = {
    height:"2.5px",
    width:"60px", 
    marginTop:"-3px",
    backgroundColor:"#e900ca", 
    border:"none", 
};