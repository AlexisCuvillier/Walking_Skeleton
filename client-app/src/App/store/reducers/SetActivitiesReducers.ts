

import { Activity } from "../../models/activity"
import {ListActivitiesDispatch, GET_ACTIVITIES, ACTIVITY_LOADING, ACTIVITY_LOADING_FAIL } from "../action/GetActivitiesAction"


// Reducers : fonction retournent un news state

export const initialState = []

const setActivitiesReducers = (state = initialState, action : ListActivitiesDispatch) => {

    switch(action.type) {
        case ACTIVITY_LOADING_FAIL : 
        return {
            loading:false
        }
        case ACTIVITY_LOADING : 
        return {
            loading:true
        }
        case GET_ACTIVITIES:
            //modif
         return{
            loading:false,
            initialState: action.payload
         }
        default:
            return state

    }
       
}

export default setActivitiesReducers
