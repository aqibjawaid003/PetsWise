import React from 'react'
import './collections.css'
import cat3 from '../images/cat3.png'
import cfood from '../images/cfood.png'
import dfood from '../images/dfood.png'
import band from '../images/band.png'

function collections() {
  return (
    <>
    <div className='heading'>
        <h1><span className='red'>Top </span>Categories</h1>
    </div>
    <div className='collection'>
      <div className='collectionA'>
        <div>
          <img src={cat3} alt="" srcset="" />
        </div>
      </div>
      <div className='collectionA'>
        <div>
          <img src={cfood} alt="" srcset="" />
        </div>
      </div>
      <div className='collectionA'>
        <div>
          <img src={band} alt="" srcset="" />
        </div>
      </div>
      <div className='collectionA'>
        <div>
          <img src={dfood} alt="" srcset="" />
        </div>
      </div>

    </div>
    </>
  )
}

export default collections