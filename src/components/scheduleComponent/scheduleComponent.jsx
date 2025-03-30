import * as React from "react";
import {
  ScheduleComponent,
  Week,
  Month,
  MonthAgenda,
  ViewsDirective,
  ViewDirective,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import { DialogComponent } from "@syncfusion/ej2-react-popups";

export default function ScheduleDataComponent() {
  const data = [
    {
      Id: 1,
      Subject: "Meeting - 1",
      StartTime: new Date(2025, 2, 28, 10, 0),
      EndTime: new Date(2025, 2, 28, 12, 30),
      IsAllDay: false,
    },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [cellInfo, setCellInfo] = React.useState(null);

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
        height={700}
        width={1300}
        selectedDate={new Date()}
        eventSettings={{ dataSource: data }}
        cellClick={handleCellClick}
        popupOpen={handlePopupOpen} // impede o modal padrão
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
        width="400px"
        header="Nova Ação"
        close={() => setShowModal(false)}
        showCloseIcon={true}
        isModal={true}
      >
        <div className="bg-green-200">
          Você clicou em: <br />
          <strong>{cellInfo?.startTime.toString()}</strong>
        </div>
      </DialogComponent>
    </>
  );
}
