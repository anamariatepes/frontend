import axios from 'axios';
import { 
    ALL_ANIMALS_REQUEST, 
    ALL_ANIMALS_SUCCESS, 
    ALL_ANIMALS_FAIL,
    ANIMAL_DETAILS_REQUEST,
    ANIMAL_DETAILS_SUCCESS,
    ANIMAL_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/animalConstants'

export const getAnimals = (keyword = '',currentPage=1) => async (dispatch) => {
    try{
        dispatch({ type: ALL_ANIMALS_REQUEST})

        const { data } = await axios.get(`/api/v1/animals?keyword=${keyword}&page=${currentPage}`)

        dispatch({
            type: ALL_ANIMALS_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: ALL_ANIMALS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getAnimalsDetails = (id) => async (dispatch) => {
    try{
        dispatch({ type: ANIMAL_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/v1/animal/${id}`)

        dispatch({
            type: ANIMAL_DETAILS_SUCCESS,
            payload: data.animal
        })

    }catch(error){
        dispatch({
            type: ANIMAL_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
