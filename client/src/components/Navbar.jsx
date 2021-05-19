import { Component } from 'react';
import '../styles/Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <h1 className="Navbar-home">PawPoll</h1>
            </div>
        )
    }
}

export default Navbar;