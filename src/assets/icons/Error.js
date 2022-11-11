import * as React from 'react'

const Error = (props) => (
  <svg
    width={14}
    height={14}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)' fill='#E50000'>
      <path d='M6.992 8.908c-.28 0-.51-.22-.522-.5l-.482-4.65a1.007 1.007 0 1 1 2.009 0l-.482 4.65a.522.522 0 0 1-.523.5ZM6.993 11.309a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z' />
      <path d='M6.992 13.907A6.923 6.923 0 0 1 .077 6.992 6.923 6.923 0 0 1 6.992.077a6.923 6.923 0 0 1 6.916 6.915 6.923 6.923 0 0 1-6.916 6.915ZM6.992 1A6 6 0 0 0 1 6.992a6 6 0 0 0 5.993 5.993 6 6 0 0 0 5.994-5.993A6 6 0 0 0 6.992 1Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h14v14H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default Error
