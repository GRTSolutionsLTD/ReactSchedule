import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Link } from 'react-router-dom'
import { Route, browserHistory, Redirect } from 'react-router'


export class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
            contact: {
               /* id: "",
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
                notes: ""*/
                id: "",
                in: "",
                out: "",
                total:""
            },
            
            redirect: false,
            currentContact: null
          
           
        }
       // console.log(this.props.location)

      //  debugger;
       // console.log(this.props);
        if (this.props.match.params.id != "null") {
            this.state.currentContact = this.props.data.filter(c => c.id == this.props.match.params.id);
        /*    this.state.contact.name = this.state.currentContact[0].name;
            this.state.contact.lastName = this.state.currentContact[0].lastName;
            this.state.contact.avatar = this.state.currentContact[0].avatar;
            this.state.contact.email = this.state.currentContact[0].email;
            this.state.contact.phone = this.state.currentContact[0].phone;
            this.state.contact.id = this.state.currentContact[0].id;
        */
         this.state.contact.total = this.state.currentContact[0].total;
        this.state.contact.out = this.state.currentContact[0].out;
        this.state.contact.in = this.state.currentContact[0].in;
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
                    <p className="titleAdd">Add New Record</p>
                    <input  
                        id="in"
                        onChange={this.onInputChange}
                        placeholder="in"
                        value={this.state.contact.in}
                        className="ss"/>
                    <br />
                    <input  
                        id="out"
                        onChange={this.onInputChange}
                        placeholder="out"
                        value={this.state.contact.out}
                        className="ss"/>
                    <br />
                    {/* <input  
                        id="total"
                        onChange={this.onInputChange}
                        placeholder="total"
                        value={this.state.contact.total}
                        className="ss" /> */}
                        <input  
                        id="total"
                        onChange={this.onInputChange}
                        placeholder="total"
                        value={this.state.contact.total}
                        className="ss" />
                        
                    <br />

                    <button class="panel-footer" type="submit" className="sumbit" onClick={this.onSave} >Save</button>
                </form>
               
            </div>
        );
    }
}
