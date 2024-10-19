import React from 'react';
const SiteFooter = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear();
    return(
        <div id='site-footer' className='siteFooter'>
            <p className='text'>All Copyright Reserved @ {currentYear} </p>
        </div>
    )
}

export default SiteFooter;