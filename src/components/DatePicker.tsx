import React, { useState } from "react";
import moment from "moment";
import { withTooltip } from "../hoc/withTooltip";
import InfoButton from "./InfoButton";
import {AiOutlineClose} from 'react-icons/ai'

interface DatePickerProps {
  setTime: React.Dispatch<React.SetStateAction<number | null>>;
}

const InfoTooltip = withTooltip(InfoButton);


const DatePicker: React.FC<DatePickerProps> = ({ setTime }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (moment(value).isValid()) {
      setTime(moment(value).toDate().getTime() - Date.now());
      setError("");
      console.log(1)
    } else {
      setError("The date you have entered is not valid");
    }
  }

  return (
    <form
      className="w-full max-w-[1000px]"
      onSubmit={handleFormSubmit}
    >
      <div className="flex items-center justify-between ">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
          placeholder="Enter date"
          className="relative p-2 text-xl bg-sky-600 text-white flex-grow mr-8 placeholder:text-gray-300 md:mr-5 md:text-lg md:py-1"
        />

        <InfoTooltip className='-translate-x-[95%] before:left-[95%]' activateEvent="click" tooltipText="Date should be in format: YYYY-MM-DD HH:MM:SS" />
      </div>

      {error && 
        <div className="relative mt-5 bg-red-400 p-3 w-full pr-[60px] lg:p-2 lg:pr-[50px] md:mt-3 md:p-[40px]">
        
          <div className=" text-center font-bold text-white tracking-[1px] lg:tracking-normal md:text-sm">{error}</div>
          <button 
            className='w-[25px] absolute right-[15px] top-1/2 -translate-y-1/2 lg:right-[10px] md:w-[20px] md:min-w-[20px] '
            onClick={() => {setError('')}}
            type='button'
          >
            <AiOutlineClose color='white' size={'100%'}></AiOutlineClose>
          </button>
        </div>
      }

      <button className="" type="submit"></button>
    </form>
  );
};

export default DatePicker;
