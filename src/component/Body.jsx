import React from 'react'
import './Body.css'
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
            <div className="bd-text-2">-weekend team</div>
        </div>
        <div className="img-1">
          <img src={Path} alt="" />
        </div>
    </div>
  )
}

export default Body