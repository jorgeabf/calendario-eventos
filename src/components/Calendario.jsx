import './Calendario.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'

const calendarEvents = [
  {
    title: 'Acto Inaugural y Presentación Curso 1',
    start: '2023-10-21',
    end: '2023-10-21',
    color: 'hsl(120,50%,90%)',
    textColor: 'hsl(120,50%,30%)'
  },
  {
    title: 'Evento 2',
    start: '2023-10-22',
    end: '2023-10-28',
    color: 'hsl(220,50%,90%)',
    textColor: 'hsl(220,50%,30%)'
  }
]

export default function Calendar() {
  return (
    <div className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        locale={esLocale}
        events={calendarEvents}
      />
    </div>
  )
}
