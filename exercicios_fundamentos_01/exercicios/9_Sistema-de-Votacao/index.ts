// 9. Sistema de Votação
// Crie um type alias chamado Vote com:

// voterId (string)
// candidate (string)
// Crie uma função que conta quantos votos cada candidato recebeu.

type Vote = {
    voterID: string;
    candidate: string;
}

enum Candidatos {
    candidat1 = "1",
    candidat2 = "2",
    candidat3 = "3",
    candidat4 = "4",
    candidat5 = "5",
}

function contadorDEVotos(votos: Vote[], numeroVoto: string): number{

    const totalVotos = votos.filter(voto => voto.voterID === numeroVoto ? voto : '').reduce((acumuladorVotos, qtd_votos) => acumuladorVotos + 1, 0)
    return totalVotos
}

const mock_votos = [
    { voterID: "1", candidate: "Leirisson" },
    { voterID: "2", candidate: "Maria" },
    { voterID: "3", candidate: "João" },
    { voterID: "4", candidate: "Ana" },
    { voterID: "5", candidate: "Leirisson" },
    { voterID: "1", candidate: "Maria" },
    { voterID: "2", candidate: "Leirisson" },
    { voterID: "3", candidate: "Ana" },
    { voterID: "4", candidate: "João" },
    { voterID: "5", candidate: "Leirisson" },
    { voterID: "1", candidate: "João" },
    { voterID: "2", candidate: "Ana" },
    { voterID: "3", candidate: "Leirisson" },
    { voterID: "4", candidate: "Maria" },
    { voterID: "5", candidate: "João" },
    { voterID: "1", candidate: "Leirisson" },
    { voterID: "2", candidate: "João" },
    { voterID: "3", candidate: "Maria" },
    { voterID: "4", candidate: "Leirisson" },
    { voterID: "5", candidate: "Ana" }
]

console.log(contadorDEVotos(mock_votos,Candidatos.candidat3))