import { Component } from 'react';
import api from '../api';

class PollList extends Component{
    constructor(props){
        super(props);
        this.state = {
            polls: [],
            loading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({
            loading: true
        })

        await api.getPolls().then( polls => {
            this.setState({
                polls: polls.data.data,
                loading: false
            })
        })
    }
    render(){
        return(
            <div className="PollList">
                <h1>This is the page for all polls.</h1>
                {this.state.polls.map(p => (
                    <div key={p._id}>
                        <h1>{p.question}</h1>
                        <ul>
                            {p.answers.map(a =>(
                                <li>{a}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}

export default PollList;