import React from 'react'
import './collections.css'
import cat3 from '../images/cat3.png'
import cfood from '../images/cfood.png'
import dfood from '../images/dfood.png'
import band from '../images/band.png'
import vital from '../images/VitalCare.png'
import women from '../images/woman.png'

function collections() {
  return (
    <>

      <div className='heading'>
        <h1><span className='red'>Top </span>Categories</h1>
      </div>
      <div className='collection'>
        <div className='collectionA'>
          <div className='catT'>
            <img className='top10' src={cat3} alt="" srcset="" />
          </div>
          <p>Cat Toys</p>
        </div>
        <div className='collectionA'>
          <div className='catF'>
            <img className='top10' src={cfood} alt="" srcset="" />
          </div>
          <p>Cat Food</p>
        </div>
        <div className='collectionA'>
          <div className='dogT'>
            <img className='top10' src={band} alt="" srcset="" />
          </div>
          <p>Dog Toys</p>
        </div>
        <div className='collectionA'>
          <div className='dogF'>
            <img className='top10' src={dfood} alt="" srcset="" />
          </div>
          <p>Dog Food</p>
        </div>
      </div>

      <div className="VitalCare">
        <div className='vitalA'>
          <img src={vital} alt="" srcset="" />
          <p>Save big annually with our veterinarian recommended wellness plan.</p>
          <button className='shop_now' type="submit">Shop Now</button>
        </div>
        <div className='vitalB'>
          <div className='Vimg'>
            <img src={women} height={250} width={350} alt="" srcset="" />
          </div>
          <div className='redbox'></div>
        </div>
      </div>
    </>
  )
}

export default collections