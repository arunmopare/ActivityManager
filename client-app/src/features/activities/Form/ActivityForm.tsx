import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'

interface Props {
    activity: Activity | undefined
    closeForm: () => void;
}

const ActivityForm = ({ activity, closeForm }: Props) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title" />
                <Form.Input placeholder="Description" />
                <Form.Input placeholder="Category" />
                <Form.Input placeholder="Date" />
                <Form.Input placeholder="City" />
                <Form.Input placeholder="Venue" />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default ActivityForm