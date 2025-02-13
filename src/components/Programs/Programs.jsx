import React from 'react';
import './Programs.css';

// Import images from 'public/assets'
import program1 from '../../../public/assets/program-1.png';
import program2 from '../../../public/assets/program-2.png';
import program3 from '../../../public/assets/program-3.png';
import programIcon1 from '../../../public/assets/program-icon-1.png';
import programIcon2 from '../../../public/assets/program-icon-2.png';
import programIcon3 from '../../../public/assets/program-icon-3.png';

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program1} alt="program-1" />
                <div className="caption">
                    <img src={programIcon1} alt="program-icon-1" />
                    <p>Educational Learning</p>
                </div>
            </div>
            <div className="program">
                <img src={program2} alt="program-2" />
                <div className="caption">
                    <img src={programIcon2} alt="program-icon-2" />
                    <p>Business Solution</p>
                </div>
            </div>
            <div className="program">
                <img src={program3} alt="program-3" />
                <div className="caption">
                    <img src={programIcon3} alt="program-icon-3" />
                    <p>Free Educational</p>
                </div>
            </div>
        </div>
    );
};

export default Programs;
