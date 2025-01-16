

interface VarianteProps{
    variante: 'primary'|'secondary'|'danger';
}

export function Button({variante}: VarianteProps){
    return(
        <>
        <button>Cadastrar</button>
        </>
    )
}