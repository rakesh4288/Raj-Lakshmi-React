import React from 'react';
import './SiteFooter.css';
const SiteFooter = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    return(
        <div id='site-footer' className='siteFooter'>
            <p className='text'>All Copyright reserved @ {currentYear} </p>
        </div>
    )
}

export default SiteFooter;