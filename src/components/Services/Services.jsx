import React from 'react'
import './Services.css'
import dog1 from '../images/dog1.png'
import shield from '../images/shield.png'
import suport from '../images/suport.png'
import truck from '../images/truck.png'

function Services() {
  return (
    <div className='service'>
        <div className='service_main top40'>
            <img src={dog1} alt="" srcset="" />
       </div>       
       <div className='service_main'>
                 <h1 className='red'>What your pet needs</h1> 
                 <h1>, when they need it.</h1>  
        </div>
      
        <div className ='service_main1'>
            <div className='service1'>
            <div className='center'><div className='suport'><img src={suport} alt="" /></div></div>
                <p className='red bold top8'>24/7 Support</p>
                <p className='top8 Font_light font_small'>Shop online to get orders over $35 shipped fast and free.</p>
            </div>
            <div className='service1'>
            <div className='center'> <div className='truck'><img src={truck} alt="" /></div></div>
                <p className='red bold top8'>Free Same-Day Delivery</p>
                <p className='top8 Font_light font_small'>Order by 2pm local time to get free delivery on orders $35+ today.</p>
            </div>
            <div className='service1'>
            <div className='center'><div className='shield'><img src={shield} alt="" /></div></div>
                <p className='red bold top8'>Security payment</p>
                <p className='top8 Font_light font_small'>35% off your first order plus 5% off all future orders.</p>
            </div>
        </div>
    </div>
  )
}

export default Services