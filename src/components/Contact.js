import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteRecord } from './../actions/contactAction';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    calcTotal(startTime,endTime){ // calculate work time per day
       if(endTime==""){
           return "";
       }
        var a = startTime.split(':');
        var b = endTime.split(':');
        var hourA= a[0];
        var hourB= b[0];
        var minuteA=a[1];
        var minuteB=b[1];
        var totalhours=hourB-hourA;
        var totalminute=Math.abs(minuteA-minuteB);
        if (totalminute<10){totalminute="0"+totalminute}
        var total =String(totalhours)  + ":" +String(totalminute);
        return total;

    }

    isLessHours(b){ // set feedback emoji according to total time of work  
        var a = b.split(':');
        var hour= a[0];
        if(hour<9)
      { return <i className="em em--1"></i>}
      else{
          return <i className="em em---1"></i>
      } }

    render() {
        var b = this.calcTotal(this.props.in,this.props.out);
        return (
            <tr>
                <td > {this.props.in}</td>
                <td > {this.props.out}</td>
                <td> {this.props.date}</td> 
                <td> {b}</td>               
                <td> {this.isLessHours(b)}</td>              
            </tr>
        );
       
    }
}
 