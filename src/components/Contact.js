import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteContact } from './../actions/contactAction';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var x = this.props.avatar;
        return (
            <tr>
                <td> {this.props.name}</td>
                <td> {this.props.lastName}</td>
                <td> <img src={x} style={{ width: 100, height: 50 }} /> </td>
                <td> {this.props.email} </td>
                <td> {this.props.phone} </td>

                <td ><Link to={`/Add/${this.props.id}`}>Update</Link></td>
                <td><button  onClick={() => this.props.onDelete(this.props.id)}>delete</button></td>
            </tr>
        );
       
    }
}
 