import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteContact } from './../actions/contactAction';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    calcTotal(startTime,endTime){
       
        var a = startTime.split(':');
        var b = endTime.split(':');
        var hourA= a[0];
        var hourB= b[0];
        var minuteA=a[1];
        var minuteB=b[1];
        var totalhours=hourB-hourA;
        var totalminute=Math.abs(minuteA-minuteB);
        var total =String(totalhours)  + ":" +String(totalminute);
        return total;

    }

    isLessHours(b){
        var a = b.split(':');
        var hour= a[0];
        if(hour<9)
      //  { return "Attention!!"}
      { return <i className="em em--1"></i>}
      else{
          return <i className="em em---1"></i>
      }
    }

    render() {
        //var x = this.props.avatar;
        var b = this.calcTotal(this.props.in,this.props.out);
        return (
            <tr>
                <td> {this.props.in}</td>
                <td> {this.props.out}</td>
                <td> {this.props.date}</td> 
                {/* task 1 */}
                <td> {b}</td>               
                {/* task2 */}
                <td> {this.isLessHours(b)}</td> 
                {/* <td ><Link to={`/Add/${this.props.id}`}>Update</Link></td>
                <td><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></td> */}
                {/* <td> <i className="em em--1"></i></td>  */}

            </tr>
        );
       
    }
}
 