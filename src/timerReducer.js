const initialState = {
    name: 'work',
    remains: 30 * 60,
    isMeditationChecked: false,
    timerID: undefined,
    timerDuration: 0
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TIMER_NAME':
            return {
                ...state,
                name: action.payload,
            };
        case 'CHANGE_TIMER_REMAINS':
            return {
                ...state,
                remains: action.payload * 60,
            };
        case 'REDUCE_TIMER_REMAINS':
            return {
                ...state,
                remains: state.remains - 1,
            };
        case 'TOGGLE_MEDITATION_CHECKBOX':
            return {
                ...state,
                isMeditationChecked: !state.isMeditationChecked,
            };
        case 'SET_TIMER_ID':
            return {
                ...state,
                timerID: action.payload,
            };
        case 'RESET_TIMER_ID':
            return {
                ...state,
                timerID: undefined,
            };

        case 'CHANGE_TIMER_DURATION':
            return {
                ...state,
                timerDuration: ++state.timerDuration
            };

        case 'RESET_TIMER_DURATION':
            return {
                ...state,
                timerDuration: 0
            };
        default:
            return state;
    }
};

export default timerReducer;
