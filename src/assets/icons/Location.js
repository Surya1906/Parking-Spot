import * as React from 'react'

const Location = (props) => (
  <svg
    width={20}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.989 19.868a.659.659 0 0 1-.567-.324l-.982-1.66c-2.024-3.423-3.937-6.656-4.587-7.96a6.759 6.759 0 0 1-.688-2.99A6.832 6.832 0 0 1 9.989.11a6.832 6.832 0 0 1 6.824 6.824c0 1.046-.23 2.05-.686 2.985l-.014.027c-.66 1.318-2.562 4.534-4.575 7.938l-.982 1.66a.658.658 0 0 1-.567.324Zm0-18.44a5.513 5.513 0 0 0-4.954 7.914c.626 1.256 2.614 4.617 4.537 7.868l.417.705.415-.702c1.923-3.252 3.912-6.615 4.541-7.876l.008-.015a5.513 5.513 0 0 0-4.964-7.895Z'
      fill='#FDE047'
    />
    <path
      d='M9.989 9.9a3.219 3.219 0 0 1-3.216-3.215A3.219 3.219 0 0 1 9.99 3.47a3.219 3.219 0 0 1 3.215 3.215A3.219 3.219 0 0 1 9.989 9.9Zm0-5.113A1.9 1.9 0 0 0 8.09 6.685a1.9 1.9 0 0 0 1.898 1.898 1.9 1.9 0 0 0 1.898-1.898 1.9 1.9 0 0 0-1.898-1.898Z'
      fill='#FDE047'
    />
  </svg>
)

export default Location
