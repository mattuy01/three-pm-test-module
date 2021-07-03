import styled from 'styled-components';

const color = {
  headerRow: '#f1f1f1',
  today: '#fafafa',
  borderHighlight: '#999999',
  backgroundHighlight: '#ebebeb',
};

export const MobileStyles = styled.div`
  .fc-toolbar-title {
    font-size: 1.1rem;
  }

  .fc-daygrid-day-top {
    font-size: 0.7rem;
  }

  .fc-button {
    border-radius: 0;
  }

  .fc-daygrid-event {
    text-align: center;
    white-space: normal;
  }

  .fc-h-event,
  .fc-v-event {
    border: white;
    background-color: unset !important;
  }

  .fc-daygrid-day.fc-day-today {
    background-color: ${color.today};
  }

  .fc-col-header-cell {
    background-color: ${color.headerRow};
    font-size: 0.7rem;
  }
`;
