import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../App/layout/LoadingComponent";
import { useStore } from "../../../App/stores/store";



export default function ActivityDetails()
{
  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectActivity} = activityStore;

  if(!activity) return <LoadingComponent />;
    return (
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`}  />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.date}</span>
          </Card.Meta>
          <Card.Description>
           {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
       <Button.Group widht='2'>
           <Button onClick={() => openForm(activity.id)} basic color ='blue' content='Edit'/>
           <Button onClick={cancelSelectActivity} basic color ='grey' content='Cancel'/>
       </Button.Group>
        </Card.Content>
      </Card>
    )
}