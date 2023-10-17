export const changeTimerName = (newName) => {
    return {
        type: 'CHANGE_TIMER_NAME',
        payload: newName,
    };
};
export const changeTimerRemains = (newRemains) => {
    return {
        type: 'CHANGE_TIMER_REMAINS',
        payload: newRemains,
    };
};

export const toggleMeditationCheckbox = () => {
    return {
        type: 'TOGGLE_MEDITATION_CHECKBOX',
    }
}

export const reduceTimerRemains = () => {
    return {
        type: 'REDUCE_TIMER_REMAINS',
    }
}

export const setTimerId = (newId) => {
    return {
        type: 'SET_TIMER_ID',
        payload: newId,
    }
}

export const resetTimerId = () => {
    return {
        type: 'RESET_TIMER_ID',
    }
}



export const changeTimerDuration = () => {
    return {
        type: 'CHANGE_TIMER_DURATION',
    }
}

export const resetTimerDuration = () => {
    return {
        type: 'RESET_TIMER_DURATION',
    }
}
