import { Component } from 'react';
import apis from '../api';

class PollResults extends Component{
    constructor(props){
        super(props);
        const tokens = this.props.location.pathname.split('/');

        this.state = {
            id: tokens[2],
            poll: {},
            loading: true
        }
    }

    componentDidMount = async () => {
        await apis.getPollById(this.state.id).then( poll => {
            this.setState({
                poll: poll.data.data,
                loading: false
            })
        })
    }

    render(){
        if(this.state.loading){
            return null;
        } else {
            return(
                <div className="PollResults">
                    <h1>{this.state.poll.question}</h1>
                    {this.state.poll.answers.map(a => {
                        return(
                            <div 
                                className="PollResults-answer"
                            >
                                <p>{a}</p>
                            </div>
                        )
                    })}
                    {this.state.poll.results.map(a => {
                        return(
                            <div 
                                className="PollResults-answer"
                            >
                                <p>{a}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default PollResults