import React from "react";
import playButton from "./assets/icons/play.svg";
import stopButton from "./assets/icons/stop.svg";
import pauseButton from "./assets/icons/pause.svg";
import { formatTime } from "./timer.js"; // Assuming you have a function for formatting time

const TimerDisplay = ({ timerRemains, startTimer, pauseTimer, stopTimer }) => {
    return (
        <div className="timer-bg">
            <span className="timer">{formatTime(timerRemains)}</span>
            <div className="controls">
                <button id="launch" onClick={startTimer}>
                    <img src={playButton} alt="play" width="22px" height="22px" />
                </button>
                <button id="pause" onClick={pauseTimer}>
                    <img src={pauseButton} alt="stop" width="22px" height="22px" />
                </button>
                <button id="stop" onClick={stopTimer}>
                    <img src={stopButton} alt="clear" width="22px" height="22px" />
                </button>
            </div>
        </div>
    );
};

export default TimerDisplay;
