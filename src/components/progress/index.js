import React from 'react'
import './progress.css';

function Progress({storageData}) {
    let storage = `${storageData.usage / storageData.quota}`;
    let progress = 0;
    {storage < 1 ? progress = '1%' : progress = storage + '%'}
    return (
        <div className="progress">
            <span>Storage Usage</span>
            <div className="progress-container">
                
            
                <div className="progress-bar-container" style={{width: progress}}>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress
