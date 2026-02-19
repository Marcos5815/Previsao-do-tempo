
interface WeatherProps  {
  day: string | number;
  date: string | undefined;
  min: number | undefined;
  max: number | undefined;
  icon: string | undefined;
}


export const WeatherNextDays = ({ day, date, min, max, icon }: WeatherProps) => {



  return (
    <div className="w-26 h-38 flex flex-col justify-center items-center text-white-text">
      <p >{day}</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <p>{`(${date})`}</p>
        <img className="w-7" src={icon} alt={icon}/>
        <p className="font-semibold text-[20px]">{`${min}/${max}°`}</p>
      </div>
    </div>
  );
};
