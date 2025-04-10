import * as React from "react";
import { useState, useEffect } from "react";
import { ScheduleComponent, Week, Month, MonthAgenda, ViewsDirective, ViewDirective, Inject } from "@syncfusion/ej2-react-schedule";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import AutocompleteNewVisita from "../AutoCompletes/autoCompleteNewVisita"; // Importando o seu componente Autocomplete

export default function ScheduleDataComponent() {
  const [visitasData, setVisitasData] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [cellInfo, setCellInfo] = React.useState(null);

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
      }));
      console.log(visitasData);
      setVisitasData(tempVisitasArray);
    } catch (err) {
      console.log("ERRO: ", err);
    }
  };

  // Chama a função para buscar os dados da API assim que o componente for montado
  useEffect(() => {
    fetchVisitas();
  }, []); // [] para garantir que apenas seja chamado na montagem do componente

  // 👉 Esse é seu clique customizado
  const handleCellClick = (args) => {
    console.log("Célula clicada:", args);
    setCellInfo(args);
    setShowModal(true); // mostra seu modal
  };

  // 👉 Esse cancela qualquer popup padrão do Syncfusion
  const handlePopupOpen = (args) => {
    args.cancel = true;
  };

  return (
    <>
      <ScheduleComponent
        height="80%"
        width="95%"
        style={{ marginLeft: "0" }}
        selectedDate={new Date()}
        eventSettings={{ dataSource: visitasData }} // Passando os dados dinâmicos para o dataSource
        cellClick={handleCellClick}
        popupOpen={handlePopupOpen}
      >
        <ViewsDirective>
          <ViewDirective option="Week" startHour="00:00" endHour="24:00" />
          <ViewDirective option="Month" />
          <ViewDirective option="MonthAgenda" />
        </ViewsDirective>
        <Inject services={[Week, Month, MonthAgenda]} />
      </ScheduleComponent>

      {/* Modal customizado com Syncfusion Dialog (ou use outro se quiser) */}
      <DialogComponent
        visible={showModal}
        width="700px"
        height="400px"
        header="Nova Ação"
        close={() => setShowModal(false)}
        showCloseIcon={true}
        isModal={true}
      >
        <div className="bg-green-200 w-[90%] h-[95%] justify-center flex">
          Você clicou em: <br />
          <strong>{cellInfo?.startTime.toString()}</strong>

          {/* Adicionando o componente Autocomplete dentro do Dialog */}
          <AutocompleteNewVisita />
        </div>
      </DialogComponent>
    </>
  );
}
