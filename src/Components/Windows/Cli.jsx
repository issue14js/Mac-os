import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am Ankit (Kaju), a self-taught full-stack MERN developer from Darbhanga, Bihar, India — passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vanilla JS, GSAP, Three.js
Backend: Node.js, Express, MongoDB
Learning: TypeScript, AWS, CI/CD, Go, Rust
Tools: Git, Docker`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. VaultX - Full-stack password manager (Chrome Extension + React dashboard + Node/Express/MongoDB, AES-256 zero-knowledge encryption)
2. AirPiano - Hand-tracking piano using MediaPipe + Web Audio API
3. 48 Laws of Power Reader - Interactive artifact with Hinglish summaries
4. neet2027-v2 - Educational platform (React frontend, Node.js/Express/MongoDB backend)`
        },
        experience: {
            description: 'Display learning journey',
            usage: 'experience',
            fn: () => `Sheryians Coding School - MERN Cohort 2 (Completed)
  - Built full-stack MERN projects
  - Learned modern web development practices

Self-Taught Developer (Ongoing)
  - Exploring TypeScript, GSAP, Three.js, AWS, CI/CD
  - Building real-world projects like VaultX`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: YOUR_EMAIL
Phone: YOUR_PHONE
Location: Darbhanga, Bihar, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/YOUR_GITHUB_USERNAME', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: YOUR_TWITTER_HANDLE
LinkedIn: YOUR_LINKEDIN_HANDLE
Portfolio: YOUR_PORTFOLIO_URL`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Kaju's Portfolio CLI!    ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my learning journey, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about      - Learn about me
  • skills     - View my technical skills
  • projects   - Check out my work
  • experience - See my learning journey
  • contact    - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'issue.io:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli