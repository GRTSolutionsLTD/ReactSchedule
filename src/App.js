import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { onLoad } from './actions/contactAction'
import { OnAddContact, OnUpdateContact, deleteContact, OnSearchContact, OnRefreshContact } from './actions/contactAction'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/home';
import { Add } from './components/Add';
import { ContactList } from './components/ContactList';
import { Layout } from './components/Layout'

class App extends Component {
    componentWillMount() {
        this.props.onLoad();
    }
    render() {
       // console.log(this)
        return (
            <div>
                 
                <BrowserRouter>
                    <div>
                        <Layout />
                        <Route exact path="/"
                            render={(props) => <Home {...props} data={this.props.data}></Home>} />
                        <Route path="/ContactList"
                            render={(props) => <ContactList onDelete={this.props.delete} onSearch={this.props.Search} data={this.props.data} FilterList={this.props.FilterList} OnRefresh={this.props.Refresh}></ContactList>} />
                        <Route path="/Add/:id"
                            render={(props) => <Add {...props} onAdd={this.props.add} onUpdate={this.props.update} data={this.props.data} ></Add>} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
function mapStateToProps(store, ownProps) {
    return {
        data: store.data,
        FilterList: store.FilterList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => dispatch(deleteContact(id)),
        onLoad: () => dispatch(onLoad()),
        add: (contact) => dispatch(OnAddContact(contact)),
        update: (contact) => dispatch(OnUpdateContact(contact)),
        Search: (value) => dispatch(OnSearchContact(value)),
        Refresh: () => dispatch(OnRefreshContact())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
