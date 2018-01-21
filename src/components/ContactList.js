
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { Contact } from './Contact'

export class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ValueSearch: "",
        }
        this.props.OnRefresh();     
    }
    onInputChange = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        this.props.OnRefresh();
        this.props.onSearch(this.state.ValueSearch);
    }

    render() {
        console.log(this);
        return (
            <div >
                <Link to={`/Add/${null}`} >Add</Link>
                <br /><br /><br />
                <input className="search" type="text" placeholder="search" onChange={this.onInputChange} value={this.state.ValueSearch} />
                <div className="table-users">
                    <table >
                        <tbody>
                            <tr>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>image</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>update</th>
                                <th>delete</th> 
                            </tr>
                            {this.props.FilterList.map(user => <Contact onDelete={this.props.onDelete} {...user} id={user.id}></Contact>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


