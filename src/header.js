import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "./assets/img/burger_lotos.png";
import LoginIcon from "@mui/icons-material/Login";
import LogOutIcon from "@mui/icons-material/Logout";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';
import { auth, firestore } from './firebase'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PieChart, Pie, Cell } from 'recharts';





export default Header




function Header({ userDisplayName }){

//modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContentType, setModalContentType] = useState(null);
    const [timerStatistics, setTimerStatistics] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const openModal = (contentType) => {
        setModalContentType(contentType);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setModalContentType('');
    };

    useEffect(() => {
        if (modalContentType === 'user') {
            // Fetch and set timer statistics
            const fetchTimerStatistics = async () => {
                const userUid = auth.currentUser.uid;

                const timerStatsCollectionRef = collection(firestore, 'users', userUid, 'timerStatistics');
                const timerStatsSnapshot = await getDocs(timerStatsCollectionRef);
                const timerStatsData = timerStatsSnapshot.docs.map(doc => doc.data());

                setTimerStatistics(timerStatsData);
            };

            fetchTimerStatistics();
        }
    }, [modalContentType]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

//renders
    const renderUserMenu = () => {
        if (userDisplayName){
            return(
                <div className='header__right'>
                <LogOutIcon className='logout' onClick={handleLogout} sx={{width:55, height:64, background: "transparent"}}>
                </LogOutIcon>
                    <div className='userIcon' onClick={() => openModal('user')}>{userDisplayName}</div>
                </div>
            )
        }
        return (
            <LoginIcon className='logout' onClick={() => openModal('login')} sx={{width:55, height:64, background: "transparent"}}>
            </LoginIcon>
        )

    }

    const renderModalContent = () => {
        const defaultStyle = {
            content: {
                display: 'flex',
                margin: '160px',
                justifyContent: 'center',
                padding: '0',
                boxSizing: 'border-box',
                background: 'transparent',
                height: 'auto',
                width: 'auto',
                border: 0,
            },
        };
        const customModalStyles = {
            login: {
                content: {
                    ...defaultStyle.content,
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                },
            },
            registration: {
                content: {
                    ...defaultStyle.content,
                    // Add styles for registration case
                },
            },
            user: {
                content: {
                    ...defaultStyle.content,
                    // Add styles for user case
                },
            },
        };
        const modalStyles = customModalStyles[modalContentType] || defaultStyle;

        switch (modalContentType) {
            case 'login':
                return (
                    <div style={modalStyles.content}>
                          <div className="login_form" id="login_form" onSubmit={handleLogin}>
                            <form id="loginform">
                                <h1 className="title-form">Вход</h1>
                                {/*<div className="message"></div>*/}
                                <div>
                                    <input id="email" className="input" required type="text" placeholder="E-Mail"/>
                                </div>
                                <div>
                                    <input id="password" className="input" required type="password" placeholder="Password"/>
                                </div>
                                <div className="button">
                                    <button type="submit" className="loginButton">Войти</button>
                                </div>
                            </form>
                            <div className="change_to_register_block">
                                <span>Еще не зарегистрированы?</span>
                                <span onClick={() => openModal('registration')} className="registerLink">Регистрация</span>
                                {/*<a href="" onClick={() => openModal('registration')} className="registerLink"></a>*/}
                            </div>
                        </div>
                        {/* Other login-related content */}
                    </div>
                );
            case 'registration':
                return (
                    <div className="registartion_form" id="registration_form" style={modalStyles.content}>

                        <form id="regform" onSubmit={handleRegistration}>
                            <h1 className="title-registration">Зарегистрируйтесь</h1>

                            <div>
                                <input id="name" name="name" required type="text" className="input"
                                       placeholder="Username"
                                       title="Введите не менее 3 символов"/>
                            </div>
                            <div>
                                <input id="login" name="email" required type="text" className="input"
                                       placeholder="E-Mail"
                                       title="Введите корректный email"/>
                            </div>
                            <div>
                                <input id="password" name="password" required type="password" className="input"
                                       placeholder="Password"
                                       title="Пароль должен содержать не менее 4 символов разного регистра и цифр"/>
                            </div>
                            <div>
                                <input id="password_repeat" required type="password" className="input"
                                       placeholder="Repeat password"
                                       title="Пароли должны совпадать"/>
                            </div>
                            <span>Уже зарегистрированы?</span>
                            <span onClick={() => openModal('login')} className="registerLink">Авторизуйтесь</span>
                            {/*<a href="./login.html" onClick={() => openModal('login')}>Авторизуйтесь</a>*/}
                            <button type="submit" className="regButton" >Зарегистрироваться</button>
                        </form>
                    </div>
                );
            case 'user':
                const filteredStatistics = timerStatistics.filter((stat) => {
                    const formattedSelectedDate = selectedDate.toLocaleDateString("en-GB");
                    return stat.Date === formattedSelectedDate;
                });

                // Prepare data for the pie chart
                const modeData = {
                    work: 0,
                    rest: 0,
                    meditation: 0,
                }; // Example: { "Mode 1": 10, "Mode 2": 15, ... }
                filteredStatistics.forEach((stat) => {
                    const { Mode, Duration } = stat;
                    modeData[Mode] += Duration;
                });

                const pieChartData = Object.entries(modeData).map(([name, value]) => ({ name, value }));
                    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];
                const hasPieChartData = pieChartData.some(entry => entry.value > 0);

                return (
                    <div className='menu_content' style={modalStyles.content}>
                        <h2>Menu Content</h2>
                        {/* Render timer statistics */}
                        <div className='calendar'>
                            <Calendar onChange={handleDateChange} value={selectedDate}/>
                        </div>
                        {/* Render pie chart */}
                        {hasPieChartData? (<div className='pie-chart'>
                            <PieChart width={600} height={300}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={pieChartData}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label={({name, value}) => `${name}: ${value} S`}
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                    ))}
                                </Pie>
                            </PieChart>
                            </div>):(
                            <div className='no-data-message' style={{ textAlign: 'center' }} >
                                No data available for the pie chart.
                            </div>
                        )}
                    </div>
                );
            // case 'burger':
            //     return (<div className="burger__menu" style={modalStyles.content}>
            //         <nav className="burger__nav">
            //             <p className="burger__nav__item">
            //                 <a href="./meditation.html" target="_blank">
            //                     <span
            //                     className="burger__nav__item__title">Relax</span>
            //                     <span className="burger__nav__item__text"> Медитация </span> </a>
            //             </p>
            //             <p className="burger__nav__item">
            //                 <a href="./eyes.html" target="_blank"><span
            //                     className="burger__nav__item__title">Relax</span>
            //                     <span className="burger__nav__item__text"> Глаза </span> </a>
            //             </p>
            //             <p className="burger__nav__item">
            //                 <a href="./warm_up.html" target="_blank"><span
            //                     className="burger__nav__item__title">Relax</span>
            //                     <span className="burger__nav__item__text"> Разминка </span> </a>
            //             </p>
            //             <img src={logo} className="burger__nav__img" alt={''}/>
            //         </nav>
            //     </div>);
            default:
                return null;
        }
    };
