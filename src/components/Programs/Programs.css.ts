import { style } from "@vanilla-extract/css";
import { vars } from "src/index.css";

export const sectionSummary = style({
    color: vars.colors.titleGrey
})

export const programs = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px"
})