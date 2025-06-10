import * as React from "react";
import { useState, useEffect } from "react";
import { ScheduleComponent, Week, Month, MonthAgenda, ViewsDirective, ViewDirective, Inject } from "@syncfusion/ej2-react-schedule";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

export default function ScheduleDataComponent() {
  const [visitasData, setVisitasData] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

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

  return (
    <>
      <ScheduleComponent
        height="90%"
        width="80%"
        style={{ marginLeft: "150px" }}
        selectedDate={new Date()}
        eventSettings={{ dataSource: visitasData }}
        readonly={true}
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
