
export const ACTIVITY_LOADING = "ACTIVITY_LOADING";
export const ACTIVITY_FAIL = "ACTIVITY_FAIL";
export const ACTIVITY_SUCCESS = "ACTIVITY_SUCCESS";

export type ActivityType = {
    activities: ActivityActivities[]
}

export type ActivityActivities = {
    Activities: {
        id: string;
        title: string;
        date: string;
        description: string;
        category: string;
        city: string;
        venue: string;
    }
}

export interface ActivityLoading {
    type: typeof ACTIVITY_LOADING
}

export interface ActivityFail {
    type: typeof ACTIVITY_FAIL
}

export interface ActivitySuccess {
    type: typeof ACTIVITY_SUCCESS
    payload: 
    ActivityType
    
}

export type ActivityDispatch = ActivityLoading | ActivityFail | ActivitySuccess 