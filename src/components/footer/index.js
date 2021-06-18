import React, { useState, useEffect }from 'react'
import githubLogo from '../../images/repo.svg'
import Progress from '../progress'
import './Footer.css'

function Footer() {
  const [storage, setStorage] = useState(null)

    async function showEstimatedQuota() {
        if (navigator.storage && navigator.storage.estimate) {
          const estimation = await navigator.storage.estimate();
          setStorage({quota: estimation.quota, usage: estimation.usage})
        } else {
          console.error("StorageManager not found");
        }
      }

    useEffect(() => {
        showEstimatedQuota();
    }, [])


    return (
        <div className="Footer">
            <Progress storageData={storage}/>
           <a className="Footer__link" href="https://github.com/chingu-voyages/v30-toucans-team-01"> 
               <p className="Footer__text">Chingu Voyages 30 Toucans Team 01</p>
                <img className="Footer__logo" alt="githubLogo" src={githubLogo}/>
            </a>
        </div>
    )
}

export default Footer
