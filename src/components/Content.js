import React from 'react'
import Button from './Button';
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Result from './Result';

import { useState } from 'react';
export default function Content() {
  const [isDate,setIsDate] = useState("");
  function handlebirthday(event){
    // console.log("Done")
    setIsDate(event.target.value)
  }
  return (
   <>
   <div className='bg-red-400 w-full my-2 p-0.5'>
    <div className='bg-red-700 mx-12 my-2 p-12 flex flex-col justify-center items-center rounded-3xl'>

   <label htmlFor="birthday" className='my-10 text-white text-xl'>Enter your Date of birth here</label>

   {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
        label="Select your birthday" 
        value={isDate}  // Use the isDate state
        onChange={handlebirthday}  // Use the handlebirthday function
        renderInput={(params) => <input {...params} id="birthday" name="birthday" className='p-4 rounded mb-20' />}
        />
      </LocalizationProvider> */}


   <input type='date' id='birthday'name='birthday' className='p-4 rounded mb-20'required value={isDate} onChange={handlebirthday}/>

   </div>
   </div>
   <Button datevalue={isDate}>Calculate</Button>
   {/* <Result/> */}
   </>
  )
}
