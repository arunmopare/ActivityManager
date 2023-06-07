import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";


const Navbar = () => {
    const { activityStore } = useStore();
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="Activities" style={{ marginRight: 10 }} />
                    Reactivities
                    <Menu.Item>Reactivities</Menu.Item>
                    <Menu.Item>Reactivities</Menu.Item>
                    <Menu.Item>Reactivities</Menu.Item>
                </Menu.Item>
                <Menu.Item name="Activity" />
                <Menu.Item>
                    <Button onClick={() => { activityStore.openForm() }} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default Navbar;