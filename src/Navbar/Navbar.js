import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Aux from './../hoc/Aux';
import Home from './../Home/Home';
import About from './../About/About';
import Contact from './../Contact/Contact';
import './Navbar.css'


class Navbar extends Component {

    state = {
        isMenuOpen : false
    }

    toggleMenu = () => {  
        this.setState({isMenuOpen : !this.state.isMenuOpen})
    }

    render() {
        let menuBtnClass = ['NavbarIcon'];
        let navbarClass = ['Navbar'];

        if(this.state.isMenuOpen) {
            menuBtnClass.push('action')
            navbarClass.push('action')
        }

        return(
            <Aux>
                <div className={menuBtnClass.join(' ')} onClick={this.toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={navbarClass.join(' ')}>
                    <ul className="NavbarMenu" onClick={this.toggleMenu}>
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