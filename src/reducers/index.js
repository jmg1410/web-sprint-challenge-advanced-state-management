
//action types

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const initialState = {
    smurfs: [], //here i am storing smurfs
    isLoading: false,
    error: ''
}

const reducer = ( state = initialState, action)=>{
    switch (action.type){
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            } 
            case FETCH_SMURFS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    smurfs: action.payload, //Coming from API
                    error: ''
                }
                case FETCH_SMURFS_FAIL:
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload //coming from API
                    }
                 case ADD_SMURF:
                    return {
                        ...state,
                        smurfs: [...state.smurfs, action.payload]
                    }
                 case SET_ERROR:
                    return {
                        ...state,
                        error: action.payload
                    }       //add remaining cases later
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.