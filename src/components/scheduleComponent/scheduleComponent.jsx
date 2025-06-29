import { useState, useEffect } from "react";
import { ScheduleComponent, Month, MonthAgenda, ViewsDirective, ViewDirective, Inject } from "@syncfusion/ej2-react-schedule";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

export default function ScheduleDataComponent() {
  const [visitasData, setVisitasData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Função para buscar as visitas da API
  const fetchVisitas = async () => {
    const urlToListVisitas = `http://localhost:8080/visita/listAllVisita`;

    try {
      const response = await fetch(urlToListVisitas);
      const data = await response.json();
      const tempVisitasArray = data.map((item) => (
        {
          Id: item.id,
          Subject: `${item.tecnico.nome} - ${item.unidade.nome}`,
          StartTime: new Date(item.dataHoraInicioVisita),
          EndTime: new Date(item.dataHoraFimVisita),
          IsAllDay: false,
          Description: `${item.objetivoDaVisita}`,
        }));
      const consoleVisitasArray = data.map((item) => (
        item
      ))
      console.log(consoleVisitasArray)
      console.log(visitasData);
      setVisitasData(tempVisitasArray);
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  useEffect(() => {
    fetchVisitas();
  }, []);

  const onNavigating = (args) => {
    if (args.action === "date") {
      const currentDate = args.currentDate;
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth(); // 0-based

      // Início: primeiro dia do mês
      const startDate = new Date(year, month, 1, 0, 0, 0, 0);

      // Fim: último dia do mês, 23:59
      const endDate = new Date(year, month + 1, 0, 0, 0, 0, 0);

      const startDateFormated = startDate.toISOString().slice(0, 10)
      const startDateFinalFormat = startDate.toISOString().slice(11, 22)

      const endDateFormated = endDate.toISOString().slice(0, 10)
      const endDateFinalFormat = endDate.toISOString().slice(11, 22)

      console.log("Início:", startDateFormated, startDateFinalFormat);
      console.log("Fim:", endDateFormated, endDateFinalFormat);
    }
  }

  return (
    <>
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
    </>
  );
}
