import { ButtonContainer, ButtonVariante } from "./ButtonContainer";

interface ButtonProps{
    variante?: ButtonVariante;
}

export function Button({variante = 'primary'}:ButtonProps){
    return(
        <>
        <ButtonContainer variante={variante}>Enviar</ButtonContainer>        
        </>
    )
}