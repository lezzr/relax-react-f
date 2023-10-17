import wave from "./assets/img/wave.png"
import exercises1 from "./assets/img/exercises1.png"
import exercises2 from "./assets/img/exercises2.png"
import exercises3 from "./assets/img/exercises3.png"
import exercises4 from "./assets/img/exercises4.png"
import exercises5 from "./assets/img/exercises5.png"
import exercises6 from "./assets/img/exercises6.png"
import exercises7 from "./assets/img/exercises7.png"
import vector1 from "./assets/img/Vector 1.png"
import vector2 from "./assets/img/Vector 2.png"
import vector3 from "./assets/img/Vector 3.png"
import vector4 from "./assets/img/Vector 4.png"
import vector5 from "./assets/img/Vector 5.png"
import vector6 from "./assets/img/Vector 6.png"



export default function Warmup(){
    return(
        <div>
            <div className="wrapper_Page" id="warmup" style={{ display: 'flex', flexDirection: 'column' }}>
                <img className="wrapper_eyes_bg" src={wave} alt={''}/>
                    <h1 className="text_head">Разминка</h1>
                    <div className="block_cards">
                        <div className="block_cards__exercises position1">
                            <div className="centrovshik"><img src={exercises1} alt={''} />
                                <span className="block_cards__exercises__num">1</span>
                            </div>
                            <p className="block_cards__exercises__text">Встаньте у рабочего
                                стола. Отодвиньте стул и сделайте наклоны в обе стороны
                                минимум по 5 раз.
                            </p>
                        </div>

                        <div className="block_cards__exercises position2">
                            <div className="centrovshik"><img src={exercises2} alt={''} />
                                <span className="block_cards__exercises__num">2</span>
                            </div>
                            <p className="block_cards__exercises__text">Поочередно поднимайте
                                колени, прижимая к животу в верхней точке. Придерживайте
                                колено руками.
                            </p>
                        </div>

                        <div className="block_cards__exercises position3">
                            <div className="centrovshik"><img src={exercises3} alt={''} />
                                <span className="block_cards__exercises__num">3</span>
                            </div>
                            <p className="block_cards__exercises__text">Облокотитесь на стол.
                                Придерживая ногу за голеностоп, поднимайте ноги поочередно.
                            </p>
                        </div>

                        <div className="block_cards__exercises position4">
                            <div className="centrovshik"><img src={exercises4} alt={''} />
                                <span className="block_cards__exercises__pic">4</span>
                            </div>
                            <p className="block_cards__exercises__text">Сидя на стуле, поднимайте
                                поочередно ноги на 90 градусов. Выполните упражнение от 5 раз
                                на каждую ногу.
                            </p>
                        </div>

                        <div className="block_cards__exercises position5">
                            <div className="centrovshik"><img src={exercises5} alt={''} />
                                <span className="block_cards__exercises__pic">5</span>
                            </div>
                            <p className="block_cards__exercises__text">Встаньте рядом со стулом.
                                Держитесь за поручень. Наклонитесь в правую сторону. Повторите
                                от 5 раз. Выполните тоже самое на другую сторону.
                            </p>
                        </div>

                        <div className="block_cards__exercises position6">
                            <div className="centrovshik"><img src={exercises6} alt={''}/>
                                <span className="block_cards__exercises__pic">6</span>
                            </div>
                            <p className="block_cards__exercises__text">Подойдите к спинке стула.
                                Держась за спинку, присядьте 10 раз.
                            </p>
                        </div>

                        <div className="block_cards__exercises position7">
                            <div className="centrovshik"><img src={exercises7} alt={''} />
                                <span className="block_cards__exercises__pic">7</span>
                            </div>
                            <p className="block_cards__exercises__text">Заведите руки за спину.
                                Обопритесь на стул. Отожмитесь на руках от 5 раз.
                            </p>
                        </div>

                        <div className="position8"><img src={vector1} alt={''} /></div>
                        <div className="position9"><img src={vector2} alt={''} /></div>
                        <div className="position10"><img src={vector3} alt={''} /></div>
                        <div className="position11"><img src={vector4} alt={''} /></div>
                        <div className="position12"><img src={vector5} alt={''} /></div>
                        <div className="position13"><img src={vector6} alt={''} /></div>
                    </div>
                    <div className="videorolicks">
                        <h2 className="head_text">Видеоупражнения</h2>
                        <div className="videorolicks__position">
                            <iframe title={'1'} className="videorolicks__position__size" width="960" height="540"
                                    src="https://www.youtube.com/embed/Vq4PNH8ozkA" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            <iframe title={'2'} className="videorolicks__position__size" width="960" height="540"
                                    src="https://www.youtube.com/embed/NR1cUwm0aas" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
            </div>
        </div>
    )
}
