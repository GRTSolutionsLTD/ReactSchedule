import React from "react";
import { Link } from "react-router-dom";


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
        float: 'right'
    };

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" >
                <div className="container">
                    <div className="navbar-header">
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
                                <Link to="/" onClick={this.toggleCollapse}>Home</Link>
                            </li>
                            <li>
                                <Link to="/ContactList" onClick={this.toggleCollapse}>Schedule Reports</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Layout;
