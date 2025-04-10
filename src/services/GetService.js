import { useState, useEffect } from "react";

// Função do serviço para listar as visitas
export function handleListVisitas() {
    const [stateVisitasArray, setStateVisitasArray] = useState([]);

    const urlToListVisitas = `http://localhost:8080/visita/listAllVisita`;

    useEffect(() => {
        const fetchVisitas = async () => {
            try {
                const response = await fetch(urlToListVisitas);
                const data = await response.json();
                const tempVisitasArray = data.map((item) => ({
                    Id: item.id,
                    Subject: item.nomeCompleto, // Ou qualquer outro campo que queira usar para o título
                    StartTime: new Date(item.dataHoraInicio), // Usando dataHoraInicio da API
                    EndTime: new Date(item.dataHoraFim), // Usando dataHoraFim da API
                    IsAllDay: false,
                }));
                setStateVisitasArray(tempVisitasArray);
            } catch (err) {
                console.log("ERRO: ", err);
            }
        };
        fetchVisitas();
    }, []); // Apenas uma vez, quando o componente carregar

    return stateVisitasArray; // Retornando os dados
}
