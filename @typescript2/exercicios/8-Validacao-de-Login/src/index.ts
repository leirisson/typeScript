// Crie uma função que receba dois parâmetros: email (string) e senha (string).
// Verifique se o email é válido (contém "@" e ".")
// e se a senha tem pelo menos 8 caracteres.
// Retorne true se ambos forem válidos ou false caso contrário.


function Login(email: string, password: string) {
    // ================================================
    // criando regex para
    // Verificar se o email é válido (contém "@" e ".")
    // ================================================
    const regexEmail = /^(?=.*@)(?=.*\.).*$/

    if (regexEmail.test(email) && password.length >= 8) {
        return true
    }

    return false
}




console.log(Login("Leirisson@exemplo.com", "12345678"))
    