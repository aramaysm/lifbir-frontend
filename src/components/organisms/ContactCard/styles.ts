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
    stylesButtonGridContained,
    textFieldStyle,
}