import { blue, neutral, yellow, green, red } from './Colors';
import { primaryFont } from './Typography'


export const defaultTheme = {
    primaryColor: blue[300],
    primaryColorHover: blue[200],
    primaryColorActive: blue[100],
    textColorOnPrimary: neutral[300],
    textColor: neutral[500],
    textColorInverted: neutral[400],
    primaryFont: primaryFont,
    disabled: neutral[200],
    textOnDisabled: neutral[300],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[300],
        successColorHover: green[200],
        successColorActive: green[300],
    }
}

export const darkTheme = {
    primaryColor: blue[300],
    primaryColorHover: blue[200],
    primaryColorActive: blue[100],
    textColorOnPrimary: neutral[300],
    textColor: neutral[500],
    textColorInverted: neutral[400],
    primaryFont: primaryFont,
    disabled: neutral[200],
    textOnDisabled: neutral[300],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[300],
        successColorHover: green[200],
        successColorActive: green[300],
    }
}
