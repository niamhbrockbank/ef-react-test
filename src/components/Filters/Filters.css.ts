import { style } from "@vanilla-extract/css";
import { vars } from "src/index.css";

export const filters = style({
    display: "flex",
    flexDirection: "column",

    '@media': {
        'screen and (min-width: 768px)': {
      width: "160px",
    }
}
})

export const sectionSummary = style({
    color: vars.colors.titleGrey
})