import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday
} from 'date-fns'

import { es } from 'date-fns/locale/index.js'

import { useState } from 'react'

import meetings from '../data/calendar.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendario() {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(
    format(today, 'MMM-yyyy')
  )
  let firstDayCurrentMonth = parse(
    currentMonth,
    'MMM-yyyy',
    new Date(),
    { weekStartsOn: 4 }
  )

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth)
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, {
      months: -1
    })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, {
      months: 1
    })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
          <div className='md:pr-14'>
            <div className='flex items-center'>
              <h2 className='flex-auto font-semibold text-gray-900 capitalize'>
                {format(firstDayCurrentMonth, 'MMMM yyyy', {
                  locale: es
                })}
              </h2>
              <button
                type='button'
                onClick={previousMonth}
                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>
                  Mes anterior
                </span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'>
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'></path>
                </svg>
              </button>
              <button
                onClick={nextMonth}
                type='button'
                className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>
                  Mes siguiente
                </span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'>
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'></path>
                </svg>
              </button>
            </div>
            <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
              <div>Do</div>
              <div>Lu</div>
              <div>Ma</div>
              <div>Mi</div>
              <div>Ju</div>
              <div>Vi</div>
              <div>Sa</div>
            </div>
            <div className='grid grid-cols-7 mt-2 text-sm'>
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 &&
                      colStartClasses[getDay(day)],
                    'py-1.5'
                  )}>
                  <button
                    type='button'
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) &&
                        'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(
                          day,
                          firstDayCurrentMonth
                        ) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(
                          day,
                          firstDayCurrentMonth
                        ) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) &&
                        'hover:bg-gray-200',
                      (isEqual(day, selectedDay) ||
                        isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}>
                    <time
                      dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd', { locale: es })}
                    </time>
                  </button>

                  <div className='w-1 h-1 mx-auto mt-1'>
                    {meetings.some((meeting) =>
                      isSameDay(
                        parseISO(meeting.startDatetime),
                        day
                      )
                    ) && (
                      <div className='w-1 h-1 rounded-full bg-sky-500'></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className='mt-12 md:mt-0 md:pl-14'>
            <h2 className='font-semibold text-gray-900'>
              Agenda{' '}
              <time
                dateTime={format(
                  selectedDay,
                  'yyyy-MM-dd'
                )}>
                {format(selectedDay, 'dd MMM yyy', {
                  locale: es
                })}
              </time>
            </h2>
            <ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500'>
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting
                    meeting={meeting}
                    key={meeting.id}
                  />
                ))
              ) : (
                <p>No hay eventos para hoy.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function Meeting({ meeting }) {
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

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7'
]
