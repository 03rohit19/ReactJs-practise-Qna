import { useEffect, useState } from "react";

const YourClock = () => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDay(now.toLocaleDateString("en-US", { weekday: "long" }));
      setDate(
        now.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setTime(now.toLocaleDateString("en-US", { hour12: false }));
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);
    return clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div id="day" className="text-xl mb-2 font-semibold">
          {day}
        </div>
        <div id="date" className="text-xl mb-2 font-semibold">
          {date}
        </div>
        <div id="time" className="text-xl mb-2 font-semibold">
          {time}
        </div>
      </div>
    </>
  );
};

export default YourClock;
