import Player from "./Player.js"
import wave from "./assets/img/wave.png"
import mediPage from "./assets/img/meditation_page.png"
import medi1 from "./assets/img/medit_1.png"
import medi2 from "./assets/img/medit_2.png"
import medi3 from "./assets/img/medit_3.png"
import medi4 from "./assets/img/medit_4.png"
import medi5 from "./assets/img/medit_5.png"
import medi6 from "./assets/img/medit_6.png"
import medi7 from "./assets/img/medit_7.png"
import mediC from "./assets/img/medit_center.png"


export default function Meditation(){
    return (
        <div>
            <div className="wrapperPage" id="meditation">
                <div className="about_medit_wrapper">
                    <img className="wrapper_bg" src={wave} alt={''} />
                        <div className="about_medit">
                            <div className="about_medit__box">
                                <img src={mediPage} alt={''}  />
                            </div>
                            <div className="about_medit__box right">
                                <div className="right__text">
                                    <h3 className="right__text__title">Медитация — </h3>
                                    <p className="right__text__p">это не остановка мыслей,
                                        это не контроль ума, и это не устранение эмоций</p>
                                </div>

                                <div className="right__text">
                                    <h3 className="right__text__title">Медитация —</h3>
                                    <p className="right__text__p">это "пересесть на задний ряд кинотеатра, взять ведёрко
                                        попкорна" и
                                        оттуда за всем наблюдать, ни во что не вмешиваясь</p>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="medit_wrapper">
                    <div className="medit">
                        <div className="points_medit">

                            <div className="points_medit__item">
                                <div className="points_medit__item__point">
                                    <span className="points_medit__item__point__number">1</span>
                                    <img src={medi1} alt={''}  />
                            <span className="points_medit__item__point__text">Садимся поудобнее, с прямой спиной,
                                расслабляемся
                            </span>
                                </div>

                                <div className="points_medit__item__point">
                                    <span className="points_medit__item__point__number">2</span>
                                    <img src={medi2} alt={''} />
                            <span className="points_medit__item__point__text">Взгляд расслабленный. Не цепляемся за предметы
                            </span>
                                </div>

                                <div className="points_medit__item__point">
                                    <span className="points_medit__item__point__number">3</span>
                                    <img src={medi3} alt={''} />
                                        <span className="points_medit__item__point__text">Отпускаем мысли. Успокаиваем ум </span>
                                </div>
                            </div>


                            <div className="points_medit__item">
                                <div className="points_medit__item__centerimg">
                                    <img src={mediC} alt={''} />
                                </div>
                            </div>

                            <div className="points_medit__item">
                                <div className="points_medit__item__point">
                                    <span className="points_medit__item__point__number">7</span>
                                    <img src={medi7} alt={''} />
                            <span className="points_medit__item__point__text">По окончании музыки – не бегите. Возвращайтесь
                                плавно, не спеша </span>
                                </div>

                                <div className="points_medit__item__point">
                                    <span className="points_medit__item__point__number">6</span>
                                    <img src={medi6} alt={''} />
                            <span className="points_medit__item__point__text">Если мысли улетают, просто верните свое
                                внимание к дыханию </span>
                                </div>

                                <div className="points_medit__item__point">
                                    <span className="points_medit__item__point__number">5</span>
                                    <img src={medi5} alt={''} />
                            <span className="points_medit__item__point__text">Слушаем приятную музыку и наслаждаемся
                                моментом </span>
                                </div>
                            </div>
                        </div>


                        <div className="points_medit__item points_medit__item_bottom">
                            <div className="points_medit__item__point">
                                <span className="points_medit__item__point__number">4</span>
                                <img src={medi4} alt={''} />
                                    <span className="points_medit__item__point__text">Концентрируемся на дыхании. Вдох. Выдох </span>
                            </div>
                        </div>


                    </div>
                    <Player/>
                    {/*<div className="index_player">*/}
                    {/*    <div className="player">*/}
                    {/*        <div className="all-controls">*/}
                    {/*            <div className="volume-controls">*/}
                    {/*                <button className="play player-icon"><img src="../assets/icons/player-play.svg"*/}
                    {/*                                                          alt="play"*/}
                    {/*                                                          width="50px" height="50px" fill="green"/>*/}
                    {/*                </button>*/}
                    {/*                <button className="pause player-icon"><img src="../assets/icons/player-pause.svg"*/}
                    {/*                                                           alt="pause"*/}
                    {/*                                                           width="36px" height="36px"/></button>*/}
                    {/*                <input className="range">*/}
                    {/*                    <button className="mute player-icon"></button>*/}
                    {/*                </input>*/}
                    {/*            </div>*/}
                    {/*            <div className="player-controls">*/}
                    {/*                <button className="play-prev player-icon"><img*/}
                    {/*                    src="../assets/icons/player-rewind.svg"*/}
                    {/*                    alt="prev" width="60px" height="60px"/></button>*/}

                    {/*                <button className="play-next player-icon"><img*/}
                    {/*                    src="../assets/icons/player-forward.svg"*/}
                    {/*                    alt="next" width="60px" height="60px"/></button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <ul className="play-list"></ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    )
}
