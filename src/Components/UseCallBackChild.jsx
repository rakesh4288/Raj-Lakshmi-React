import {memo} from 'react';
const UseCallBackChild = ({newCity}) => {
    console.log('newCity component called');
    return (
        <div>UseCallBackChild</div>
    )
}

export default memo(UseCallBackChild);