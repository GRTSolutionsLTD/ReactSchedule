import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { RecordList } from './RecordList'
import style from './home.css'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'
import { Record } from './Record';
export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            record: {
                 in: '',
                 out: '',
                 date:new Date()
             },
            isCheckInPreesed: true,
            date: new Date(),
            timeIn:'', 
            timeOut:'',
        };

        this.CheckInPressed = this.CheckInPressed.bind(this); 
        this.CheckOutPressed = this.CheckOutPressed.bind(this); 
        this.convertToDate = this.convertToDate.bind(this);
    }
    
    componentDidMount() {
        setInterval(
          () => this.setState({ date: new Date() }), 1000 );
         
        if(this.props.data[this.props.data.length-1].out==="" && this.props.data[this.props.data.length-1].in!=="")      
             { this.setState({isCheckInPreesed:false})
             this.setState({timeIn:this.props.data[this.props.data.length-1].in})
             }     
    }
    
    CheckOutPressed() {
        if(String(this.state.date).slice(16,18)>16){
        alert("Good afternoon! You have successfully logged out");}
        else{ alert(" You have successfully logged out. \n Attention! it's still working time !!");}
        //update list       
        this.setState({isCheckInPreesed:true}); //set checkOut Button disabled
        this.setState({timeOut:String(this.state.date).slice(16,24)});
        this.state.record.out= String(this.state.date).slice(16,21);    
        if(this.state.record.in==='')
        {
            
            this.state.record.in=(this.props.data[this.props.data.length-1]).in;
            this.state.record.date=(this.props.data[this.props.data.length-1]).date;
        }     
        this.props.OnUpdateRecord(this.state.record);
    }

    
    convertToDate(event){
        var monthNameS=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];    
        var monthName=event.slice(4,7); // ex. jan
        var dayName= event.slice(8,10); 
        var yearName= event.slice(11,15); 
        var numMonth=monthNameS.indexOf(monthName)+1; 
        console.log(numMonth);
        if(numMonth<10){ var month='0'+String(numMonth);} //month
        else{var month=String(numMonth);}     
        var fullMonth=dayName+"/"+month+"/"+yearName;
        return fullMonth; 
    }

    
    CheckInPressed() {
        if(String(this.state.date).slice(16,18)>12){
        alert("Good afternoon! You have successfully logged in");}
        else{alert("Good Morning! You have successfully logged in");}
        this.setState({isCheckInPreesed:false});  // //set checkIn Button disabled
        this.setState({timeIn:String(this.state.date).slice(16,24)});
        this.state.record.in= String(this.state.date).slice(16,21);   
        var convertedDate=this.convertToDate(String(this.state.date));
        this.state.record.date=convertedDate;
        this.props.OnAddRecord(this.state.record);     
        }


        
    
    render() {
      const isCheckInPreesed = this.state.isCheckInPreesed;

        return (
            <div  >                
                <div className='home'>
                <div className='welcome'>Welcom Back! <br/> Have A Wonderfull Day! </div>
                    <div className='text'>iTime</div>
                    <br />

                    <div id="clock" className="clock" ><Clock value={this.state.date}/></div> 

                    <div className="center-wrap-left">                        
                         <div className="button">
                         <button id="unibutt" onClick={this.CheckOutPressed} disabled={isCheckInPreesed}>CHECK OUT </button>  
                         </div>        
                         <div className='textleft'>checked out at: {this.state.timeOut}</div>  
                    </div>

                    <div className="center-wrap-right">
                        <div className="button" >                        
                        <button id="unibutt" onClick={this.CheckInPressed}  disabled={!isCheckInPreesed}> CHECK IN</button>                            
                        </div>
                        <div className="textright">checked in at: {this.state.timeIn} </div>
                    </div>
                    <div className="center-wrap">
                        <div className="button">                        
                            <Link to="/RecordList">Schedule Reports<span className="shift"></span></Link>
                            <div className="mask"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
