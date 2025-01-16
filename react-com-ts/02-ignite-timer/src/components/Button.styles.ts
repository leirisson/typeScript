import styled, { css } from 'styled-components'


// opção 1
export type ButtonVariant =  'primary' | 'success' | 'secondary' | 'danger' | 'neutral';


interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'orange',
    success: 'green',
    danger: 'red',
    neutral: 'gray'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 100px;
color: #fff;
background-color: ${props => props.theme.primary};

/* ${props => {
        return css`
    background-color: ${ButtonVariants[props.variant]}
    `
    }
    } */
`
