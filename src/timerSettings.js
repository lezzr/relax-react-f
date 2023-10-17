
export const settings = {
    work: 30,       // in minutes 30
    rest: 10,       // in minutes 10
    meditation: 5,
    maxTime: 120,   // in minutes 120
    mainColors: ['#E3F2FD', '#3896d1'],
    lang: 'ru',
    langcontent: {
        ru: {
            'timer-w-head': 'Работаем!',
            'timer-r-head': 'Перерыв!',
            'timer-m-head': 'Медитируем',
            'customize': 'Настройка таймера',
            'cust-w-head': 'Длина рабочей сессии',
            'cust-r-head': 'Длина перерыва',
        }
    }
};

export let session =  {
    name: 'work',
    remains: 30 * 60,                     // in seconds
    fullTime: settings.work * 60,   // in seconds
    timer: 0,
    state: undefined,


    stopTimer() {
        clearInterval(this.timer);
        this.timer = 0;
    },

    resetTimer() {
        this.remains = this.fullTime;
    }
}
