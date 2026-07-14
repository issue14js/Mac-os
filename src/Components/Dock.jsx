import React from 'react'
import "./dock.scss"
import { 
  RiGithubFill,
  RiBookletFill,
  RiFileEditFill,
  RiCalendarLine,
  RiSpotifyFill,
  RiMailFill,
  RiLinksLine,
  RiTerminalFill,
 } from '@remixicon/react'

const Dock = () => {
  return (compla
    <div>
     <footer className="dock">

      {/* <RiGithubFill className="icon github" /> */}
      <RiGithubFill className='icon github' color='white' />
      <RiBookletFill className='icon booklet' color='white' />
      <RiFileEditFill className='icon  pdf' color='white' />
      <RiCalendarLine className='icon calendar' color="rgba(255,255,255,1)" />
      <RiSpotifyFill className='icon spotify' color="rgba(255,255,255,1)" />
      <RiMailFill className='icon mail' color="rgba(255,255,255,1)" />
      <RiLinksLine className='icon link' color="rgba(255,255,255,1)" />
      <RiTerminalFill className='icon cli' color="rgba(255,255,255,1)" />
    </footer>
    </div>
  )
}

export default Dock