//handlers
    const handleRegistration = async (event) => {
        event.preventDefault();
        // console.log('Registration form submitted');

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            const user = auth.currentUser;
            if (user) {
                await updateProfile(user, { displayName: name });
            }

            closeModal(); // Close the registration modal
        } catch (error) {
            console.error('Error registering user:', error.message);
            // Handle registration error
        }
    };


    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Access the user's ID token
            const idToken = await user.getIdToken();

            // Now you can use this ID token to authenticate requests to your backend or server
            console.log('User ID Token:', idToken);

            closeModal(); // Close the login modal or navigate to the authenticated area
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle login error
        }
    };
    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Optionally, you can also clear any user-related data or state here
        } catch (error) {
            console.error('Error logging out:', error.message);
            // Handle error if logout fails
        }
    };

//html

    const [isBurgerChecked, setIsBurgerChecked] = useState(false)
    const scrollToComponent = (componentId) => {
        const element = document.getElementById(componentId);
        if (element) {
            const offset = element.offsetTop - 130;  // Adjust the offset as needed
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    };

    return(
        <div className="header">
            <Box sx={{flexGrow: 1}} maxHeight='130px'>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <header>
                            <div className="header__left" >
                                <img src={logo} alt="logo" onClick={() => scrollToComponent("mainPage")}/>
                                <span className="header__left__title">Relax</span>
                            </div>
                        </header>
                    </Grid>
                    <Grid item xs={4} container
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="center">
                        <div className="header__right">
                            {renderUserMenu()}
                            <MenuIcon   className={`logout ${isBurgerChecked ? 'checked' : ''}`}
                                        onClick={() => setIsBurgerChecked(prevState => !prevState)} sx={{width:55, height:64, background: "transparent"}}>

                            </MenuIcon>
                            <div className={`burger__menu ${isBurgerChecked ? 'checked' : ''}`}  >
                                <nav className="burger__nav">
                                    <p className="burger__nav__item" onClick={() => scrollToComponent("meditation")}>

                                <span
                                    className="burger__nav__item__title">Relax</span>
                                            <span className="burger__nav__item__text" > Медитация </span>
                                    </p>
                                    <p className="burger__nav__item" onClick={() => scrollToComponent("eyes")}>
                                        <span
                                            className="burger__nav__item__title">Relax</span>
                                            <span className="burger__nav__item__text"> Глаза </span>
                                    </p>
                                    <p className="burger__nav__item" onClick={() => scrollToComponent("warmup")}>
                                        <span
                                            className="burger__nav__item__title">Relax</span>
                                            <span className="burger__nav__item__text"> Разминка </span>
                                    </p>
                                    <img src={logo} className="burger__nav__img" alt={''} onClick={() => scrollToComponent("mainPage")}/>
                                </nav>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
                content:{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '160px',
                    justifyContent: 'center',
                    padding: '0',
                    boxSizing: 'border-box',
                    background:  "transparent",
                    height: 'auto',
                    width: 'auto',
                    border: 0
                }
            }}>
                {renderModalContent()}
            </Modal>

        </div>
    )
}
