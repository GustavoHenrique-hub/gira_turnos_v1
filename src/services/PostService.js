const MIN_LOADING_MS = 1000;

export default async function handleInsertVisita(objectInsertVisita) {
    console.log("Service: POST newVisita");
    console.log("JSON: ", objectInsertVisita)
    const url = `http://localhost:8080/visita/newVisita`;

    const loadStart = performance.now();
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objectInsertVisita),
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        console.log(data)
        
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
