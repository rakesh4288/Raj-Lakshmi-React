import React, {useState, useEffect} from "react";
import * as Icon from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountdownTimerShow from "./CountdownTimerShow";
import CountdownTimerInput from "./CountdownTimerInput";
const CountdownTimer = () => {
    const [isStart, setIsStart] = useState(false);
    const [isStartBtn, setIsStartBtn] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(0);
    const handleStart = () => {
        if((hours < 0 || minutes < 0 || seconds <=0) || (hours >= 24 || minutes >= 59 || seconds >= 59)) {
            toast.error("Invalid Input - Please enter numeric only", {closeButton: true})
            return;
        } else {
            setIsStart(true);
        }
    }

    const handlePause = () => {
        setIsPaused(true);
        clearInterval(timerId);
    }

    const handleResume = () => {
        setIsPaused(false);
        runTimer(seconds, minutes, hours);
    }

    const handleReset = () => {
        setIsStart(false);
        resetTimer();
    }

    const resetTimer = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(timerId);
    }

    const handleInput = (e) => {
        const value = e.target.value
        const id = e.target.id;
        console.log('handleInput =', value);
        if(!isNaN(value)) {
            if (id === 'hours') {
                setHours(value);
            } else if (id === 'minutes') {
                setMinutes(value);
            } else {
                setSeconds(value);
            }
            setIsStartBtn(false);
        } else {
            setIsStartBtn(true);
            toast.error("Incorrect input - Please enter number only !");
            return;
        }

    }

    const runTimer = (sec, min, hr, tid) => {
        if(sec > 0) {
            setSeconds((s) => s - 1);
        } else if (sec === 0 && min > 0) {
            setMinutes((m) => m - 1);
            setSeconds(59);
        } else {
            setHours((h) => h - 1);
            setMinutes(59);
            setSeconds(59);
        }

        if (sec === 0 && min === 0 && hr === 0) {
            //resetTimer();
            handleReset();
            toast.success("Timer has now completed", {closeButton: true})
            clearInterval(tid);
            setIsStart(false);
        }
    }
    
    useEffect(() => {
        let tid;
        if(isStart) {
            tid = setInterval(() => {
                runTimer(seconds, minutes, hours, tid)
            }, 1000);
            setTimerId(tid);
        }

        return (() => {
            clearInterval(tid);
        });
    }, [isStart, hours, minutes, seconds]);
    return (
        <div id="countdown-timer" className="lighGreenBG">
            <div>
                <h5 style={{textAlign: 'center', marginBottom: '15px'}}> Countdown Timer 24 format <Icon.Alarm /> </h5>
                {
                    !isStart && <CountdownTimerInput handleInput={handleInput} handleStart={handleStart} isStartBtn={isStartBtn} />
                }

                {
                    isStart && <CountdownTimerShow
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                        isPaused={isPaused}
                        handlePause={handlePause}
                        handleResume={handleResume}
                        handleReset={handleReset}
                    />
                }
            </div>
            <ToastContainer position="top-right" />
        </div>
    )
}

export default CountdownTimer;