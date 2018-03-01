import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Aux from './../hoc/Aux';
import Home from './../Home/Home';
import About from './../About/About';
import Contact from './../Contact/Contact';
import './Navbar.css'


class Navbar extends Component {

    state = {
        isMenuOpen: false
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }

    render() {
        let menuBtnClass = ['NavbarIcon'];
        let navbarClass = ['Navbar'];

        if (this.state.isMenuOpen) {
            menuBtnClass.push('action')
            navbarClass.push('action')
        }

        return (
            <Aux>
                <div className='NavWrap'>
                    <p className='NavTitle'><a href="http://julianleahy.com/">julianleahy.com</a></p>
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
                        <ul className="NavbarSocialIcon">
                            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a href=""><i className="fab fa-github"></i></a></li>
                        </ul>
                    </nav>

                </div>

                <div className='PageContent'>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </div>



            </Aux >
        );
    }
}

export default Navbar;