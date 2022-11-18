import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.75rem",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    fontWeight: "bold",
    fontSize: "2rem",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
