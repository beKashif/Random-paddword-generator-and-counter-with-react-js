import React from 'react'
import { useState } from 'react'

const ClockApp = () => {
    const [count, setcount] = useState(0)

    const add = () => {
        setcount(count+1)
    }
    const reset = () => {
        setcount(0)
    }
    const dlt = () => {
        setcount(count-1)
    }
  return (
    <>
            <div className='wrapper1'>
            <div className='wrapper-inside1'>
                <div className='main1'>
                    <h1>
                        {count}
                    </h1>
                    <button onClick={add} className="btn" id="add">Add</button>
                    <button onClick={reset} className="btn" id="reset" disabled={count === 0}>Reset</button>
                    <button onClick={dlt} className="btn" id="delete" disabled={count === 0}>Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ClockApp