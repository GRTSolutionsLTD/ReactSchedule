import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import { ContactList } from './ContactList'
import style from './home.css'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'
export class Home extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            date: new Date(),
        };
       
        // $('#clock').fitText(1.3);        
        //setInterval(this.update, 1000);
       
    }
    
    componentDidMount() {
        setInterval(
          () => this.setState({ date: new Date() }), 1000
        );
      }
    render() {
        return (
            <div  >
                
                <div className='home'>
                <div className='welcome'>Hello Yaeli </div>
                    <div className='text'>iTime</div>
                    <br />
                    {/* <div className='number' >{this.props.data.length}</div> */}
                   
                    <div id="clock" className="clock" ><Clock value={this.state.date}/></div> 

                    <div className="center-wrap-left">
                        <div className="button">                       
                          <Link to="/ContactList">OUT <span className="shift"></span></Link>
                            <div className="mask"></div>
                        </div>
                    </div>

                    <div className="center-wrap-right">
                        <div className="button">                        
                        <Link to="/ContactList">IN<span className="shift"></span></Link>
                            <div className="mask"></div>
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
