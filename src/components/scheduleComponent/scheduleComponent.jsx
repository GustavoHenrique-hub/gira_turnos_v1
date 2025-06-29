import { useState, useEffect } from "react";
import { ScheduleComponent, Month, MonthAgenda, ViewsDirective, ViewDirective, Inject } from "@syncfusion/ej2-react-schedule";
import LoadingOverlay from "../Loading/loadingOverlay"

import { handleVisitaPaginator } from "../../services/GetService"

export default function ScheduleDataComponent() {
  const [visitasData, setVisitasData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchVisitaPaginator = async (start, end) => {
    setLoading(true);
    setError(null);
    try {
      const events = await handleVisitaPaginator(start, end);
      setVisitasData(events);
    } catch (err) {
      setError("Falha ao carregar visitas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const today = new Date();
    onNavigating({ action: "date", currentDate: today });
  }, []);
  const onNavigating = (args) => {
    if (args.action === "date") {
      const currentDate = args.currentDate;
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();

      const startDate = new Date(year, month, 1, -3, 0, 0, 0);

      const endDate = new Date(year, month + 1, 0, 20, 59, 0, 0);

      const fmtDate = date => date.toISOString().replace("T", " ").slice(0, 19);

      const inicio = fmtDate(startDate);
      const fim = fmtDate(endDate);

      console.log("Início:", inicio);
      console.log("Fim:", fim);

      console.log("Navegando para intervalo", inicio, "→", fim);
      handleFetchVisitaPaginator(inicio, fim);
    }
  }


  return (
    <>

      {error && (
        <div style={{ color: "red", marginBottom: 8 }}>{error}</div>
      )}
      
      <ScheduleComponent
        height="90%"
        width="80%"
        style={{ marginLeft: "150px" }}
        // selectedDate={new Date()}
        eventSettings={{ dataSource: visitasData }}
        readonly={true}
        navigating={onNavigating}
      >
        <ViewsDirective>
          <ViewDirective option="Month" />
          <ViewDirective option="MonthAgenda" />
        </ViewsDirective>
        <Inject services={[Month, MonthAgenda]} />
      </ScheduleComponent>

      <LoadingOverlay open={loading} />
    </>
  );
}
