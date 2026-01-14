import { style } from "@vanilla-extract/css"
import { vars } from "src/index.css"

export const filter = style({
    display: "flex",
    flexDirection: "column",
    borderBottom: `2px solid ${vars.colors.decorationOnBackgroundGrey}`,
    paddingBottom: "12px",
    marginBottom: "4px"
})

export const filterTitle = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.5em"
})

export const upChevron = style({
    height: "16px"
})

export const filterOptions = style({
    fontSize: "0.6em",
    fontWeight: "500",
})

export const filterOption = style({
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "8px",
    gap: "4px"
})

export const checkbox = style({
    marginTop: "1px"
})
