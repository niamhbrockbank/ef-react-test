import { style, styleVariants } from "@vanilla-extract/css"
import { vars } from "src/index.css"

export const sortBy = style( {
    color: vars.colors.titleGrey,
    display: "flex",
    alignItems: "center",
    fontSize: "0.6em",
    gap: "8px",
    fontWeight: 500,
    position: "relative"
})

export const currentSort = style({
    fontWeight: 800
})

export const downChevron = style({
    marginTop: "2px",
    height: "12px",
    width: "12px"
})

export const sortByDropdown = style({
    background: vars.colors.white,
    padding: "8px",
    borderRadius: "4px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "40px",
    right: "0px"
})

const optionBase = style({
    padding: "12px",
    borderRadius: "4px",
})

export const sortByDropdownOption = styleVariants({
    unselected: [optionBase, {}],
    selected: [optionBase, {background: vars.colors.background}]
})