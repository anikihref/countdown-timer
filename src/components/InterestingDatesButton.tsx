import React from 'react'

interface InterestingDatesButtonProps {
    children: React.ReactNode;
    onClick: () => void
}

const InterestingDatesButton: React.FC<InterestingDatesButtonProps> = ({ children, onClick }) => {
  return (
    <button className='from-sky-500 to-sky-700 bg-gradient-to-tr py-1 px-2 text-white' onClick={onClick}>
        {children}
    </button>
  )
}

export default InterestingDatesButton