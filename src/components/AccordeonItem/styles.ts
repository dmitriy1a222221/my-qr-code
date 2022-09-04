import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    accordeonItem: {
        paddingTop: "15px",
        overflow: "hidden",
        maxHeight: "30px",
        transition: "max-height 0.5s cubic-bezier(0, 1, 0, 1)",
        "&.active": {
            transition: "max-height 1s ease-in-out",
            maxHeight: "2000px",
            "& $accordeonItem_arrow > svg": {
                transform: "rotate(180deg)",
            }
        }
    },
    accordeonItem_header: {
        paddingBottom: "14px",
        borderBottom: "1px solid #D9DCE1",
        "&>div": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2px"
        }
    },
    accordeonItem_header__subtitle: {
        fontFamily: "Rubik-Regular",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "21px",
        color: "#424A5C"
    },
    accordeonItem_arrow: {
        cursor: "pointer",
        "& > svg": {
            transition: "all .3s"
        }
    },
    accordeonItem_body: {
        paddingTop: "24px"
    }, 
    colorSchemes: {
        display: "flex",
        justifyContent: "space-between",
        "&>div": {
            margin: "7px 9px 0 0",
            "&:last-child": {
                marginRight: "0"
            }
        }
    },
    accordeonItem_textFields: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingTop: "42px",
        fontFamily: 'Rubik-Medium',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "130%",
    },
    accordeonItem_textField1: {
        width: "calc(50% - 31px)",
        "&>p": {
            marginBottom: "6px"
        }
    },
    accordeonItem_textField2: {
        width: "calc(50% - 31px)",
        "&>p": {
            marginBottom: "6px"
        }
    },
    accordeonItem_textFieldRevese: {
        cursor: "pointer",
        paddingBottom: "13px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    }
});
