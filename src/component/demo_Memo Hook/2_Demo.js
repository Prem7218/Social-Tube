import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    let normalNum = 1;
    const [stateNum, setStateNum] = useState(1);
    let refNum = useRef(1);
    const i = useRef(null);

    useEffect(() => {
        i.current = setInterval(() => {
            console.log("Hello: " + Math.random())
        }, 1000);

        return () => clearInterval(i.current);
    }, []);

  return (
    <div className='border border-black border-double ml-[5%] w-4/12'>
        <div className='ml-5 gap-4'>
            <button 
                className='bg-green-200 p-2 text-black border border-black mt-5'
                onClick={() => {
                    console.log("NormalNum: ",normalNum);
                    return normalNum += 1;
                }}>Increase Number: </button>
            <span className='bg-black text-white p-2 outline outline-1 outline-black ml-4'>{normalNum}</span>
        </div>

        <div className='ml-5 gap-4'>
            <button 
                className='bg-red-200 p-2 text-black border border-black mt-5'
                onClick={() => {
                    console.log("StateNum: ", stateNum);
                    setStateNum(stateNum + 1);
                }}>Increase Number: </button>
            <span className='bg-black text-white p-2 outline outline-1 outline-black ml-4'>{stateNum}</span>
        </div>

        <div className='ml-5 gap-4'>
            <button 
                className='bg-violet-200 p-2 text-black border border-black mt-5'
                onClick={() => {
                    console.log("refNum: ",refNum.current);
                    refNum.current += 1;
                }}>Increase Number: </button>
            <span className='bg-black text-white p-2 outline outline-1 outline-black ml-4'>{refNum.current}</span>
        </div>

        <div className='ml-5 gap-4'>
            <button 
                className='bg-slate-200 p-2 text-black border border-black mt-5'
                onClick={() => {
                    console.log("Interval: ");
                    return () => clearInterval(i.current);
                }}>Interval Stoper</button>
        </div>
    </div>
  )
}

export default Demo2;