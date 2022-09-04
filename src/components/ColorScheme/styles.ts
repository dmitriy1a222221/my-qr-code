import { createUseStyles } from "react-jss";

interface useStylesScheme {
    topColor?: string,
    bottomColor?: string
}

export const useStyles = createUseStyles({
    colorScheme: {
        background: "#FFFFFF",
        border: "1px solid #D9DCE1",
        borderRadius: "8px",
        padding: "9px",
        cursor: "pointer",
        position: "relative",
        width: "calc(100% / 7)",
        maxWidth: "94px",
        boxSizing: "border-box",
        "&.active": {
            "& $colorScheme_border": {
                visibility: "visible",
                opacity: 1,
            },
            "& $colorScheme_checkMark": {
                visibility: "visible",
            }
        }
    },
    colorScheme_border: {
        position: "absolute",
        top: "-1px",
        right: "-1px",
        bottom: "-1px",
        left: "-1px",
        border: "2px solid #5D82D5",
        borderRadius: "8px",
        visibility: "hidden",
        opacity: 0,
        transition: "visibility, opacity .5s"
    },
    colorScheme_color1: {
        width: "100%",
        height: "37px",
        background: ({ topColor }: useStylesScheme) => topColor,
        borderRadius: "6px",
        marginBottom: "6px"
    },
    colorScheme_color2: {
        width: "100%",
        height: "37px",
        background: ({ bottomColor }: useStylesScheme) => bottomColor,
        borderRadius: "6px"
    },
    colorScheme_checkMark: {
        width: "20px",
        height: "20px",
        background: "#5D82D5",
        borderRadius: "50%",
        border: "2px solid #FFFFFF",
        position: "absolute",
        top: "-9px",
        right: "-9px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        visibility: "hidden",
        zIndex: "1"
    }
});
