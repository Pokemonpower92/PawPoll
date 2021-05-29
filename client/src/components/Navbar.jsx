import { Component } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/Navbar.css';


class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <h1 className="Navbar-home">PawPoll</h1>
                <a 
                    className="Navbar-github"
                    href="https://github.com/Pokemonpower92"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size='2x'
                    />
                </a>
            </div>
        )
    }
}

export default Navbar;