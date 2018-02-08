
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Record } from './Record';
import { date_picker } from './mydatepicker';
import { Calendar } from 'react-date-range';
import style from './RecordList.css'
export class RecordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
            startDate:"",
            day:"",
            year:"",
           selectedDate: new Date().toISOString(),  
           selectedItems: [],
           saved:props.FilterList,
        };    
        this.handleSelectMonth = this.handleSelectMonth.bind(this);        
    }   

        componentWillMount(){
        this.setState({selectedItems:this.props.FilterList});
        } 

        // convert date format to dd/mm/yy
        handleSelectMonth(event){ 
            this.setState({selectedItems:this.state.saved},function(){  //callback solution
                var monthNameS=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];    
                var monthName=String(event._d).slice(4,7); // mm
                var dayName= String(event._d).slice(8,10); 
                var yearName= String(event._d).slice(11,15); 
                var numMonth=monthNameS.indexOf(monthName)+1; 
                if(numMonth<10){ var month='0'+String(numMonth);} //month
                else{var month=String(numMonth);}               
                this.setState({startDate:month}); 
    
                var selectedI=[];
                this.state.selectedItems.forEach(element => {                      
                if(element.date.slice(3,5)==month&& element.date.slice(0,2)==dayName &&element.date.slice(6,11)==yearName)
                    { 
                            selectedI.push(element)}
                    });
                    
                this.setState({selectedItems:selectedI});
            });
    
        }
   
        render() {
        return (
            <div >     
                <br /><br /><br />
            <div id="calender" className="col-lg-offset-5">
                <Calendar
                    onInit={this.handleSelectMonth}
                    onChange={this.handleSelectMonth}       
                />
            </div>    
               
                <div className="table-users" >
                    <table >
                        <tbody>
                            <tr>
                                <th> In<br/><i className="em em-arrow_heading_down"></i></th>
                                <th>Out<br/><i className="em em-arrow_heading_up"></i></th>
                                <th>Date<br/><i className="em em-date"></i></th> 
                                <th>TotalTime<br/><i className="em em-alarm_clock"></i></th>
                                <th>Feedback<br/><i className="em em-ballot_box_with_check"></i></th>
                            </tr>
                            {this.state.selectedItems.map((user, i) => <Record Key={i} onDelete={this.props.onDelete} {...user} ></Record>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


