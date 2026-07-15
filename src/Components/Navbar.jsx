import React from 'react'
import "./nav.scss"
import { RiAppleFill,RiWifiFill} from '@remixicon/react'
import DateTime from './DateTime'


const Navbar = () => {
  return (
    <nav>
        <div className="left">
                <RiAppleFill size={15} color="rgba(255,255,255,1)" />


            <div className="nav-item">
                <p>Issue.io</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon right-icon">
                <RiWifiFill size={15} color="rgba(255,255,255,1)" />
                <DateTime className='nav-item'/>
            </div>         
        </div>
    </nav>
  )
}

export default Navbar