import React from 'react';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';

export default React.createClass({
    getInitialState() {
        return {
            clicked: false
        }
    },
    openMenu() {
        this.setState({clicked: !this.state.clicked});

        if (this.state.clicked == false) {
            $('body').addClass('menu-open')
        } else {
            $('body').removeClass('menu-open')
        }
    },

    render() {
        return (
            <div>
                <button className={this.state.clicked ? 'menu-button active' : 'menu-button'} onClick={this.openMenu}>
                    <span className="sandwich">
                        <span className="sw-topper"></span>
                        <span className="sw-bottom"></span>
                        <span className="sw-footer"></span>
                    </span>
                </button>

                <ul className={this.state.clicked ? 'nav active' : 'nav'} onClick={this.openMenu}>
                    <li onClick={this.openMenu} className={this.state.clicked ? 'up' : 'down'}><IndexLink to='/'>Home</IndexLink></li>
                    <li onClick={this.openMenu} className={this.state.clicked ? 'up' : 'down'}><Link to='/About'>About</Link></li>
                    <li onClick={this.openMenu} className={this.state.clicked ? 'up' : 'down'}><Link to='/Gallery'>Portfolio</Link></li>
                    <li onClick={this.openMenu} className={this.state.clicked ? 'up' : 'down'}><Link to='/Contacts'>Contacts</Link></li>
                </ul>
            </div>
        );
    }
});
