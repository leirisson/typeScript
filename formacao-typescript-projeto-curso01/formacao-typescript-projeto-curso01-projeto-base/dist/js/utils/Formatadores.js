import { FormatarData } from "../types/FormatoData.js";
export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
;
export function formatarData(data, formato = FormatarData.PADRAO) {
    if (formato === FormatarData.DIA_DA_SEMANDA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatarData.DIA_MES) {
        return (data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit"
        }));
    }
    else {
        return data.toLocaleDateString("pt-br");
    }
}
