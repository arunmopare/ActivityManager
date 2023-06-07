import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to="/" header>
                    <img src="/assets/logo.png" alt="Activities" style={{ marginRight: 10 }} />
                </Menu.Item>

                <Menu.Item as={NavLink} to="/activities" name="Activity" />
                <Menu.Item>
                    <Button as={NavLink} to="/createActivity" positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default Navbar;