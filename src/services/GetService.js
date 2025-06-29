const MIN_LOADING_MS = 1000;

export async function handleVisitaPaginator(inicio, fim) {
    console.log("Service: buscando visitas entre", inicio, "e", fim);
    const url = `http://localhost:8080/visita/visitaPaginator?inicio=${encodeURIComponent(inicio)}&fim=${encodeURIComponent(fim)}`;

    const loadStart = performance.now();
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
         console.log(data)
        // Mapeia para o formato que o ScheduleComponent espera
        return data.map(item => ({
            Id: item.id,
            Subject: `${item.tecnicoNome} - ${item.unidadeNome}`,
            StartTime: new Date(item.dataHoraInicioVisita),
            EndTime: new Date(item.dataHoraFimVisita),
            IsAllDay: false,
            Description: item.objetivoDaVisita,
        }));
    } catch (err) {
        console.error("Service error:", err);
        throw err;
    } finally {
    const elapsed = performance.now() - loadStart;
    const remaining = MIN_LOADING_MS - elapsed;

     if (remaining > 0) {
      await new Promise(resolve => setTimeout(resolve, remaining));
    }
  }
}
