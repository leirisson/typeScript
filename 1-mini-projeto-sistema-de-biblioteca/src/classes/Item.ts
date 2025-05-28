import { ITemBiblioteca } from '../interfaces/ItemBiblioteca'
import { Status } from '../types/status'

export class Item<T extends ITemBiblioteca> {
    constructor(
        public item: T,
        public status: Status = 'disponivel'
    ) { }

    mudarStatus(novoStatus: Status): void {
        this.status = novoStatus
        console.log(`Status de "${this.item.titulo}" alterado para ${novoStatus}`)
    }
}