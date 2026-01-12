import { style } from "@vanilla-extract/css";
import { vars } from "src/index.css";

export const sectionSummary = style({  
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px"
})

export const showingNow = style({
    color: vars.colors.titleGrey
})

export const programs = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px"
})