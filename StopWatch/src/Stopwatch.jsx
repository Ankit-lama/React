import React, {useState, useEffect, useRef} from 'react';
import './index.css'
function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning)
        {
            intervalIdRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);
        }

        return () => clearInterval(intervalIdRef.current);

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);  
    }
    function reset() {
         setIsRunning(false);
        setElapsedTime(0);
    }
    function formateTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let millisecond = Math.floor((elapsedTime) % 1000 /10);

        hours =String(hours).padStart(2,'0');
        minutes =String(minutes).padStart(2,'0');
        seconds =String(seconds).padStart(2,'0');
        millisecond =String(millisecond).padStart(2,'0');
    return `${minutes}:${seconds}:${millisecond}`;
    }

    return(
        <div className='stopwatch'>
            <div className='display'>
                {formateTime()}
            </div>
            <div className='controls'>
                <button onClick={start} className= 'start'>Start</button>
                <button onClick={stop} className= 'stop'>Stop</button>
                <button onClick={reset} className= 'reset'>Reset</button>
            </div>
        </div>
    )



}

export default Stopwatch;