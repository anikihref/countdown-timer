import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'


const InfoButton: React.FC = () => {

  return (
    <div className={`w-[30px] min-w-[30px] md:w-[25px] md:min-w-[25px]`}>
      <AiOutlineInfoCircle color='white' size={'100%'}></AiOutlineInfoCircle>
    </div>
  )
}

export default InfoButton