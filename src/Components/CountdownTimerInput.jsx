import React from 'react';
import PropTypes from "prop-types";

const CountdownTimerInput = ({
    handleInput,
    handleStart,
    isStartBtn
}) => {
    return (
        <div id='countdown-timer-input' className='countdownTimerInput'>
            <div className="row">
                <div className="col-md-4">
                    <input type="text" id="hours" className="form-control" placeholder="HH" maxLength={2} onChange={handleInput} />
                </div>

                <div className="col-md-4">
                    <input type="text" id="minutes" className="form-control" placeholder="MM" maxLength={2} onChange={handleInput} />
                </div>

                <div className="col-md-4">
                    <input type="text" id="seconds" className="form-control" placeholder="SS" maxLength={2} onChange={handleInput}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12" style={{textAlign: 'center', margin: '10px 0'}}>
                    <button className="btn btn-success btn-sm" disabled={isStartBtn} onClick={handleStart}>Start</button>
                </div>
            </div>
        </div>
    )
}

CountdownTimerInput.propTypes = {
    handleInput: PropTypes.func,
    handleStart: PropTypes.func,
    isStartBtn: PropTypes.bool
}

export default CountdownTimerInput