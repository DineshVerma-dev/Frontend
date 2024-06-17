import React, { useState, useEffect } from 'react'
function Third() {
    const [isrunning, setIsrunning] = useState(false)
    const [Time, setTime] = useState(60)

    useEffect(() => {
        if (Time && isrunning > 0) {
            const timer = setTimeout(() => setTime(Time - 1), 1000)
            return () => clearTimeout(timer)
        }

    }, [Time, isrunning])
    const handler = () => {
        setIsrunning(true)
    }
    return (
        <div>
            Time Left  :    {Time}
            <button onClick={handler}>clickMe</button>
        </div>
    )
}

export default Third
