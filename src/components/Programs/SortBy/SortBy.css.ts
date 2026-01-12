import { style } from "@vanilla-extract/css"
import { vars } from "src/index.css"

export const sortBy = style( {
    color: vars.colors.titleGrey,
    display: "flex",
    alignItems: "center",
    fontSize: "0.6em",
    gap: "8px",
    fontWeight: 500
})

export const chosenSort = style({
    fontWeight: 800
})

export const downChevron = style({
    marginTop: "2px",
    height: "12px",
    width: "12px"
})