import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonContainerProps {
    colorVariante: ButtonVariant
}

const buttonVariante = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',

}
export const ButtonContainer = styled.button<ButtonContainerProps>`
border: 2px solid #000;
border-radius: 7px;
margin:1rem;
width: 200px;
height: 200px;
color: #fff;
font-weight: 600;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
${props => (
    css`background-color: ${buttonVariante[props.colorVariante]}`
)}
`