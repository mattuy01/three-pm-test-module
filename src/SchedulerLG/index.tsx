import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.min.css';

import { DesktopStyles } from './styles';

interface Props {
  title: string;
  content: string;
}

export const SchedulerLG: React.FC<Props> = () => {
  // const data = {};

  return (
    <DesktopStyles>
      <FullCalendar
        /*schedulerLicenceKey = "0069233720-fcs-1516576856"*/
        initialView="dayGridMonth"
        headerToolbar={{ start: 'prev', center: 'title', end: 'next' }}
        views={{
          dayGridMonth: {
            type: 'dayGridMonth',
            buttonText: 'Month View',
            weekends: false,
          },
        }}
        plugins={[dayGridPlugin]}
        height="auto"
        themeSystem="bootstrap"
        selectable={true}
        editable={true}
        eventDurationEditable={true}
        eventStartEditable={true}
        events={[]}
        // events={allEvent.data}
        // datesSet={onDateSet}
        // eventClick={onEventClick}
      />
    </DesktopStyles>
  );
};
