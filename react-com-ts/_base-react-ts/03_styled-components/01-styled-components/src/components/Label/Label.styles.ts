import styled, {css} from "styled-components";

export type InputVariant = 'primary' | 'secondary' | 'danger';

interface LabelContainerProps {
    tipoLabel:InputVariant,
}
const buttonVariante = {
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',

}
export const LabelContainer = styled.label<LabelContainerProps>`
padding: 1rem;
margin-right: 1rem;
border-radius: 5px;
color: #fff;
font-weight: 600;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
border: 2px solid red;
${props => css`background-color: ${buttonVariante[props.tipoLabel]}`}
`