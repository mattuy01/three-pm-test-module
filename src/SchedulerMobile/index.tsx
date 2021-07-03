import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

import { MobileStyles } from './styles';

interface Props {
  title: string;
  content: string;
}

export const SchedulerMobile: React.FC<Props> = () => {
  // const data = {};

  return (
    <MobileStyles>
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
    </MobileStyles>
  );
};
