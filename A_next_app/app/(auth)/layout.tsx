import React from 'react'

const layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <>
    <div className='border border-gray-300 p-2 rounded-md text-center'>
      20% off for this page
    </div>
    {children}
    </>
  )
}

export default layout
