
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { Contact } from './Contact';
import { date_picker } from './mydatepicker';
import { Calendar } from 'react-date-range';
import style from './ContactList.css'
export class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
            startDate:"",
           selectedDate: new Date().toISOString(),  
           selectedItems: [],
           saved:props.FilterList,
        };
      //  this.onChange = this.onChange.bind(this);
        this.props.OnRefresh();  
        this.startDateHandler = this.startDateHandler.bind(this);      
        this.handleSelect = this.handleSelect.bind(this); 
        //  this.componentDidMount();
        //  this.componentWillMount();
    }
    componentWillMount(){
        this.setState({selectedItems:this.props.FilterList});
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
           // debugger;
        this.setState({selectedItems:this.state.saved},function(){  //callback solution
            var monthNameS=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];    
            var monthName=String(event._d).slice(4,7); //Jan
        //   console.log(monthName);
            var numMonth=monthNameS.indexOf(monthName)+1; //jan=1
            if(numMonth<10){ var monthstring='0'+String(numMonth);}
            else{var monthstring=String(numMonth);}
            this.setState({startDate:monthstring});      
                var selectedI=[];
                this.state.selectedItems.forEach(element => {
                    //debugger;
                    if(element.date.slice(3,5)==monthstring)
                    { selectedI.push(element)}
                    
                });
                
           this.setState({selectedItems:selectedI});
        });

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
                            {this.state.selectedItems.map(user => <Contact key={user.id} onDelete={this.props.onDelete} {...user} id={user.id}></Contact>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


