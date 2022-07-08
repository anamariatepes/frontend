import { 
    ALL_ANIMALS_REQUEST, 
    ALL_ANIMALS_SUCCESS, 
    ALL_ANIMALS_FAIL,
     ANIMAL_DETAILS_REQUEST,
    ANIMAL_DETAILS_SUCCESS,
    ANIMAL_DETAILS_FAIL,
    CLEAR_ERRORS} from '../constants/animalConstants'

export const animalsReducer = (state ={ animals: []}, action) => {
    switch(action.type){
        case ALL_ANIMALS_REQUEST:
            return {
                loading: true,
                animals:  []
            }
        case ALL_ANIMALS_SUCCESS:
            return {
                loading: false,
                animals:  action.payload.animals,
                animalsCount: action.payload.animalsCount,
                resPerPage: action.payload.resPerPage
            }
        case ALL_ANIMALS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state;
    }
}

export const animalDetailsReducer = (state = {animal : {} }, action ) => {
    switch(action.type){
        case ANIMAL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
            case ANIMAL_DETAILS_SUCCESS:
                return {
                    loading: false,
                    animal: action.payload
                }
            case ANIMAL_DETAILS_FAIL:
                return{
                    ...state,
                    error: action.payload
                }
                case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                    }
        default:
            return state
    }

}