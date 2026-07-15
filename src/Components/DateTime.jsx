import { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const day = now.toLocaleDateString('en-US', { weekday: 'short' })
      const month = now.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()
      const date = now.getDate()
      const hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const hour12 = hours % 12 || 12
      const suffix = hours >= 12 ? 'pm' : 'am'
      const time = `${hour12}:${minutes} ${suffix}`

      setCurrentDateTime(`${day} ${month} ${date} ${time}`)
    }

    updateDateTime()
    const intervalId = window.setInterval(updateDateTime, 60000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <div>{currentDateTime}</div>
}

export default DateTime