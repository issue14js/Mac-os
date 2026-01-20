import React from 'react'
import "./dock.scss"

const Dock = () => {
  return (
    <div>
     <footer className="dock">
   
        <img className='icon github' src="/Doc-icons/github-fill.svg" alt="GitHub" />


        <img className="icon notebook" src="/Doc-icons/booklet-fill.png" alt="Notebook" />

        <img className="icon pdf" src="/Doc-icons/file-pdf-2-line.png" alt="PDF" />


        <img className="icon calendar" src="/Doc-icons/calendar-2-line.png" alt="Calendar" />


        <img className="icon spotify" src="/Doc-icons/spotify-fill.png" alt="Spotify" />


        <img className="icon mail" src="/Doc-icons/mail-fill.png" alt="Mail" />

        <img className="icon link" src="/Doc-icons/links-fill.png" alt="Link" />


        <img className="icon cli" src="/Doc-icons/terminal-box-fill.png" alt="cli" />

    </footer>
    </div>
  )
}

export default Dock
