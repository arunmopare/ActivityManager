import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

const Navbar = ({ openForm }: Props) => {
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
                    <Button onClick={openForm} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default Navbar;