import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import './Help.css'
import {Jumbotron,Button,Form,FormGroup,ControlLabel,FormControl,Alert,Glyphicon} from 'react-bootstrap';

export class Help extends React.Component { 
    constructor(props) {  
        super(props)
        this.state = {
        }
        }; 
      

        render() {
            return(
                <div>
            
            <Jumbotron id="jumbo-help">
            <h2>Let us help you</h2>
            <p>
                Please leave us your information and we'll reach you as soon as possible.
            </p>
            <p>
            <Form inline>
            <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Yael " />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>{' '}
                <FormControl type="email" placeholder="yael.peles@example.com" />
            </FormGroup>{' '}
            <Button type="submit"  bsStyle="success">Submit</Button>
            </Form>           
                </p>
            </Jumbotron>  
            
               
   
          
            
            </div>
              );  }

}

export default Help;