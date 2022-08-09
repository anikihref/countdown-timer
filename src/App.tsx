import React, { useState } from "react";
import CountDownTimer from "./components/CountDownTimer";
import DatePicker from "./components/DatePicker";
import InterestingDates from "./components/InterestingDates";

function App() {
  const [time, setTime] = useState<number | null>(null);

  return (
    <div className="h-full">
      <div className="h-[66.66%] from-sky-600 to-sky-800 bg-gradient-to-tr flex justify-center items-center px-5">
        {time ? (
          <CountDownTimer setTime={setTime} time={time} />
        ) : (
          <DatePicker setTime={setTime} />
        )}
      </div>

      <InterestingDates setTime={setTime}></InterestingDates>
    </div>
  );
}

export default App;
