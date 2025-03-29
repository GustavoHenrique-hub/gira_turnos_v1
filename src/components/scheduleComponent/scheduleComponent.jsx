import * as React from 'react';
import { 
    ScheduleComponent, 
    Week, 
    Month, 
    Agenda, 
    MonthAgenda, 
    ViewsDirective, 
    ViewDirective, 
    Inject } from '@syncfusion/ej2-react-schedule';

export default function ScheduleDataComponent() {
    const data = [
        {
            Id: 1,
            Subject: 'Meeting - 1',
            StartTime: new Date(2025, 2, 28, 10, 0),
            EndTime: new Date(2025, 2, 28, 12, 30),
            IsAllDay: false
        },
    ];

    const eventSettings = { dataSource: data };

    return (
        <ScheduleComponent
            height='900px'
            width='1400px'
            selectedDate={new Date()}
            eventSettings={eventSettings}
        >
            <ViewsDirective>
                <ViewDirective option='Week' startHour='00:00' endHour='24:00' />
                <ViewDirective option='Month' />
                <ViewDirective option='Agenda' startHour='00:00' endHour='24:00' />
                <ViewDirective option='MonthAgenda' />
            </ViewsDirective>
            <Inject services={[Week, Month, Agenda, MonthAgenda]} />
        </ScheduleComponent>
    );
}
