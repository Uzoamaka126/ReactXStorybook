import styled from 'styled-components';
import { typeScale} from '../utils';
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
    warning: ({ props }) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
            outline: 3px solid ${props.theme.status.warningColorHover};
        }
    `,
    secondaryWarningButton: ({ props }) => `
        background: none;
        border: 2px solid ${props.status.warningColor};
        color: ${props.status.warningColor};
    `,
    tertiaryWarningButton: ({ props }) => `
        background: none;
        color: ${props.status.warningColor};
    `,
    success: ({ props }) => `
        background-color: ${props.status.successColor};
        color: ${props.textColorInverted};

        &:hover, &:focus {
            background-color: ${props.status.successColorHover};
            outline: 3px solid ${props.status.successColorHover};
        }

        &:active {
            background-color: ${props.status.warningColorActive};
            outline: 3px solid ${props.status.warningColorHover};
        }
    `,
    primaryButtonSuccess: ({ props }) => `
        background-color: ${props.status.successColor};
        color: ${props.textColorInverted};
    `,
    secondaryButtonSuccess: ({ props }) => `
        background: none;
        border: 2px solid ${props.status.successColor};
        color: ${props.status.successColor};
    `,
    error: ({ props }) => `
        background-color: ${props.status.errorColor};
        color: ${props.textColorInverted};

        &:hover, &:focus {
            background-color: ${props.status.errorColorHover};
        }

        &:active {
            background-color: ${props.status.errorColorActive};
        }
    `,
    secondaryErrorButton: ({ props }) => `
        background: none;
        border: 2px solid ${props.status.errorColor};
        color: ${props.status.errorColor};
    `,
    tertiaryErrorButton: ({ props }) => `
        background: none;
        color: ${props.status.errorColor};
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
        background-color: ${props => props.primaryColorHover};
        color: ${props => props.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.primaryColorActive};
        color: ${props => props.textColorOnPrimary};
        border-color: ${props => props.primaryColorActive};
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.primaryColor};
    border: none;
    color: white

    &:disabled {
        background-color: ${props => props.disabled};
        color: ${props => props.textColorOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${props => props.primaryColor};
    color: ${props => props.primaryColor}

    &:disabled {
        background: none;
        color: ${props => props.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${props => props.primaryColor};

    &:disabled {
        background: none;
        color: ${props => props.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;