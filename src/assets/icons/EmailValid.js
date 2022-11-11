import * as React from 'react'

const EmailValid = (props) => (
  <svg
    width={14}
    height={14}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)' fill='#eab308'>
      <path d='M6.682 9.563h-.013a.46.46 0 0 1-.33-.154L3.731 6.493a.461.461 0 1 1 .687-.615l2.282 2.553 6.42-6.42a.46.46 0 1 1 .651.653L7.008 9.428a.461.461 0 0 1-.326.135Z' />
      <path d='M6.992 13.907A6.923 6.923 0 0 1 .077 6.992 6.923 6.923 0 0 1 6.992.077a.461.461 0 1 1 0 .922A6 6 0 0 0 1 6.992a6 6 0 0 0 5.993 5.993 6 6 0 0 0 5.994-5.993.461.461 0 1 1 .922 0 6.923 6.923 0 0 1-6.916 6.915Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h14v14H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default EmailValid
