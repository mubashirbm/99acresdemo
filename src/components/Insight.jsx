import React from 'react'

export default function Insight() {
  return (
    <>
     <div className='p-10 w-6/12 rounded-lg bg-sky-100'>
            <div className='flex'>
                <div>
                    <img src="https://static.99acres.com/universalapp/img/insight_large.png" className='w-32 h-12' alt="" />
                </div>
                <div>
                    <h4 className='text-xs text-blue-400'>INTRODUCING</h4>
                    <h1 className='text-2xl font-semibold'>INSIGHTS</h1>
                </div>
                <div>
                    <span > <img src="https://cdn.icon-icons.com/icons2/1102/PNG/512/1485969917-3-right_78909.png"className='w-16 ml-6 -mt-4  -rotate-45' alt="" /></span>
                </div>
            </div>
            <div className='mt-8 '>
                <ul className='leading-8 '>
                    <li className='flex'> <span className='mr-1 mt-1'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC2MFRIpo-0IOa6uHummPBTGo4nrn3DNe7Q&usqp=CAU" className=' rounded-full w-5 ' alt="" /></span>Understand Localities</li>
                    <li className='flex'><span className='mr-1 mt-1'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC2MFRIpo-0IOa6uHummPBTGo4nrn3DNe7Q&usqp=CAU" className=' rounded-full w-5 ' alt="" /></span>Read Resident Reviews</li>
                    <li className='flex'><span className='mr-1 mt-1'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC2MFRIpo-0IOa6uHummPBTGo4nrn3DNe7Q&usqp=CAU" className=' rounded-full w-5 ' alt="" /></span>Check Price Trends</li>
                    <li className='flex'><span className='mr-1 mt-1'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC2MFRIpo-0IOa6uHummPBTGo4nrn3DNe7Q&usqp=CAU" className=' rounded-full w-5 ' alt="" /></span>Tools Utilities & more</li>
                </ul>
            </div>

        </div> 
    </>
  )
}
