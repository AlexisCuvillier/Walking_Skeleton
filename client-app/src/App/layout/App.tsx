import React, { useEffect, useState } from 'react';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashborard/ActivityDashboard';
import {v4 as uuid} from 'uuid'
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootStore } from '../store';
// import { GetActivity } from '../actions/ActivityAction';


function App() {


  // const dispatch = useDispatch()
  // const activityState  = useSelector((state : RootStore) => state.getActivity)
  // const [activite, SetActivite] = useState("")
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => SetActivite(event.target.value)
  // const handleSubmit = () => {
  //     dispatch(GetActivity(activite))
  // }



  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list().then(response => 
    {
     console.log(response);
     let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity)
      })
      setActivities(activities);
      setLoading(false);
    })
  }, [])


  function handleSelectedActivity (id : string){
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id? : string)
  {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity){

    setSubmitting(true);
    if(activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteActivity(id :string){
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    })
    
  }

  if (loading) return <LoadingComponent content='Loading APP' />


  // console.log(activityState);

  return (
    <>
      
      <NavBar openForm={handleFormOpen}/>
      <Container style = {{marginTop : '7em'}}>
<div>
      {/* <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}> Search</button> */}
</div>
        
        <ActivityDashboard 
          activities ={activities}
          selectedActivity = {selectedActivity}
          selectActivity = {handleSelectedActivity}
          cancelSelectActivity ={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity= {handleDeleteActivity}
          submitting ={submitting}
        />
      </Container>

    </>
  );
}

export default App;
