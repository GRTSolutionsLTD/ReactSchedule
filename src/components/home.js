import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { RecordList } from './RecordList'
import style from './home.css'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'
import { Record } from './Record';
import { Modal,Popover,Tooltip,Button, OverlayTrigger} from 'react-bootstrap';
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
            show: false,
            showLeft : false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseLeft=this.handleCloseLeft.bind(this);
        this.handleShowClose = this.handleShowClose.bind(this);
        this.CheckInPressed = this.CheckInPressed.bind(this); 
        this.CheckOutPressed = this.CheckOutPressed.bind(this); 
        this.convertToDate = this.convertToDate.bind(this);
    }
    
    handleClose() {
        this.setState({ show: false });
      }

      handleCloseLeft(){
          this.setState({ showLeft: false });
      }
    
      handleShow() {
        this.setState({ show: true });
        this.CheckInPressed();
      }
      handleShowClose() {
        this.setState({ showLeft: true });
        this.CheckOutPressed();
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
     //   if(String(this.state.date).slice(16,18)>16){
     ///   alert("Good afternoon! You have successfully logged out");}
        ///else{ alert(" You have successfully logged out. \n Attention! it's still working time !!");}
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
      
        this.setState({isCheckInPreesed:false});  // //set checkIn Button disabled
        this.setState({timeIn:String(this.state.date).slice(16,24)});
        this.state.record.in= String(this.state.date).slice(16,21);   
        var convertedDate=this.convertToDate(String(this.state.date));
        this.state.record.date=convertedDate;
        this.props.OnAddRecord(this.state.record);     
    
        }


        
    
    render() {
      const isCheckInPreesed = this.state.isCheckInPreesed;

      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;  

        return (
            <div  >      
                
                <div className='home'>
                {/* <div className='welcome'>Welcom Back! <br/> Have A Wonderfull Day! </div> */}
                    <div className='text'>iTime</div>
                    <br />

                    <div id="clock" className="clock" ><Clock value={this.state.date}/></div> 

                    <div className="center-wrap-left">                        
                         <div className="button">
                         <Button id="unibutt" onClick={this.handleShowClose} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" disabled={isCheckInPreesed}>CHECK OUT </Button>  
                        
                         <Modal show={this.state.showLeft} onHide={this.handleCloseLeft}>
                            <Modal.Header closeButton>
                                <Modal.Title>Hello Worker </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>You Have successfully logged out!</h4>
                                <p>
                                See You  :)
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleCloseLeft }>Close</Button>
                            </Modal.Footer>
                            </Modal>
                        
                        
                         </div>        
                         <div className='textleft'>checked out at: {this.state.timeOut}</div>  
                         
                    </div>

                    


                    <div className="center-wrap-right">
                        <div className="button"  >                        
                            <Button id="unibutt" onClick={this.handleShow} className="btn btn-primary"  disabled={!isCheckInPreesed}> CHECK IN </Button> 
                            <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Hello Worker </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>You Have successfully logged in!</h4>
                                <p>
                                Have a nice day :)
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose }>Close</Button>
                            </Modal.Footer>
                            </Modal>
                        </div>
                        <div>                     
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
