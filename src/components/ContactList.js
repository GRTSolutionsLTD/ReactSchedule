
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Contact } from './Contact';
// Import Datepicker
// import DatePicker from "react-bootstrap-date-picker";
// Import Bootstrap components
//import FormGroup from 'react-bootstrap/lib/FormGroup';
//import ControlLabel from 'react-bootstrap/lib/ControlLabel';
//import HelpBlock from 'react-bootstrap/lib/HelpBlock';
// import Calendar from 'rc-calendar';
// import { Calendar } from 'react-date-range';
import { date_picker } from './mydatepicker';
import { Calendar } from 'react-date-range';
import style from './ContactList.css'
export class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
            startDate:"",
           selectedDate: new Date().toISOString(),  
        };
       
      //  this.onChange = this.onChange.bind(this);
        this.props.OnRefresh();  
        this.startDateHandler = this.startDateHandler.bind(this); 
     //   var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
       // "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        
    }


    onInputChange = (event) => {
        const value = event.target.value;
        this.state.ValueSearch = value;
        this.props.OnRefresh();
        this.props.onSearch(this.state.ValueSearch); //--original 

    }
    startDateHandler(event) {
        
        console.log(String(event._d).slice(4,15));        
         this.setState({startDate:String(event._d).slice(4,15)});        
        }

        handleSelect(event){
        var monthNames = {Jan: 1 , Feb: 2, Mar: 3, Apr:4, May:5, Jun:6,
                Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };
       //console.log(String(event._d).slice(4,15));        
       
       var monthName=String(event._d).slice(4,7);
       console.log(monthName);
       var numMonth=monthNames.monthName; // to convert enum to number!!! 
       this.setState(numMonth);        
        }
    render() {
        console.log(this);
        return (

            <div >
                <Link to={`/Add/${null}`} >Add</Link>
                <br /><br /><br />
                {/* <input className="search" type="text" placeholder="search" onChange={this.onInputChange} value={this.state.ValueSearch} /> */}
               
            
                {/* <FormGroup className="col-lg-2 col-lg-offset-5" > */}
                    {/* <ControlLabel>Pick A Date</ControlLabel> */}
                    {/* <DatePicker id="example-datepicker" value={this.state.selectedDate} onChange={this.onChange} /> */}
                    {/* <HelpBlock>Help</HelpBlock> */}
                {/* </FormGroup> */}
               
    
                {/* <div className="header">History</div> */}
            <div className="col-lg-offset-5">
                <Calendar
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>    
                {/* <datepicker action={this.startDateHandler}></datepicker>
                <datepicker action={this.startDateHandler}></datepicker> */}

                <div className="table-users" >
                    <table >
                        <tbody>
                            <tr>
                                <th> In<br/><i className="em em-arrow_heading_down"></i></th>
                                <th>Out<br/><i className="em em-arrow_heading_up"></i></th>
                                <th>Date<br/><i className="em em-date"></i></th> 
                                <th>TotalTime<br/><i className="em em-alarm_clock"></i></th>
                                {/* <th>Update</th>
                                <th>Delete</th> */}
                                <th>Feedback<br/><i className="em em-ballot_box_with_check"></i></th>
                            </tr>
                            {this.props.FilterList.map(user => <Contact key={user.id} onDelete={this.props.onDelete} {...user} id={user.id}></Contact>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


