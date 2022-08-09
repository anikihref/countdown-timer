import React, { SetStateAction } from "react";
import { findNextDate } from "../helpers/findNextDate";
import { DATES } from "../static/dates";
import InterestingDatesButton from "./InterestingDatesButton";

interface InterestingDatesProps {
  setTime: React.Dispatch<SetStateAction<number | null>>;
}

const InterestingDates: React.FC<InterestingDatesProps> = ({ setTime }) => {
  return (
    <div className="flex flex-wrap bg-white items-start h-[33.3%] gap-3 container border-t-2 border-t-gray-500 p-5 lg:gap-2">
      <InterestingDatesButton
        onClick={() => {
          setTime(
            findNextDate(DATES.NEW_YEAR).getTime() - Date.now()
          );
        }}
      >
        New Year
      </InterestingDatesButton>
      
      <InterestingDatesButton
        onClick={() => {
          setTime(findNextDate(DATES.CHRISTMAS).getTime() - Date.now());
        }}  
      >
        Christmas
      </InterestingDatesButton>

      <InterestingDatesButton onClick={() => {
        setTime(findNextDate(DATES.FALL).getTime() - Date.now())
      }}>
        Fall
      </InterestingDatesButton>

      <InterestingDatesButton onClick={() => {
        setTime(findNextDate(DATES.WINTER).getTime() - Date.now())
      }}>
        Winter
      </InterestingDatesButton>

      <InterestingDatesButton onClick={() => {
        setTime(findNextDate(DATES.SPRING).getTime() - Date.now())
      }}>
        Spring
      </InterestingDatesButton>

      <InterestingDatesButton onClick={() => {
        setTime(findNextDate(DATES.SUMMER).getTime() - Date.now())
      }}>
        Summer
      </InterestingDatesButton>
    </div>
  );
};

export default InterestingDates;
