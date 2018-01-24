import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { ContactList } from './ContactList'
import style from './home.css'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'
export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isIn: true,
            date: new Date(),
        };
        this.handleSelect = this.handleSelect.bind(this); 
        this.entryfunc = this.entryfunc.bind(this); 

    }
    
    componentDidMount() {
        setInterval(
          () => this.setState({ date: new Date() }), 1000 );
    }
    
    entryfunc() {
        alert("You have successfully logged out");
        this.setState({isIn:true});

    }     
    handleSelect() {
        alert("You have successfully logged in");
        this.setState({isIn:false});
        //this.setState({isIn:false} );
    }     
    
    render() {
        const isIn = this.state.isIn;

        return (
            <div  >                
                <div className='home'>
                <div className='welcome'>Welcom! <br/> Ready To For Your Day??</div>
                    <div className='text'>iTime</div>
                    <br />
                    {/* <div className='number' >{this.props.data.length}</div> */}
                   
                    <div id="clock" className="clock" ><Clock value={this.state.date}/></div> 

                    <div className="center-wrap-left">                        
                         <div className="button">
                         <button onClick={this.entryfunc} disabled={this.state.isIn}>CHECK OUT </button>  
                         </div>                 
                    </div>

                    <div className="center-wrap-right">
                        <div className="button">                        
                        <button onClick={this.handleSelect} disabled={!this.state.isIn}> CHECK IN</button>                            
                        </div>
                    </div>
                    <div className="center-wrap">
                        <div className="button">                        
                            <Link to="/ContactList">Schedule Reports<span className="shift"></span></Link>
                            <div className="mask"></div>
                        </div>
                    </div>
                    

                </div>
            </div>
        );
    }
}
