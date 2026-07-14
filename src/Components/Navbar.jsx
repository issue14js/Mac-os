import React from 'react'
import "./nav.scss"
import { RiAppleFill } from '@remixicon/react'


const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icons">
                <RiAppleFill color="rgba(255,255,255,1)" />
            </div>

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
    </nav>
  )
}

export default Navbar