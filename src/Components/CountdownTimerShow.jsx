import React from 'react';
import PropTypes from 'prop-types';

const CountdownTimerShow = ({
    hours,
    minutes,
    seconds,
    isPaused,
    handlePause,
    handleResume,
    handleReset
}) => {
    return (
        <div id='countdown-timer-show'>
            <div className="row">
                <div className="col-md-12">
                    <h5 style={{textAlign: 'center'}}>
                        <span>{hours < 10 ? `0${hours}` : hours}</span>
                        :
                        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
                        :
                        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </h5>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12" style={{textAlign: 'center', margin: '10px 0'}}>
                    {
                        !isPaused && (
                            <button className="btn btn-warning btn-sm" onClick={handlePause}>Pause</button>
                        )
                    }

                    {
                        isPaused && (
                            <button className="btn btn-primary btn-sm" onClick={handleResume}>Resume</button>
                        )
                    }
                    &nbsp;
                    <button className="btn btn-dark btn-sm" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

CountdownTimerShow.propYypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    isPaused: PropTypes.bool,
    handlePause: PropTypes.func,
    handleResume: PropTypes.func,
    handleReset: PropTypes.func
}

export default CountdownTimerShow;