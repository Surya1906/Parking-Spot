import * as React from 'react'

const Close = (props) => (
  <svg
    width={32}
    height={32}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.765 31.464.536 27.235a1.83 1.83 0 0 1 0-2.589L24.646.536a1.83 1.83 0 0 1 2.59 0l4.228 4.229a1.83 1.83 0 0 1 0 2.589l-24.11 24.11a1.83 1.83 0 0 1-2.59 0Z'
      fill='#FACC15'
    />
    <path
      d='M24.646 31.464.536 7.354a1.83 1.83 0 0 1 0-2.59L4.765.537a1.83 1.83 0 0 1 2.589 0l24.11 24.11a1.83 1.83 0 0 1 0 2.59l-4.229 4.228a1.83 1.83 0 0 1-2.589 0Z'
      fill='#FACC15'
    />
  </svg>
)

export default Close
