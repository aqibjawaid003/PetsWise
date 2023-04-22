import React from 'react'
import "./Home.css"
import ellipse4 from "../images/Ellipse4.png"
import  dog from "../images/dog.png"
import  cat from "../images/cat.png"

function Home() {
  return (
    <div className='main'>
        <div className='main_right'>
         <span className='circle'><img src={ellipse4} alt="" srcset=""height={500} /></span> 
         <span className='dog'><img src={dog} alt="" srcset=""height={500} /></span>
         <span className='cat'><img src={cat} alt="" srcset=""height={260} /></span> 
        </div>
        <div className='main_text'>
            <h1 className='heading_main'>PET FOOD OF SUPERMARKET</h1>
            <div>
                <p className='P_main'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                </p>
                <button className='shop_top' type="submit">Shop Top</button>
                <button className='shop_now' type="submit">Shop Now</button>
                
            </div>
        </div>
    </div>
)
}

export default Home