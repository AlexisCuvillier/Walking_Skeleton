
import axios from "axios";
import { Dispatch } from "redux";

import { ActivityDispatch, ACTIVITY_FAIL, ACTIVITY_SUCCESS, ACTIVITY_LOADING } from "./ActivityActionType";


export const GetActivity = (id: string) => async (dispatch: Dispatch<ActivityDispatch>) => {
    try
    {
        dispatch({
            type: ACTIVITY_LOADING
        })

        
        const res = await axios.get(`http://localhost:5006/api/activities/`)

        dispatch ({
            type: ACTIVITY_SUCCESS,
            payload: res.data
        })
    }
    catch(e)
    {
        dispatch({
            type: ACTIVITY_FAIL
        })

    }
}