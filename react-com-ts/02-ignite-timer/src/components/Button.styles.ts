import styled, { css } from 'styled-components'


// opção 1
export type ButtonVariant =  'primary' | 'success' | 'secondary' | 'danger' | 'neutral';

// opção 2
// export type ButtonVariant = {
//     primary: string,
//     success: string,
//     secondary: string,
//     danger: string,
//     neutral: string

// } 



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
${props => {
        return css`
    background-color: ${ButtonVariants[props.variant]}
    `
    }
    }
`
