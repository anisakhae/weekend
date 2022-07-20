import React from 'react'
import './Body.css'
import Bitmap from '../img/Bitmap-2.png'
import Path from '../img/Path-4.png'

const Body = () => {
  return (
    <div className="bd-container">
        <div className="body">
            <div className="bd-text-1">Deffinition; a practice or exercise to test 
            or improve one's fitness for athletic 
            competition, ability, or performance to 
            exhaust (something, such as a mine) by 
            working to devise, arrange, or achieve by r
            esolving difficulties. Merriam-Webster.com Dictionary.</div>
        </div>
        <div className="pic-1">
          <img src={Bitmap} alt="" />
        </div>
        <div className="pic-2">
          <img src={Path} alt="" />
        </div>
    </div>
  )
}

export default Body