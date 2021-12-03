import axios from "axios";
import { Dispatch } from "redux";
import agent from "../../api/agent";
import {ActivitiesList, GET_ACTIVITIES} from "./GetActivitiesAction";

export const GetActivities = () => async (dispatch: Dispatch<ActivitiesList>) => {

       
       agent.Activities.list();
      
                dispatch ({
                    type: GET_ACTIVITIES
                
                 
                })
}

    
 
