import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import './Options.css'
import TasksTable from 'C:/Users/Admin/Desktop/ProjYaelNoa_old/src/components/options/TasksTable.js';
import {Breadcrumb,Button,Grid,Col,Row,Clearfix,Label,Jumbotron,ProgressBar,Alert,Carousel,ToggleButton,ToggleButtonGroup,DropdownButton, SplitButton, Dropdown,MenuItem} from 'react-bootstrap';
export class Options extends React.Component {
   
  
    constructor(props) {  
        super(props)
        this.state = {
          value:[1,3]   
        }; 
      
        this.handleChangeButtonGroup = this.handleChangeButtonGroup.bind(this);
      }

        handleChangeButtonGroup(e) {
          this.setState({ value: e });
        } 
    
    render() {
     var dummySentences = [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'Donec hendrerit tempor tellus.',
        'Donec pretium posuere tellus.',
        'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Nulla posuere.',
        'Donec vitae dolor.',
        'Nullam tristique diam non turpis.',
        'Cras placerat accumsan nulla.',
        'Nullam rutrum.',
        
      ];
      return ( 
        <div>  
           <h2>
         <Label bsStyle="info">Site Rules:</Label>
       </h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>;
       
        <Grid>
        <Row className="show-grid">
       <Col sm={6} md={3}>
        <br />
        {dummySentences.slice(0, 6).join(' ')}
      </Col>
      <Col sm={6} md={3}>
        <br />
        {dummySentences.slice(0, 4).join(' ')}
      </Col>
      <Col sm={6} md={3}>
        <br />
        {dummySentences.slice(0, 6).join(' ')}
      </Col>
      <Col sm={6} md={3}>
        <br />
        {dummySentences.slice(0, 2).join(' ')}
      </Col>
      </Row>
    </Grid>
    
        
      <Jumbotron id="jumbo-option">
      <h1>Updating...</h1>
      <p>
        This might take a few minutes. Feel free to check our cool stuff in iTime app. 
      </p>
      
      <ProgressBar active now={45} />;
      
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron>


    <Alert bsStyle="warning">
     <strong>Warning!</strong>We suggest you check your schedule history to make sure you worked at least 9 hours a day. 
    </Alert>  


    <ToggleButtonGroup
        type="checkbox"
        value={this.state.value}
        onChange={this.handleChangeButtonGroup}>
        <ToggleButton value={1}>Public </ToggleButton>
        <ToggleButton value={2}>Private</ToggleButton>
        <ToggleButton value={3}>Team members</ToggleButton>
        <ToggleButton value={4} disabled>
          TL only (disabled)
            </ToggleButton>
            <Dropdown id="dropdown-custom-2">
        <Button bsStyle="info">mix it up style-wise</Button>
        <Dropdown.Toggle bsStyle="success" />
        <Dropdown.Menu className="super-colors">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>
            Active Item
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
      </ToggleButtonGroup>







    </div>
      );

    }
}


export default Options;
