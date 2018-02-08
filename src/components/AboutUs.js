import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import './AboutUs.css'
import {Jumbotron,Button,Form,FormGroup,ControlLabel,FormControl,Alert,Glyphicon,Image} from 'react-bootstrap';

export class AboutUs extends React.Component { 
    constructor(props) {  
        super(props)
        this.state = {
        }
        }; 

        render() {
            return(
                <div>
                    <Jumbotron id="AboutUsJunbo">
                    
                    <h1> <Image id="scheduleIcon" src="https://cdn3.iconfinder.com/data/icons/illustricon-tech-ii/512/calendar-512.png" rounded /> iTime</h1>
                    <h2> So Simple - So Clever </h2>
                    <p>
                    <h3> <strong> Description</strong></h3>
                    Employee time tracking software that saves time and money. <br></br>  Our time clock app tracks employee hours, overtime, project management, communication and more.<br></br> Never use a paper time card again!<br></br><br></br>
                    Enjoy iTime ! 
                    </p>
                    
                    </Jumbotron>
                </div>

            );
        
        }
    
}
export default AboutUs;