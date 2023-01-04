import React from "react";
import { Container, Grid, Menu } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';




function NavBar({ currentUser, logOut }) {

    return (
      <div className = "App">
        <Grid padded className = "tablet computer only">
            <Menu borderless fluid inverted size = "huge" centered="true" style = {{background: "black"} }> 
                <Container> 
                    <Menu.Item as="a" href = "/" style = {{color:"yellow"}}>
                        Home 
                    </Menu.Item>
                    <Menu.Item as="a" href = "/snakegame" style = {{color:"yellow"}}>
                        Snake
                    </Menu.Item>
                    <Menu.Item as="a" href = "/breakout" style = {{color:"yellow"}}>
                        Breakout
                    </Menu.Item>
                    <Menu.Item as="a" href = "/hiscores" style = {{color:"yellow"}}>
                        Hiscores 
                    </Menu.Item>
                    <Menu.Item as="a" href = "/login" style = {{color:"yellow"}}>
                        Login 
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item> 
                            {currentUser!=="" && <div>Hello, {currentUser}!</div>}
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item> 
                            {currentUser!=="" && <button onClick={logOut}> Logout</button>}
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </Grid>
        </div>
    )
}

export default NavBar;