function NextButton({onClick}) {
  return (
   <button
   onClick={onClick}
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
  )
}

export default NextButton