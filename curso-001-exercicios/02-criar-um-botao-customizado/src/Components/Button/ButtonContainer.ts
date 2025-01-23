import styled from "styled-components";

export type ButtonVariante = 'primary' | 'secondary' | 'danger';


interface ButtonContainerProps {
    variante: ButtonVariante;
}

const buttonsVariante = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 6.5rem;
height: 6.5rem;

${props => {
    return `background-color: ${buttonsVariante[props.variante]};`
}}

`