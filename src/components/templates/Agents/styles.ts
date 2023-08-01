const gridContent = {
    width: "100%",
    height: "100%",
    marginLeft: "0px !important",
    boxShadow: "none !important",
    backgroundColor:"white !important",
    borderRadius:"10px",
    padding: 3,
 };

const gridImageProfileStyle={
    borderRadius:"100px",
    height:'50px',
    width:'50px',
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


const gridContent_AgentData = {
    width: "100%",
    marginLeft: "0px !important",
    borderRadius:"10px",
    padding:1,
 };

const stylesBoxTabs = {
    borderRight: 0,
    padding: (theme: { spacing: (arg0: number, arg1: number) => unknown }) =>
        theme.spacing(0, 4),
    textTransform: "unset",
    fontSize: {xs:"16px",md:"18px"},
    color: "#e88489 !important",
    fontWeight: "bold",
    backgroundColor: "transparent",
    boxShadow: "none !important",
    opacity: 1,
    letterSpacing: 0.4,
    marginRight: "2px",
    ":hover": {
        borderBottom: "2px solid #eeee",
        opacity: 1,
    },
    "&.Mui-selected": {
        borderBottom: "2px solid #eeeeee",
    },
    width: "100%",
    minHeight: "32px",
 };

export {
    imageProfileStyle,
    gridImageProfileStyle,
    gridContent,
    typograpBreadcrumbs,
    stylesButtonGridOutlined,
    gridContent_AgentData,
    stylesBoxTabs,
}