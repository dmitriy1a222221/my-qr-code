import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  helpButton: {
    border: "2px solid #5D82D5",
    borderRadius: "16px",
    padding: "4px 7px 4px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: "76px",
    boxSizing: "border-box",
    cursor: "pointer",
    '&>span': {
      fontFamily: "Rubik-Medium",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "18px",
      color: "#5D82D5"
    }
  },
  helpButton_icon: {
    marginRight: "4px",
    width: "21px",
    height: "21px"
  }
});
