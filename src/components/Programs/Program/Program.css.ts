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
})

export const title = style({
    width: "60%"
})

export const star = style({
    fill: vars.colors.orange,
    width: "16px",
    height: "16px",
    marginBottom: "2px"
})

export const bestSeller = style({
    display: "flex",
    alignItems: "center",
    color: vars.colors.orange,
    fontWeight: 500,
    fontSize: '0.6em',
    gap: "8px",
    width: "90px",
})

export const body = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
})

export const topics = style({
    color: vars.colors.titleGrey,
    fontWeight: "600"
})

export const learningFormats = style({
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center"
})

export const learningFormat = style([learningFormats])

export const separator = style({
    borderRadius: "100%",
    border: `1px solid ${vars.colors.textGrey}`,
    height: "2px",
    width: "2px",
    background: vars.colors.textGrey
})