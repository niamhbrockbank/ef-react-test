import { style } from "@vanilla-extract/css";
import { vars } from "src/index.css";

export const filters = style({
    display: "flex",
    flexDirection: "column",

    '@media': {
        'screen and (min-width: 768px)': {
      width: "240px",
    }
}
})

export const sectionSummary = style({
    color: vars.colors.titleGrey
})

export const clearButton = style({
    textAlign: "start",
    background: vars.colors.background,
    border: "none",
    fontSize: "0.6em",
    color: vars.colors.titleGrey,
    marginTop: "16px"
})