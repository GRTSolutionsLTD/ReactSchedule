import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom'
import { Route, browserHistory, Redirect } from 'react-router'


export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
            contact: {
                id: "",
                name: "",
                lastName: "",
                avatar: "",
                nickname: "",
                company: "",
                jobTitle: "",
                email: "",
                phone: "",
                address: "",
                birthday: "",
                notes: ""
            },
            redirect: false,
            currentContact: null
          
           
        }
        console.log(this.props.location)

        debugger;
        console.log(this.props);
        if (this.props.match.params.id != "null") {
            this.state.currentContact = this.props.data.filter(c => c.id == this.props.match.params.id);
            this.state.contact.name = this.state.currentContact[0].name;
            this.state.contact.lastName = this.state.currentContact[0].lastName;
            this.state.contact.avatar = this.state.currentContact[0].avatar;
            this.state.contact.email = this.state.currentContact[0].email;
            this.state.contact.phone = this.state.currentContact[0].phone;
            this.state.contact.id = this.state.currentContact[0].id;

        }
        this.onInputChange = this.onInputChange.bind(this);
    };
    onInputChange = (event) => {
        const contactt = this.state.contact;
        contactt[event.target.id] = event.target.value;
        this.setState({ contact: contactt })
    }
    returnToList = (e) => {
        e.preventDefault();
        this.setState({ redirect: true })
    }
    onSave = (event) => {
        if (this.state.currentContact == null) {
            this.props.onAdd(this.state.contact);
            this.state.contact.id = this.props.data.length + 1;
        }
        else
            this.props.onUpdate(this.state.contact);
        this.returnToList(event);
    }
    render() {

       
        if (this.state.redirect) return <Redirect to="/ContactList" />
        return (
            <div>
                <form className="add">
                    <p className="titleAdd">Add Contact</p>
                    <input  
                        id="name"
                        onChange={this.onInputChange}
                        placeholder="first name"
                        value={this.state.contact.name}
                        className="ss"/>
                    <br />
                    <input  
                        id="lastName"
                        onChange={this.onInputChange}
                        placeholder="lastName"
                        value={this.state.contact.lastName}
                        className="ss"/>
                    <br />
                    <input  
                        id="avatar"
                        onChange={this.onInputChange}
                        placeholder="img"
                        value={this.state.contact.avatar}
                        className="ss" />
                    <br />
                    <input type="email"
                        id="email"
                        onChange={this.onInputChange}
                        placeholder="e-mail"
                        value={this.state.contact.email}
                        className="ss" />
                    <br />
                    <input type="phone"
                        id="phone"
                        onChange={this.onInputChange}
                        placeholder="phone"
                        value={this.state.contact.phone}
                        className="ss" />


                    <button class="panel-footer" type="submit" className="sumbit" onClick={this.onSave} >Save</button>
                </form>
               
            </div>
        );
    }
}
