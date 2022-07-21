import React from 'react'
import './Rectangle.css'
import Oval from '../img/Oval.svg'
import Bitmap from '../img/Bitmap-1.png'

const Rectangle = () => {
  return (
    <div className="rc-container">
        <div className="rectangle">
            <div className="rec-text"> WEEKEND FROM HOME
            </div>
            <i className="rec-text-1">stay active with a little workout</i>
        </div>
        <div className="pic-2">
          <img src={Bitmap} alt="" />
        </div>
        {/* <div className="pic-1">
          <img src={Oval} alt="" />
        </div> */}
        
    </div>
  )
}

export default Rectangle