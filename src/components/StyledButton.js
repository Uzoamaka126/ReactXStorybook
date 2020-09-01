import styled from 'styled-components';
import { defaultTheme, typeScale} from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers'


const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.warningColorHover};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
        }

        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
        }
    `,
    secondaryWarningButton: () => `
        background: none;
        border: 2px solid ${defaultTheme.status.warningColor};
        color: ${defaultTheme.status.warningColor};
    `,
    tertiaryWarningButton: () => `
        background: none;
        color: ${defaultTheme.status.warningColor};
    `,
    success: () => `
        background-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.successColorHover};
            outline: 3px solid ${defaultTheme.status.successColorHover};
        }

        &:active {
            background-color: ${defaultTheme.status.warningColorActive};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
        }
    `,
    primaryButtonSuccess: () => `
        background-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonSuccess: () => `
        background: none;
        border: 2px solid ${defaultTheme.status.successColor};
        color: ${defaultTheme.status.successColor};
    `,
    error: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.errorColorHover};
        }

        &:active {
            background-color: ${defaultTheme.status.errorColorActive};
        }
    `,
    secondaryErrorButton: () => `
        background: none;
        border: 2px solid ${defaultTheme.status.errorColor};
        color: ${defaultTheme.status.errorColor};
    `,
    tertiaryErrorButton: () => `
        background: none;
        color: ${defaultTheme.status.errorColor};
    `,
};

const Button = styled.button`
    padding: 12px 24x;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    transition: background-color 0.2s linear color 0.2s linear;

    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColorOnPrimary};
        border-color: ${defaultTheme.primaryColorActive};
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textColorOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor}

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor};

    &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;