import React, {useState, useEffect} from "react";
import {Button, Container, Grid, Header, Icon, Menu} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css";
import Breakout from "./Breakout"

import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import './Styles.css';




function NavBar() {

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
                    <Menu.Item header as = "a" href = "/" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Home 
                    </Menu.Item>
                    <Menu.Item header as = "a" href = "/snakegame" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Snake
                    </Menu.Item>
                    <Menu.Item header as = "a" href = "/breakout" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Breakout
                    </Menu.Item>
                    <Menu.Item header = "a" href = "/hiscores" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        High-Scores 
                    </Menu.Item>
                    <Menu.Item header = "a" href = "/login" style = {isDarkMode ? {color:"yellow"} : {color : "black"}}>
                        Login 
                    </Menu.Item>
                    <Menu.Menu position = "right">
                        <Menu.Item> 
                        <button onClick = {onToggleDarkMode} style= {{backgroundcolor:"magenta"}}> {textButton}</button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </Grid>
        </div>
    )
}

export default NavBar;