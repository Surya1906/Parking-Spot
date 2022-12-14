import * as React from 'react'

const Product = (props) => (
  <svg
    width={20}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M15.871 5.253h-2.294V2.95c0-1.566-1.24-2.84-2.762-2.84H9.163C7.64.11 6.401 1.384 6.401 2.95v2.303H4.106a.768.768 0 0 0-.768.768v10.326c0 1.942 1.579 3.52 3.52 3.52h6.261c1.942 0 3.52-1.578 3.52-3.52V6.021a.768.768 0 0 0-.768-.768ZM7.938 2.95c0-.719.55-1.303 1.225-1.303h1.652c.675 0 1.225.584 1.225 1.303v2.303H7.938V2.95Zm7.165 13.397c0 1.094-.89 1.984-1.984 1.984H6.86a1.986 1.986 0 0 1-1.985-1.984V6.79h1.527v1.32a.768.768 0 0 0 1.537 0V6.79h4.102v1.32a.768.768 0 1 0 1.537 0V6.79h1.526v9.557Z'
      fill='#FDE047'
    />
    <path
      d='M11.586 13.363H8.392a.768.768 0 0 1 0-1.537h3.194a.768.768 0 1 1 0 1.537Z'
      fill='#FDE047'
    />
  </svg>
)

export default Product
