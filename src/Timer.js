import React, { useRef, useEffect, useCallback, useState } from "react";
import playButton from "./assets/icons/play.svg"
import stopButton from "./assets/icons/stop.svg"
import pauseButton from "./assets/icons/pause.svg"
import {settings} from "./timerSettings.js"
import { changeTimerName, changeTimerRemains, toggleMeditationCheckbox, reduceTimerRemains, setTimerId, resetTimerId, changeTimerDuration, resetTimerDuration, } from './timerActions';
import {useDispatch, useSelector} from 'react-redux'
import { firestore, auth } from './firebase'
import { addDoc, collection, doc } from 'firebase/firestore';

export default Timer




function Timer(){

    //константы
    const dispatch = useDispatch();
    const langContent = settings.langcontent.ru
    const timerName = useSelector((state) => state.name);
    const timerRemains = useSelector((state) => state.remains);
    const timerIdNumber = useSelector((state) => state.timerID);
    const timerDuration = useSelector((state) => state.timerDuration)
    const isMeditationChecked = useSelector((state) => state.isMeditationChecked);
    const { v4: uuidv4 } = require('uuid');
    const timerRemainsRef = useRef(timerRemains);
    const timerIDRef = useRef(timerIdNumber)
    const timerDurationRef = useRef(timerDuration)
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB")
    const handleCheckboxToggle = () => {
        dispatch(toggleMeditationCheckbox());
    };
    const [userUid, setUserUid] = useState(null);
    const timerStats = {
        ID: timerIDRef.current,
        Mode: timerName,
        Duration: timerDurationRef.current,
        Date: formattedDate
            }

//изменение таймера редукс
    const changeTimerValue = useCallback(() => {
        dispatch(reduceTimerRemains());

        timerRemainsRef.current = timerRemainsRef.current - 1
        const newPercentLeft = (timerRemainsRef.current / timerRemains) * 100;
        setPercentLeft(newPercentLeft);
    }, [dispatch, timerRemainsRef, timerRemains]);
//--

//функции таймера
        let intervalId = useRef(null)

    const addTimerStatsToFirestore = async (userUid, timerStatsData) => {
        const userRef = doc(firestore, "users", userUid);
        const timerStatsCollectionRef = collection(userRef, "timerStatistics");

        try {
            const docRef = await addDoc(timerStatsCollectionRef, timerStatsData);
            // console.log("Timer stats document written with ID: ", docRef.id);
        } catch (error) {
            // console.error("Error adding timer stats document: ", error);
        }
    };


        const startTimer = ()=>{
            clearInterval(intervalId.current)
            if (timerIdNumber === undefined){
                dispatch(setTimerId(uuidv4()))
            }


            const newPercentLeft = (timerRemainsRef.current / timerRemains) * 100;
            setPercentLeft(newPercentLeft);

            intervalId.current = setInterval(() => {
                changeTimerValue()
                dispatch(changeTimerDuration())


                const newPercentLeft = (timerRemainsRef.current / timerRemains) * 100;
                setPercentLeft(newPercentLeft);


                if (timerRemainsRef.current <= 0) {
                    stopTimer();
                }
            }, 1000)
        }
        const stopTimer = async ()=>{
            clearInterval(intervalId.current)
            dispatch(resetTimerId())
            intervalId.current = null

            dispatch(changeTimerRemains(settings[timerName]))
            // console.log(timerStats)
            dispatch(resetTimerDuration())
            if (userUid) {
                const timerStatsData = {
                    ID: timerIDRef.current,
                    Mode: timerName,
                    Duration: timerDurationRef.current,
                    Date: formattedDate
                };

                try {
                    await addTimerStatsToFirestore(userUid, timerStatsData);
                } catch (error) {
                    console.error('Error adding timerStats to Firestore:', error);
                }
            } else {
                // console.log('No user is currently logged in.');
            }


        }
         const pauseTimer = ()=>{
            clearInterval(intervalId.current)


    }
//--функции таймера конец --
// Смена заголовка таймера
    const timerContentH = useCallback(() => {
        let timerHeader = undefined;
        if (timerName === 'work') {
            timerHeader = langContent['timer-w-head'];
        }
        if (timerName === 'rest') {
            timerHeader = langContent['timer-r-head'];
        }
        if (timerName === 'meditation') {
            timerHeader = langContent['timer-m-head'];
        }
        return timerHeader;
    }, [timerName, langContent]);

//Эффекты начало
    useEffect(() => {
        const timerHeaderName = timerContentH()
        const timerHElement = document.getElementById("timerH");
        if (timerHElement) {
            timerHElement.textContent = timerHeaderName;
        }
    }, [timerContentH]);

    useEffect(() => {
        timerRemainsRef.current = timerRemains;
    }, [timerRemains]);

    useEffect(() => {
        timerIDRef.current = timerIdNumber;
    }, [timerIdNumber]);

    useEffect(() => {
        timerDurationRef.current = timerDuration;
    }, [timerDuration]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid);
            } else {
                setUserUid(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);



    //--Эффекты конец --


    const meditationCheckbox = useRef(null)
//форматирование времени
function formatTime(arg) {
        let minutes = Math.floor(arg / 60), seconds = Math.floor(arg % 60);
        return `${minutes.toString().length < 2 ? '0' + minutes : minutes}:${seconds.toString().length < 2 ? '0' + seconds : seconds}`
    }

//--

//--
    //Ручное изменение таймера
    const [percentLeft, setPercentLeft] = useState(0);


    const handleTimerChange = (event) => {
        let minutes = parseInt(event.target.value, 10);
        if (isNaN(minutes)) {
            minutes = 30;
        } else if (minutes < 1) {
            minutes = 1;
        } else if (minutes > 120) {
            minutes = 120;
        }


        dispatch(changeTimerRemains(minutes));



        // const newPercentLeft = (timerRemainsRef.current / timerRemains) * 100;



    };
    //

    return(
        <div className="timer-wrapper">
            <section className="main-timer">
                <div className="timer-warning">
                    <div className="timer-warning-text">Статистика не будет сохраняться без входа!</div>
                    <div className="timer-warning-buttons">
                        <button className="timer-warning-continue" type="button" id="timerContinue">Продолжить</button>
                        <button className="timer-warning-login" type="button"
                                // onClick="window.location.href='./login.html'"
                        >Войти
                        </button>
                    </div>
                </div>
                <h1 id="timerH">{timerContentH()}</h1>
                <div className="timer-bg">
                    <span className="timer">{formatTime(timerRemains)}</span>
                </div>
                <div className="controls">
                    <button id="launch" onClick={startTimer}><img src={playButton} alt="play" width="22px" height="22px"/>
                    </button>
                    <button id="pause" onClick={pauseTimer}><img src={pauseButton} alt="stop" width="22px" height="22px"/>
                    </button>
                    <button id="stop" onClick={stopTimer}><img src={stopButton} alt="clear" width="22px" height="22px"/>
                    </button>
                </div>
                </section>
            <div className="timerline">
                <div className="timerline-fill" style={{ width: `${percentLeft}%` }} />
            </div>
            <label htmlFor="radioMeditation">
                <div className="timer-meditation" >
                    <input type="checkbox" id="radioMeditation" ref={meditationCheckbox} checked={isMeditationChecked} defaultValue={"meditation"} onChange={()=>{
                        handleCheckboxToggle()
                        if(timerName === 'work'){
                            dispatch(changeTimerName('meditation'))
                            dispatch(changeTimerRemains(settings.meditation))

                        }
                        if (timerName === 'rest'){
                            dispatch(changeTimerName('rest'))
                            dispatch(changeTimerRemains(settings.rest))

                        }
                        if (timerName === 'meditation'){
                            dispatch(changeTimerName('work'))
                            dispatch(changeTimerRemains(settings.work))

                        }}} />
                        <label className="meditation__radio" htmlFor="radioMeditation">Медитация</label>
                </div>
            </label>
            <label className="timer-settings" id="hide-toggle" htmlFor="hidden">Настройки времени</label>
            <input id="hidden" type="checkbox"/>
                <section className="customize">
                    <div className="buttonset">
                        <h3 className="wr-heading" id="cust-w-head">Введите время в минутах</h3>
                        <input type="number" onInput={handleTimerChange} id="workTime" min="1" max="120" defaultValue="30"/>
                    </div>
                </section>
        </div>
    )
}



