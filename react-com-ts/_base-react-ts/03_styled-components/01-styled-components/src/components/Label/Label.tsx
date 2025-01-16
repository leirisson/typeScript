import { LabelContainer } from "./Label.styles";


interface LabelProps {
    text:string;
    tipoLabel?: string;
}

export function Label({text, tipoLabel}: LabelProps){
    return(
        <>
        <LabelContainer tipoLabel={tipoLabel}>
                {text}
        </LabelContainer>
        </>
    )
}