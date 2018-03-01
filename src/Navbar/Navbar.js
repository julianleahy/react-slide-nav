import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Aux from './../hoc/Aux';
import Home from './../Home/Home';
import About from './../About/About';
import Contact from './../Contact/Contact';
import './Navbar.css'


class Navbar extends Component {

    render() {
        let menuBtnClass = ['NavbarIcon'];
        let navbarClass = ['Navbar'];
        return(
            <Aux>
                <div className={menuBtnClass.join(' ')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={navbarClass.join(' ')}>
                    <ul className="NavbarMenu">
                    <li><NavLink to='/' exact >Home</NavLink></li>
                    <li><NavLink to='/about' exact >About</NavLink></li>
                    <li><NavLink to='/contact' exact >Contact</NavLink></li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
            </Aux>
        );
    }
}

export default Navbar;