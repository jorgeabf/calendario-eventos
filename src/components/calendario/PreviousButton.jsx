export default function PreviousButton({ onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'>
      <span className='sr-only'> Mes anterior</span>
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
  )
}
