import Timer from './Timer.js'

import mainBg from "./assets/img/wave.png"
import mainImg from "./assets/img/girl-meditation.svg"
import Player from "./Player.js"
import { useDispatch } from 'react-redux';
import {changeTimerName, changeTimerRemains, toggleMeditationCheckbox} from './timerActions';
import { useSelector } from 'react-redux'
import {settings} from "./timerSettings";
export default MainPage
function MainPage(){

    const dispatch = useDispatch();
    const timerName = useSelector((state) => state.name);
    // const timerRemains = useSelector((state) => state.remains);
    const isMeditationChecked = useSelector((state) => state.isMeditationChecked)

    const handleCheckboxToggle = () => {
        dispatch(toggleMeditationCheckbox())
    }
    // const handleTimerNameChange = () => {
    //     dispatch(changeTimerName('rest'));
    // };

    return(
        <div className="main" id="mainPage">
            <div id="active">{timerName}</div>
            <span className="radioButtons">
            <div className="timer-modes" id="timerWork"><label><input
                onClick={() => {
                dispatch(changeTimerName('work'))
                    dispatch(changeTimerRemains(settings.work))

                    if (isMeditationChecked){
                    handleCheckboxToggle()

                    }
                }}
                type="radio" name="session-group" id="radioWork"
                defaultValue={"work"}
                defaultChecked={true}/>Работа<br/></label ></div>
            <div className="timer-modes" id="timerRest"><label><input
                onClick={() => {
                    dispatch(changeTimerName('rest'))
                    dispatch(changeTimerRemains(settings.rest))

                    if (isMeditationChecked){
                        handleCheckboxToggle()

                    }
                }}
                type="radio" name="session-group" id="radioRest"
                value={"rest"}/>Отдых<br/></label>
            </div>
        </span>
            <img className="wrapper_bg" src={mainBg} alt="mainBg"/>
            <div className="main-bg">
                <img src={mainImg} alt="girl" width="450" height="400"/>
            </div>
            <Timer/>
            <Player/>
        </div>

    )
}
