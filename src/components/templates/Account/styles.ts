const gridContent = {
    width: "100%",
    marginLeft: "0px !important",
    boxShadow: "0 5px 10px 2px rgb(60 60 60 / 10%)",
    borderRadius:"10px",
    marginTop:"25px",
    padding:3,
 };

const gridImageProfileStyle={
    borderRadius:"100px",
    height:'120px',
    width:'120px',
    padding: 5,
    margin:"auto",
    border:"4px solid #e900ca",
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 20%)",
    backgroundColor:"ligthText.main",
};

const imageProfileStyle = {
    height:'110px !important',
    width:'110px !important',
    margin:"5px !important",
};

const typograpBreadcrumbs = {
    fontSize:"20px !important",
};

const stylesButtonGridOutlined = {
    width: "250px",
    textTransform: "capitalize",
    color: "#e900ca",
    backgroundColor:"white",
    border:"1px solid #e900ca",
    fontSize:"16px !important",
    borderRadius:"7px",
    margin: {xs:0.5, md:1},
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 10%) !important",
    "&:hover": {
        backgroundImage: "linear-gradient(to left, #ef0f4f, #e900ca)",
        color:"white",
    },
};

const stylesButtonGridContained = {
    width: "250px",
    textTransform: "capitalize",
    color: "white",
    backgroundImage: "linear-gradient(to left, #ef0f4f, #e900ca)",
    border:"1px solid #e900ca",
    fontSize:"16px !important",
    borderRadius:"7px",
    margin: {xs:0.5, md:1},
    boxShadow: "0 5px 10px 2px rgb(200 10 105 / 10%) !important",
    "&:hover": {
        backgroundImage: "linear-gradient(to right, #ef0f4f, #e900ca)",
        color:"white",
    },
};

const textFieldStyle = {
    margin: 1,
    marginLeft:0,
}



export {
    imageProfileStyle,
    gridImageProfileStyle,
    gridContent,
    typograpBreadcrumbs,
    stylesButtonGridOutlined,
    stylesButtonGridContained,
    textFieldStyle,
}