import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, GridRow } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(res => {
        setActivities(res.data);
        console.log("got res", res.data)
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
        />
      </Container>
    </>
  );
}

export default App;
