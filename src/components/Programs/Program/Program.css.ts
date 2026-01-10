import { style } from "@vanilla-extract/css";
import { vars } from "src/index.css";

export const program = style({
    borderRadius: "8px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    background: vars.colors.white,
    padding: "16px"
})

export const titleSection = style({
    borderBottom: `2px solid ${vars.colors.decorationGrey}`,
    paddingBottom: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "16px"
})

export const body = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
})

export const learningFormats = style({
    display: "flex",
    flexDirection: "row",
    gap: "16px"
})