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
      const tempVisitasArray = data.map((item) => ({
        Id: item.id,
        Subject: `${item.tecnico.nome} - ${item.unidade.nome}`, // Ou qualquer outro campo que queira usar para o título
        StartTime: new Date(item.dataHoraInicioVisita), // Usando dataHoraInicio da API
        EndTime: new Date(item.dataHoraFimVisita), // Usando dataHoraFim da API
        IsAllDay: false,
        Description: `${item.objetivoDaVisita}`
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
        width="95%"
        style={{ marginLeft: "0" }}
        selectedDate={new Date()}
        eventSettings={{ dataSource: visitasData }}
        readonly={true}
      >
        <ViewsDirective>
          <ViewDirective option="Week" startHour="00:00" endHour="24:00" />
          <ViewDirective option="Month" />
          <ViewDirective option="MonthAgenda" />
        </ViewsDirective>
        <Inject services={[Week, Month, MonthAgenda]} />
      </ScheduleComponent>
    </>
  );
}
