import React from 'react'
import './Shop.css'
import brand1 from '../images/brand4.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand1.png'
import girl  from '../images/girl.png'
import dog_cat from '../images/dog_cat.png'



function Shop() {
  return (
    <div>
        <div className='heading top10'>
            <h1><span className='red'>Popular </span>Brands</h1>
        </div>
       <div className='brand'>
            <div className='brandA'>
                <img src={brand1} alt="" />
            </div>
            <div className='brandA'>
                <img src={brand2} alt="" />
            </div>
            <div className='brandA'>
                <img src={brand3} alt="" />
            </div>
            <div className='brandA'>
                <img src={brand4} alt="" />
            </div> 
       </div> 

       <div className='brand_B'>
           <div className='girl'>
            <img src={girl} width={"100%"} alt="" />
           </div>
           <div className='dog_cat'>
            <img src={dog_cat} height={350} alt="" />
           </div>
           <div className='brand_text'>
               <h1>New<span className='red'> Puppy </span>Or Kitten?</h1>
               <p>Discover everything you need to make them feel at home</p>
               <button className='shop_kitchen' type="submit">Shop kitchen</button>
           </div>
       </div>

    </div>     
  )
}

export default Shop