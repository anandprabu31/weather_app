import React from 'react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [dayOfWeek, setDayOfWeek] = useState(new Date().toLocaleString('en-US', { weekday: 'long' }));

  useEffect(() => {
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
      setDayOfWeek(new Date().toLocaleString('en-US', { weekday: 'long' }));
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='head'>
     <h3>^</h3>
      <div className="position-absolute top-0 end-0 me-3">
      <h5>{time} | {date} | {dayOfWeek}</h5>
      </div>
    </div>
  );
}
 
export default Header;