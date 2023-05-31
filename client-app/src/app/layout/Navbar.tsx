import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = () => {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="Activities" style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activity" />
                <Menu.Item>
                    <Button positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default Navbar;