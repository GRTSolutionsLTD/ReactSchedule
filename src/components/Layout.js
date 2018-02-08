import React from "react";
import { Link } from "react-router-dom";
import {Breadcrumb,Button,Glyphicon,Image} from 'react-bootstrap';

export class Layout extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            collapsed: true,
            today: new Date()
        };
    }
    toggleCollapse = () => {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }
    button = {
        margin: '0.5%',
        float: 'right',
        margin_top :'5%'
    };
 

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" >
                <div className="container">
                
                    <div className="navbar-header" >
                    <Image id="icon-header" src="https://cdn3.iconfinder.com/data/icons/illustricon-tech-ii/512/calendar-512.png" rounded />
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse} >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button> 
                    </div>
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                       
                        <ul className="nav navbar-nav">
                       
                             <li>
                                <Link to="/" onClick={this.toggleCollapse}> <Glyphicon glyph="home" /> Home </Link>
                            </li>
                            <li>
                                <Link to="/RecordList" onClick={this.toggleCollapse}><Glyphicon glyph="list-alt" /> Schedule Reports </Link>
                            </li>
                            <li>
                                <Link to="/Options" onClick={this.toggleCollapse}><Glyphicon glyph="wrench" /> Options  </Link>

                             </li>
                             <li>
                                <Link to="/AboutUs" onClick={this.toggleCollapse}><Glyphicon glyph="thumbs-up" /> AboutUs  </Link>

                             </li>
                             <li>
                                <Link to="/Help" onClick={this.toggleCollapse}><Glyphicon glyph="thumbs-up" /> Help  </Link>

                             </li>

                        </ul>
                    
                    </div>
                </div>
            </nav>
        );
    }
}

export default Layout;
