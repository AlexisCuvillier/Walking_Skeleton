import { ActivityDispatch, ActivityType, ACTIVITY_FAIL, ACTIVITY_LOADING, ACTIVITY_SUCCESS } from "../actions/ActivityActionType"

interface DefaultStateI {
    loading: boolean,
    activities? : ActivityType
}

const defaultState : DefaultStateI = {
    loading: false

}

export const ActivityReducer = (state :DefaultStateI = defaultState , action : ActivityDispatch) : DefaultStateI => {
    switch(action.type){
        case ACTIVITY_FAIL :
            return {
                loading:false
            }
        case ACTIVITY_LOADING:
            return {
                loading:true,
            }
        case ACTIVITY_SUCCESS:
            return {
                loading:false,
                activities: action.payload
            }
        default:
            return state;
    }
}

export default ActivityReducer