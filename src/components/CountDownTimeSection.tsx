import React from "react";


interface CountDownTimeSectionProps {
  children: React.ReactNode;
}

const CountDownTimeSection: React.FC<CountDownTimeSectionProps> = ({
  children,
}) => {
  

  return <div className="bg-sky-600 p-3 text-white relative md:p-2">{children}</div>;
};

export default CountDownTimeSection;
