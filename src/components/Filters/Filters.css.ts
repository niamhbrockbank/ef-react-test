import { style } from "@vanilla-extract/css";
import { vars } from "src/index.css";

export const filters = style({
    width: "160px",
    display: "flex",
    flexDirection: "column"
})

export const sectionSummary = style({
    color: vars.colors.titleGrey
})