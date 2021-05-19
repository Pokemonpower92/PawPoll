import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PollHome.css';

class PollHome extends Component{
    render(){
        return (
            <div className="PollHome">
                <div className="PollHome-message">
                    <p>
                        PawPoll is a free, light-weight polling application
                        that allows you to create and participate in polls that
                        asks the questions you're cuirious about.
                    </p>
                    <p>
                        Click the button below to create 
                        a new poll and get started!
                    </p>
                </div>
                <Link exact to="/poll/create">
                    <button className="PollHome-button" type="button">
                        Create a new Poll!
                    </button>
                </Link>
            </div>
        )
    }
}

export default PollHome;