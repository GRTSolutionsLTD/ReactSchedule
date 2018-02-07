import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import style from 'C:/Users/Admin/Desktop/ProjYaelNoa_old/src/components/Options.scss'
import { Col, Panel } from 'react-bootstrap';
import TasksTable from 'C:/Users/Admin/Desktop/ProjYaelNoa_old/src/components/options/TasksTable.js';

export class Options extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
     
        }; }
    
    render() {
      return ( 
        <Col md={ 8 } mdOffset={ 1 }>
        <Panel header={ 'A basic react-bootstrap-table' }>
          <TasksTable/>
        </Panel>
        </Col>
      );

    }
}


        