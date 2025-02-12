import React from 'react'
import './Programs.css'

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={"src/assets/program-1.png"} alt="program-1" />
                <div className="caption">
                    <img src={"src/assets/program-icon-1.png"} alt="program-icon-1" />
                    <p>Educational Learning</p>
                </div>
            </div>
            <div className="program">
                <img src={"src/assets/program-2.png"} alt="program-2" />
                <div className="caption">
                    <img src={"src/assets/program-icon-2.png"} alt="program-icon-2" />
                    <p>Business Solution</p>
                </div>
            </div>
            <div className="program">
                <img src={"src/assets/program-3.png"} alt="program-3" />
                <div className="caption">
                    <img src={"src/assets/program-icon-3.png"} alt="program-icon-3" />
                    <p>Free Educational</p>
                </div>
            </div>
        </div>
    )
}

export default Programs