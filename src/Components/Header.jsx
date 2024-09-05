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
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<linearGradient id="PtY0UrX1qJDQb5CcMCRpOa_qA3w9Yp2vY7r_gr1" x1="6.221" x2="37.408" y1="5.221" y2="36.408" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed100"></stop><stop offset="1" stop-color="#e36001"></stop></linearGradient><path fill="url(#PtY0UrX1qJDQb5CcMCRpOa_qA3w9Yp2vY7r_gr1)" d="M24,4C13.507,4,5,12.507,5,23s8.507,19,19,19s19-8.507,19-19S34.493,4,24,4z"></path><path d="M38.998,23.485c-2.403-4.882-11.494-4.479-13.366,2.137c-7.157,0.25-7.769,12.23-0.632,12.107 c0.857,0,6.558,0,10.995,0c3.923-3.199,6.525-7.935,6.927-13.289C42.198,23.776,40.326,23.219,38.998,23.485z" opacity=".05"></path><path d="M38.925,23.674c-2.594-4.861-11.378-4.165-13.075,2.081c-6.67,0.22-7.012,11.007-0.351,11.064 c0.89,0.008,7.525,0,11.405,0c3.362-3.048,5.591-7.334,5.999-12.14C42.057,23.948,40.297,23.425,38.925,23.674z" opacity=".07"></path><path d="M38.852,23.863c-2.786-4.841-11.263-3.852-12.783,2.025c-6.183,0.19-6.254,9.968-0.069,10.022 c0.923,0.008,8.491,0,11.815,0c2.802-2.897,4.657-6.733,5.071-10.99C41.916,24.121,40.267,23.631,38.852,23.863z" opacity=".07"></path><linearGradient id="PtY0UrX1qJDQb5CcMCRpOb_qA3w9Yp2vY7r_gr2" x1="29.373" x2="37.64" y1="20.668" y2="39.146" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fcfcfc"></stop><stop offset="1" stop-color="#c3c9cd"></stop></linearGradient><path fill="url(#PtY0UrX1qJDQb5CcMCRpOb_qA3w9Yp2vY7r_gr2)" d="M39.5,24c-0.245,0-0.484,0.022-0.721,0.053C37.518,22.21,35.401,21,33,21 c-3.178,0-5.858,2.12-6.712,5.021C23.904,26.134,22,28.087,22,30.5c0,2.485,2.015,4.5,4.5,4.5c1.085,0,11.875,0,13,0 c3.038,0,5.5-2.462,5.5-5.5C45,26.462,42.538,24,39.5,24z"></path>
</svg>

      <div className="position-absolute top-0 end-0 me-3">
      <h5>{time} | {date} | {dayOfWeek}</h5>
      </div>
    </div>
  );
}
 
export default Header;