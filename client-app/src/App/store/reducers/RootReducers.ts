import { combineReducers } from "redux";
//import { GetActivities } from "../action/GetActivitiesAction";
import setActivitiesReducers from "./SetActivitiesReducers";


//import GetActivityReducer from "./GetActivityReducers";

const RootReducer = combineReducers ({
    
     setActivitiesReducers,
     
    /// GetActivities
  //  GetActivityReducer,
   

  
});

export default RootReducer;