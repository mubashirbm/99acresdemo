import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='container p-14 m-auto bg-gray-900 mt-10 text-white'>
        <div className='flex justify-between px-32'>
            <div className='w-7/12'>
                <ul className='flex justify-between'>
                    <div className='leading-9'>
                        <li className='font-bold'>99acress</li>
                        <li>Mobile Apps</li>
                        <li>Our Services</li>
                        <li>Price Trends</li>
                        <li>Post Your Property</li>
                        <li>Builders in India</li>
                        <li>Area Converter</li>
                        <li>Articles</li>
                        <li>Customer Service</li>
                        <li>Sitemap</li>
                    </div>
                    <div className='leading-9'>
                        <li className='font-bold'>Company</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Careers with us</li>
                        <li>Terms & Conditions</li>
                        <li>Request Info</li>
                        <li>Feedback</li>
                        <li>Report a Problem</li>
                        <li>Testimonials</li>
                        <li>Privacy Policy</li>
                        <li>Summons/Notices</li>
                        <li>Grievances</li>
                        <li>Safety Guide</li>
                    </div>
                    <div className='w-48 mr-6'>
                        <li className='mt-2 font-bold'>Our Partners</li>
                        <li className='mt-2'>Naukri.com - Jobs in India</li>
                        <li className='mt-2'>Naukrigulf.com - Jobs in middle east</li>
                        <li className='mt-2'>Jeevansathi.com - Matrimonials</li>
                        <li className='mt-2'>Brijj.com - Professional Networking</li>
                        <li className='mt-2'>Shiksha.com - Education Career Info</li>
                        <li className='mt-2'>Policybazaar.com - Insurance India</li>
                        <li className='mt-2'>Meritnation.com - Online Educational Assessment</li>
                        <li className='mt-2'>PaisaBazaar.com</li>
                        <li className='mt-2'>AmbitionBox.com</li>
                        <li className='mt-2'>FirstNaukri.com - A jobsite for campus hiring</li>
                        <li className='mt-2'>Jobhai.com – Find Jobs Near You</li>
                        <li className='mt-2'>Techminis.com - Tech news on the go</li>
                    </div>
                    
                </ul>
            </div>

            <div className='w-4/12'> 
            <ul>

                <li className='font-bold mt-2'>Contact us</li>
                <li className='mt-2'>Toll Free - 1800 41 99099</li>
                <li className='text-gray-400 text-sm'>Monday - Saturday (9:00AM to 11:00PM IST)</li>
                <li className='mt-3'>Email - feedback@99acres.com</li>
                <li className='mt-6'>Connect with us</li>
                <li className='mt-2 flex items-center gap-4' >
                    <span>
                    <img src="https://icons-for-free.com/iconfiles/png/512/media+social+square+icon-1320185491218553636.png" className=' w-8' alt="" />
                    </span>
                    
                    <span><img src="https://icons-for-free.com/iconfiles/png/512/social+square+youtube+icon-1320185494902500914.png" className='w-8 mr-4' alt="" /></span>
                    <span>
                        <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" className='w-5' alt="" />
                    </span>
                    <span>
                        <img src="https://static-00.iconduck.com/assets.00/instagram-icon-256x256-lgnuquma.png" className='w-5 ml-2' alt="" />
                    </span>
                </li>
                <li className='mt-2 font-bold'>Download the App</li>
                <li className='mt-4 flex gap-2'>
                    <button className='w-5/12'><img src="https://static.99acres.com/universalapp/img/Play.png" alt="" /></button>
                    <button className='w-5/12'><img src="https://static.99acres.com/universalapp/img/ios.png" alt="" /></button>
                </li>
                <li className='mt-2 '>
                    <p className='text-xs text-gray-400'>Usage of 99acres.com to upload content showing area in non standard targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at <span className='text-blue-500'>report abuse</span> </p>
                </li>
                <li className='mt-2 w-10/12 leading-5 text-base font-semibold'>
                <p>All trademarks are the property of their respective owners.</p>
                <p>All rights reserved - Info Edge (India) Ltd.A naukri.com group venture</p>
                </li>
            </ul>
            </div>
        </div>

      </div>
    </>
  )
}
