import React from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

const ActivityFilters = () => {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: '27px' }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content='I am going' />
                <Menu.Item content='I am hosting' />
            </Menu >
            <Header />
            <Calendar />
        </>
    )
}

export default ActivityFilters