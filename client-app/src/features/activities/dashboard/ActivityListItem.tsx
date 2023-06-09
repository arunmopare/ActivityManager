import React, { SyntheticEvent, useState } from 'react'
import { Button, Icon, Item, ItemGroup, ItemImage, Label, Segment, SegmentGroup } from 'semantic-ui-react'
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
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <ItemImage size='tiny' circular src='/assets/user.png'></ItemImage>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                </span>
                <span>
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                ></Button>
            </Segment>
        </SegmentGroup>
    )
}

export default ActivityListItem