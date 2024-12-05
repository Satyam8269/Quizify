export const quizReducer = (state, { type, payload }) => {
    switch(type) {
        case "INITIAL_STATE": {
            return {
                ...state,
                index: payload.currentIndex,
                score: payload.currentScore,
                selectedOption: payload.currentOption === "null" ? null : payload.currentOption,
                quizCategory: payload.currentCategory,
                quiz: payload.currentQuiz
            }
        }
        case "SET_QUIZ": {
            return {
                ...state,
                quiz: payload
            }
        }
        case "CATEGORY": {
            return {
                ...state,
                quizCategory: payload
            }
        }
        case "NEXT_QUESTION": {
            return {
                ...state,
                index: state.index + 1,
                selectedOption: null                     //Every time I have to select the option so everytime I have to set the selectedOption as null bacause we have to select it.
            }
        }
        case "SUBMIT": {
            return {
                ...state,
                selectedOption: null                      // If I start a new quiz then no option should be selected.
            }
        }
        case "QUIT" : {
            return {
                ...state,
                index: 0,
                score: 0,
                selectedOption: null
            }
        }
        case "SET_SELECTED_OPTION": {
            return {
                ...state,
                selectedOption: payload.optionId,
                score: payload.isCorrect ? state.score + 5 : state.score
            }
        }
        default: {
            return state;
        }
    }
}