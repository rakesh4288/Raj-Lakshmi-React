import React from 'react';
const HocComponent = (props) => {
    console.log('new data =', props);
    return(
        <div>
            <h5>HOC Sample Component</h5>
        </div>
    )
}

export default HocComponent;