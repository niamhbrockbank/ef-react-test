import { style } from "@vanilla-extract/css";

export const pageContent = style({
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '48px',

    '@media': {
        'screen and (max-width: 768px)': {
      flexDirection: "column"
    }
}
})