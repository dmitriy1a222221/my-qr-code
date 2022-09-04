import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  textField: {
    position: "relative",
    "&>input": {
      width: "100%",
      boxSizing: "border-box",
      background: "#FFFFFF",
      border: "1px solid #D9DCE1",
      borderRadius: "6px",
      padding: "14px 23px",
      fontFamily: 'Rubik-Regular',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      color: "#1E1D20",
      "&::placeholder": {
        color: "#A0A4AD"
      },
      "&:focus-visible": {
        outline: "#5D82D5 auto 1px"
      }
    },
    "&.error": {
      "&>input": { 
        outline: "#d84a4e auto 1px !important",
        "&:focus-visible": {
          outline: "#d84a4e auto 1px !important",
        }
      }
    },
  },
  textField_bColor: {
    width: "24px",
    height: "24px",
    background: ({ color }: { color?: string}) => color,
    position: "absolute",
    top: "13px",
    right: "12px",
    borderRadius: "50%"
  },
  textField_error: {
    position: "absolute",
    bottom: "-20px",
    left: "15px",
    fontFamily: 'Rubik-Medium',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "130%",
    color: "rgb(216 74 78)"
  }
});
