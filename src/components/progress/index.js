import React from 'react'
import './progress.css';

function Progress({storageData}) {
    const percentOfStorageUsed = Math.ceil((storageData.usage / storageData.quota) * 100)+'%';
    return (
        <div className="progress">
            <span>Storage Usage</span>
            <div className="progress-container">
                <div className="progress-bar-container" style={{width: percentOfStorageUsed}}>
                </div>
                {percentOfStorageUsed}
            </div>
        </div>
    )
}

export default Progress
