import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    color: "#222",
  },
  AppBar: {
    height: "100px",
  },
  bigCont: {
    height: "inherit",
    alignItems: "center",
  },
  toolbar: {
    height: "inherit",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  list: {
    height: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  link: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "#f7931a",
    },
  },
  img: {
    width: 50,
    height: 50,
  },
}));
