import React, { useEffect, useState } from "react";
import DateFormater from "../helpers/dateFormater";
import {IoRemoveSharp} from 'react-icons/io5'
import { withTooltip } from "../hoc/withTooltip";
import CountDownTimeSection from "./CountDownTimeSection";

interface CountDownTimerProps {
  setTime: React.Dispatch<React.SetStateAction<number | null>>;
  time: number | null;
}
const TimeSectionWithTooltip = withTooltip(CountDownTimeSection)

const CountDownTimer: React.FC<CountDownTimerProps> = ({ time, setTime }) => {
  const [expireDate, setExpireDate] = useState(
    new DateFormater(time!).getFormatedDate()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time! - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [expireDate]);

  useEffect(() => {
    setExpireDate(new DateFormater(time!).getFormatedDate());

    if (time! < 0) {
      setTime(null);
    }
  }, [time]);
  

  return (
    <>
      <div className="flex text-5xl gap-x-1 select-none lg:text-3xl">
        <TimeSectionWithTooltip tooltipText='Days'>
          {expireDate.days}
        </TimeSectionWithTooltip>

        <TimeSectionWithTooltip tooltipText='Hours'>
          {expireDate.hours}
        </TimeSectionWithTooltip>

        <TimeSectionWithTooltip tooltipText='Minutes'>
          {expireDate.minutes}
        </TimeSectionWithTooltip>

        <TimeSectionWithTooltip tooltipText='Seconds'>
          {expireDate.seconds}
        </TimeSectionWithTooltip>
      </div>

      <button className="w-[40px] min-w-[40px] ml-10 select-none lg:ml-5 md:w-[25px] md:min-w-[25px]" onClick={() => setTime(null)}>
        <IoRemoveSharp size={'100%'} color='white' />
      </button>
    </>
  );
};

export default CountDownTimer;
