import { HistoryContainer, HistoryList } from "./atyles";


export function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Tarefa
                            </th>
                            <th>
                                Duração
                            </th>
                            <th>
                                Início
                            </th>
                            <th>
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 anos</td>
                            <td>Conclúido</td>
                        </tr>
                        <tr>
                            <td>tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 anos</td>
                            <td>Conclúido</td>
                        </tr>
                        <tr>
                            <td>tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 anos</td>
                            <td>Conclúido</td>
                        </tr>
                        <tr>
                            <td>tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 anos</td>
                            <td>Conclúido</td>
                        </tr>
                        <tr>
                            <td>tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 anos</td>
                            <td>Conclúido</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}