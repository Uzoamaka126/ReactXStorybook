import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
    width: 100%;
    height: 100%;
`;

export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
        <path 
            d="M8 1C11.9 1 15 4.1 15 8C15 11.9 11.9 15 8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1ZM8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z" fill="#BDBDBD"/>
        <path 
            d="M12.2 10.8L9.39999 7.99999L12.2 5.19999L10.8 3.79999L7.99999 6.59999L5.19999 3.79999L3.79999 5.19999L6.59999 7.99999L3.79999 10.8L5.19999 12.2L7.99999 9.39999L10.8 12.2L12.2 10.8Z" fill="#BDBDBD"/>
    </CloseIconWrapper>
)


// {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M8 1C11.9 1 15 4.1 15 8C15 11.9 11.9 15 8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1ZM8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z" fill="#BDBDBD"/>
// <path d="M12.2 10.8L9.39999 7.99999L12.2 5.19999L10.8 3.79999L7.99999 6.59999L5.19999 3.79999L3.79999 5.19999L6.59999 7.99999L3.79999 10.8L5.19999 12.2L7.99999 9.39999L10.8 12.2L12.2 10.8Z" fill="#BDBDBD"/>
// </svg> */}
