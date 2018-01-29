import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { onLoad, OnAddRecord, OnUpdateRecord} from './actions/contactAction'
import {   deleteRecord } from './actions/contactAction'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/home';
import { ContactList } from './components/ContactList';
import { Layout } from './components/Layout'

class App extends Component {
    // componentWillMount() {
   //      this.props.onLoad();
    // }
   componentDidMount(){
       this.props.onLoad();
    }
    render() {
        return (
            <div>                
                <BrowserRouter>
                {this.props.data.length>0?
                                        <div>
                                        <Layout />
                                        <Route exact path="/"                                       
                                            render={(props) => <Home  {...props} data={this.props.data}  OnUpdateRecord={this.props.OnUpdateRecord} OnAddRecord={this.props.OnAddRecord}></Home>} />
                                        <Route path="/ContactList"
                                            render={(props) => <ContactList onDelete={this.props.delete}   data={this.props.data} FilterList={this.props.FilterList} ></ContactList>} /> 
                                    </div>:<div></div>}

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

        delete: (id) => dispatch(deleteRecord(id)),
        onLoad: () => dispatch(onLoad()),
        OnAddRecord: (contact) => dispatch(OnAddRecord(contact)),
        OnUpdateRecord: (contact) => dispatch(OnUpdateRecord(contact)),            
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
