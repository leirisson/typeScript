import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
    colorVariante?: ButtonVariant
}

export function Button({ colorVariante = "primary" }: ButtonProps) {
    return (
        <>
            <ButtonContainer colorVariante={colorVariante}>Cadastrar</ButtonContainer>
        </>
    )
}