 const stylesHR = {
    height:"3px",
    width:"60px", 
    marginTop:"-3px",
    backgroundColor:"#e900ca", 
    border:"none", 
    align:"left",
}

 const stylesContentCenter = {
    justifyContent:"center",
    alignContent:"center",
};

 const stylesGridBanner1 = {
    width: "100%",
    height:{ xs: 400, sm: 400, md: 548, xl: 648 },
    position: "absolute",
    top: { xs: 0, sm: 0, md: 0, xl: 0 },
    margin: 0,
    background: "#5E5D5DCC",
    paddingBottom:"10px"
};

 const styleTypographyBanner1 = {
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop:"auto",
    color: "#FCFCFC",
};

 const styleGridBanner2 = {
     width: "100%",
     marginLeft: "0px !important",    
 };

 const styleGridBanner5 = { 
    padding: 2,
    marginTop:"50px",
    justifyContent:"center",
    alignItems:"center !important"
 };

 const styleGridBanner6 = {
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
    height:"100% !important",
    marginTop:"20px"
 };

 const styleTypographyBanner5_1 = {
    color:"customGrey.main",
    marginRight:"5px",
    fontWeight:"bold"
};

const styleTypographyBanner5_2 = {
    color:"secondary.main",
    fontStyle:"italic",
    fontWeight:"bold"
};

const styleTitleCard = {
    fontSize:"24px",
    fontWeight:"bold"
};

const styleContentCard = {
    fontSize:"18px !important"
}
const styleCardButton =(bgColor:any) =>
 {
    return {
        backgroundColor: bgColor,
        color: "white",
        fontSize: "14px",
        borderRadius:"7px",
        boxShadow: "0 5px 10px 2px rgb(200 10 105 / 30%)",
        border:"none",
        width: "192px",
        textTransform: "capitalize",
        "&:hover": {
            transition: "0.5s",
            backgroundColor: "hover.main",
        },
    }
  
};
const styleStackBannerContactAgent = {
     padding: 2,
     marginTop:"75px",
    // backgroundImage:"linear-gradient(to top, #feb3c9,white)"
    }
const styleStackBannerContactComercial = {
        padding: 2,
       // backgroundImage:"linear-gradient(to bottom, #feb3c9,white)"
}

 export  {
    stylesHR,
    stylesContentCenter,
    stylesGridBanner1,
    styleTypographyBanner1,
    styleGridBanner2,
    styleGridBanner5,
    styleTypographyBanner5_1,
    styleTypographyBanner5_2,
    styleGridBanner6,
    styleTitleCard,
    styleContentCard,
    styleCardButton,
    styleStackBannerContactAgent,
    styleStackBannerContactComercial
};