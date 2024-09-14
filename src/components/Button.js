import React from 'react'
import { useState } from 'react';

export default function Button({children, datevalue}) {
  // let result = <p className='text-2xl'></p>
  const [isAge, setIsAge] = useState("")

  function handleyourbirthday(datevalue){
    if (datevalue !== ""){
      const today = new Date();
      const your = new Date(datevalue);
      let age = today.getFullYear() - your.getFullYear();
      setIsAge(`Your Age is ${age}`)
    }
    else{
      alert("Please Enter your Birthday")
    }
  }

  return (
    <>
    <div className='bg-cyan-500 hover:bg-cyan-300 flex flex-col items-center justify-center w-fit p-4 m-auto rounded-2xl'>
        <button className='py-2 px-4' onClick={()=>handleyourbirthday(datevalue)} >{children}</button>
    </div>

<div className='flex flex-col justify-center items-center mt-10'>
    {isAge && <p className='text-2xl'>{isAge}</p>}
</div>
</>
  )
}
