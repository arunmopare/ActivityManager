import { useEffect, useState } from 'react';
import './styles.css';
import { Container, GridRow } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Activities.list()
      .then(response => {
        let activities: Activity[] = [];
        response.forEach(activity => {
          activity.date = activity.date.split('T')[0];
          activities.push(activity);
          setLoading(false);
        })
        setActivities(activities);
      })
  }, [])

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleCreateOrEditActivity = (activity: Activity) => {
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, { ...activity, id: uuid() }])
    setEditMode(false);
    setSelectedActivity(activity);
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(x => x.id !== id)])
  }

  if (loading) {
    return <LoadingComponent content='Loading at App' />
  }

  return (
    <>
      <Navbar openForm={handleFormOpen} />
      <Container>
        <GridRow>
        </GridRow>
      </Container>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
