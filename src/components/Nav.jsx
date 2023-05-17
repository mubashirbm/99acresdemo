import React from 'react'
import Insight from './Insight'

export default function Nav() {
  return (
    <>
   <div className='bg-white w-full rounded-lg  border m-auto flex'>
    <div className='bg-slate-100 p-8 w-3/12 rounded-s-lg'>
        <ul className='leading-9 font-semibold text-gray-500'>
            <li className='text-base mt-1 font-semibold'>BUY A HOME</li>
            <li>Land/Plot</li>
            <li>Commercial</li>
            <li>INSIGHTS <span className='bg-blue-600 p-1 text-xs rounded-sm text-white'>NEW</span></li>
            <li>ARTICLES & News</li>
        </ul>
        
    </div>
    <div className='flex py-8 px-10  justify-between w-9/12'>
        <div className='leading-8 text-xs font-semibold ml-2'>
            <h1 className='text-gray-500'>Top Cities </h1>
            <ul>
                <li>Property in Delhi/NCR</li>
                <li>Property in Mumbai</li>
                <li>Property in Banglore</li>
                <li>Property in Hyderabad</li>
                <li>Property in Pune</li>
                <li>Property in Kolkata</li>
                <li>Property in Chennai</li>
                <li>Property in Ahmedabad</li>
            </ul>
        </div>
        
        
    <Insight/>
    </div>
    </div>   
    </>
  )
}
