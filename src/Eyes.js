import wave from "./assets/img/wave-eyes.png"
import warmupT1 from "./assets/img/warm_up_eyes_tutorial_1.png"
import warmupT2 from "./assets/img/warm_up_eyes_tutorial_2.png"
import warmupT3 from "./assets/img/warm_up_eyes_tutorial_3.png"
import stereo1 from "./assets/img/stereo_picture_1.png"
import stereo2 from "./assets/img/stereo_picture_2.png"
import stereo3 from "./assets/img/stereo_picture_3.png"

export default function Eyes(){
    return(
    <div >
        <div style={{ display: 'flex', flexDirection: 'column' }} id="eyes">
            <img className="wrapper_eyes_bg" src={wave} alt={''} />
                <div className="warm_up_eyes warm_up_eyes__container">
                    <div className="warm_up_eyes__title">
                        Зарядка для глаз
                    </div>

                    <div className="warm_up_eyes__card">
                        <div className="warm_up_eyes__card_picture_block">
                            <img src={warmupT1} alt=""
                                 className="warm_up_eyes__card_picture" />
                        </div>
                        <div className="warm_up_eyes__card_text">
                            <div className="warm_up_eyes__card_title">
                                Пальминг
                            </div>
                            <div className="warm_up_eyes__card_gymnastic">
                                Прикройте глаза таким образом: середина ладони должна быть напротив середины глаза. Даже за
                                10-15
                                секунд
                                ваши глаза успеют немного отдохнуть
                            </div>
                        </div>
                    </div>

                    <div className="warm_up_eyes__card warm_up_eyes__card__reverse">
                        <div className="warm_up_eyes__card_picture_block warm_up_eyes__card_picture_block__reverse">
                            <img src={warmupT2} alt=""
                                 className="warm_up_eyes__card_picture" />
                        </div>
                        <div className="warm_up_eyes__card_text">
                            <div className="warm_up_eyes__card_title">
                                «Письмо носом»
                            </div>
                            <div className="warm_up_eyes__card_gymnastic">
                                Cидя или лежа, представьте, что пишете кончиком носа, как ручкой. Это поможет расслабиться
                                вашей
                                шеей и
                                восстановить кровообращение
                            </div>
                        </div>
                    </div>

                    <div className="warm_up_eyes__card">
                        <div className="warm_up_eyes__card_picture_block">
                            <img src={warmupT3} alt=""
                                 className="warm_up_eyes__card_picture" />
                        </div>
                        <div className="warm_up_eyes__card_text">
                            <div className="warm_up_eyes__card_title">
                                "Сквозь пальцы"
                            </div>
                            <div className="warm_up_eyes__card_gymnastic">
                                Делайте плавные повороты головой вправо-влево, смотрите сквозь пальцы. Попеременно
                                поворачивайте
                                голову
                                то с открытыми, то с закрытыми глазами
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="yoga_eyes yoga_eyes__container">
            <div className="yoga_eyes__title">
                Йога для глаз
            </div>
            <div className="yoga_eyes__video_block">

                <div className="yoga_eyes__video">
                    <iframe className="eyes-yt-videos" src="https://www.youtube.com/embed/MDSB8CNNkO8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="yoga_eyes__video">
                    <iframe className="eyes-yt-videos" src="https://www.youtube.com/embed/srvZCiLS0Gk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="yoga_eyes__video">
                    <iframe className="eyes-yt-videos" src="https://www.youtube.com/embed/4o_fARldQm8"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="yoga_eyes__video">
                    <iframe className="eyes-yt-videos" src="https://www.youtube.com/embed/PDu07KgkBAs"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
        </div>

        <div className="stereo_pictures_eyes">

            <div className="stereo_pictures_eyes__slider_block">
                <div className="stereo_pictures_eyes__button">
                    <img src="../assets/img/stereo_left_arrow.png" alt="" id="prev"/>
                </div>
                <div className="stereo_pictures_eyes__picture">

                    <div className="slider">
                        <div className="slide"><img src={stereo1} alt=""/></div>
                        <div className="slide"><img src={stereo2} alt=""/></div>
                        <div className="slide"><img src={stereo3} alt=""/></div>
                    </div>
                </div>

                <div className="stereo_pictures_eyes__button">
                    <img src="../assets/img/stereo_right_arrow.png" alt="" id="next"/>
                </div>
                <div id="modalSlider">
                    <div className="modalSlider_content">
                        <span className="modalSlider_close">&times;</span>
                        <div className="modalSlider_content_img"></div>
                    </div>
                </div>
            </div>

            <div className="stereo_pictures_eyes__description_top">
                <strong>Стереокартинки для глаз</strong> — это плоские изображения, в которых зашифрована трехмерная
                картинка на фоне
                одинаковых узоров. На первый взгляд они похожи на пестрый бессюжетный хаос. Но если правильно сфокусировать
                взгляд на изображении, можно увидеть зашифрованную картинку.
            </div>

            <div className="stereo_pictures_eyes__description_lists">
                <div className="stereo_pictures_eyes__description_list">
                    <div className="stereo_pictures_eyes__description_list_title">
                        <strong>Они помогут:</strong>
                    </div>
                    <ul className="stereo_pictures_eyes__description_list_text">
                        <li><span>Снять усталость с глаз, особенно после долгой работы за компьютером.</span></li>
                        <li><span>Улучшить способность четко видеть предметы на разных расстояниях.</span></li>
                        <li><span>Поддерживать бинокулярное зрение — восприятие глубины, пространства и формы
                            объектов.</span></li>
                    </ul>
                </div>

                <div className="stereo_pictures_eyes__description_list">
                    <div className="stereo_pictures_eyes__description_list_title">
                        <strong>Инструкция по применению:</strong>
                    </div>
                    <ul className="stereo_pictures_eyes__description_list_text">
                        <li><span>Отойдите от изображения на расстояние вытянутой руки.</span></li>
                        <li><span>Сфокусируйте взгляд на центре картинки.</span></li>
                        <li><span>Старайтесь не жмуриться и не моргать и увидите объемные объекты.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
