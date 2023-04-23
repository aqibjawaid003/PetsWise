import React from 'react'
import './About.css'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import stars from '../images/rating.png'
import rating from '../images/rating1.png'
import vector1 from '../images/vector1.png'
import vector2 from '../images/vector2.png'
import CAT from '../images/catV.png'
import taste from '../images/taste.png'



function About() {
    return (
        <>
            <div className='heading top10'>
                <h1><span className='red'>Best   </span>Seller</h1>
            </div>

            <div className='product_main'>
                <div className='product'>
                    <div>
                        <img src={product1} width={160} height={160}/>
                    </div>
                    <img src={stars} width={80}/>
                    <p>Nam justo libero porta ege</p>
                    <p className='red'>$85.00</p>
                </div>
                <div className='product'>
                    <div>
                        <img src={product2} width={160} height={160}/>
                    </div>
                    <img src={rating} width={80}/>
                    <p>Nam justo libero porta ege</p>
                    <p className='red'>$85.00</p>
                </div>
                <div className='product'>
                    <div>
                        <img src={product3} width={160} height={160}/>
                    </div>
                    <img src={stars} width={80}/>
                    <p>Nam justo libero porta ege</p>
                    <p className='red'>$85.00</p>
                </div>
                <div className='product'>
                    <div>
                        <img src={product4} width={160} height={160}/>
                    </div>
                    <img src={stars} width={80}/>
                    <p>Nam justo libero porta ege</p>
                    <p className='red'>$85.00</p>
                </div>
            </div>

            <div className='products_2'>
              <div className='vector1'>
                <img src={vector1} height={"100%"} width={"100%"} />
              </div>
              <div className='vector2'>
                <img src={vector2} alt="" />
              </div>
              <div className='CAT'>
                <img src={CAT} height={472} alt="" />
              </div>
              <div className='products_2text'>
                <img src={taste} alt="" />
                <h3>Taste it, love it or we’ll replace it… Guaranteed! </h3>
                <p>At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you find a replacement. That’s our taste guarantee.</p>
                <button className='findMore' type="submit">Find more</button>
              </div>
            </div>
        </>
    )
}

export default About