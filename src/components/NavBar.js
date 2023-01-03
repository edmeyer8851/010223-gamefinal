import React, { useState } from "react";
import { Container, Grid, Menu } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';




function NavBar({ currentUser, logOut }) {

    //Toggle Button to Switch Color 
    const [isDarkMode, setIsDarkMode] = useState(true)
    const onToggleDarkMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode) 
    }
    const textButton = isDarkMode ? "Light Mode" : "Dark Mode"


    return (
      <div className = "App">
        <Grid padded className = "tablet computer only">
            <Menu borderless fluid inverted size = "huge" centered="true" style = {isDarkMode ? {background: "black"} : {background: "yellow"}}> 
                <Container> 
                    <Menu.Item as="a" href = "/" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Home 
                    </Menu.Item>
                    <Menu.Item as="a" href = "/snakegame" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Snake
                    </Menu.Item>
                    <Menu.Item as="a" href = "/breakout" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Breakout
                    </Menu.Item>
                    <Menu.Item as="a" href = "/hiscores" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Hiscores 
                    </Menu.Item>
                    <Menu.Item as="a" href = "/login" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Login 
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item> 
                            {currentUser!=="" && <div>Hello, {currentUser}!</div>}
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item> 
                            {currentUser!=="" && <button onClick={logOut} style={{backgroundcolor:"magenta"}}> Logout</button>}
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item> 
                            <button onClick={onToggleDarkMode} style={{backgroundcolor:"magenta"}}> {textButton}</button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </Grid>
        </div>
    )
}

export default NavBar;