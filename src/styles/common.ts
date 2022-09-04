import { createUseStyles } from "react-jss";

export const useStylesCommon = createUseStyles({
  title2: {
    fontFamily: "Rubik-Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "130%",
    color: "#2B2B2E"
  },
  title3: {
    fontFamily: "Rubik-Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "23px",
    color: "#1E1D20"
  },
  card: {
    background: "#FFFFFF",
    boxShadow: "0px 1px 15px rgba(12, 37, 54, 0.15)",
    borderRadius: "10px",
    padding: "30px 40px"
  }
});
