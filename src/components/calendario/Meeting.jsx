import {
   format,
   parseISO,
 } from 'date-fns'

export default function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime)
  let endDateTime = parseISO(meeting.endDatetime)

  return (
    <li className='flex items-center py-2 space-x-4 group'>
      <div
        className={`flex-auto pl-2 border-l-4 ${meeting.color}`}>
        <h3 className='text-gray-900 font-semibold'>
          CURSO {meeting.curso}
        </h3>
        <p>{meeting.name}</p>
        <p className='mt-0.5'>
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
    </li>
  )
}
