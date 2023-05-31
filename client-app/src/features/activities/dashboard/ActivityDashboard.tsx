import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

interface Props {
    activities: Activity[]
}

const ActivityDashboard = ({ activities }: Props) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} />
            </Grid.Column>
            <Grid.Column width={6}>
                {activities[0] && <ActivityDetails activity={activities[0]} />}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard;