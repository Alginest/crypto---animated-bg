import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  midBox: {
    width: "1200px",
    height: "500px",
    display: "flex",
    zIndex: 1,
  },
  leftBox: {
    width: "50%",
    height: "400px",
  },

  socialIcons: {
    width: "100%",
    marginBottom: "30px",
  },
  iconButton: {
    margin: "0 5px",
    border: `3px solid ${theme.palette.primary.main}`,
  },
  title: {
    width: "100%",
    marginBottom: "40px",
    fontSize: 50,
    fontWeight: "bold",
  },
  leftBtn: {
    backgroundColor: "#222",
    color: "#fff",
    border: `1px solid white`,
    padding: "18px 40px",
    borderRadius: "20px",
    zIndex: 10,
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  btnRight: {
    marginLeft: "50px",
    backgroundColor: "#222",
    color: "#fff",
    border: `1px solid white`,
    padding: "18px 50px",
    borderRadius: "20px",
    zIndex: 10,
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  rightBox: {
    width: "50%",
    height: "500px",
  },
  gridCont: {
    width: "100%",
    display: "flex",
    height: "350px",
  },
  gridItem: {
    width: "200px",
    margin: "0 20px",
    height: "200px",
    marginLeft: "1px",
    border: `1px dotted  ${theme.palette.primary.main}`,
  },
}));
