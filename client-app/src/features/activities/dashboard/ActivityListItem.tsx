import React, { SyntheticEvent, useState } from 'react'
import { Button, Item, Label } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import { Activity } from '../../../app/models/Activity';
import { Link } from 'react-router-dom';


interface Props {
    activity: Activity
}

const ActivityListItem = ({ activity }: Props) => {
    const { activityStore } = useStore();
    const { deleteActivity, loading } = activityStore;

    const [target, setTarget] = useState('');


    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(id);
        deleteActivity(id);
    }

    return (
        <Item key={activity.id}>
            <Item.Content>
                <Item.Header as="a">
                    {activity.title}
                </Item.Header>
                <Item.Meta>
                    {activity.date}
                </Item.Meta>
                <Item.Description>
                    <div>{activity.description}</div>
                    <div>{activity.city}, {activity.venue}</div>
                </Item.Description>
                <Item.Extra>
                    <Button as={Link} to={`/activities/${activity.id}`} floated="right" content="View" color="blue"></Button>
                    <Button
                        name={activity.id}
                        onClick={(e) => { handleActivityDelete(e, activity.id) }}
                        id={activity.id}
                        loading={loading && target === activity.id}
                        floated="right"
                        content="Delete"
                        color="red">
                    </Button>
                    <Label basic content={activity.category} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default ActivityListItem