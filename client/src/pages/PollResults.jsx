import { Component } from 'react';

import { PollData } from '../components';
import apis from '../api';
import '../styles/PollResults.css';

class PollResults extends Component{
    constructor(props){
        super(props);
        const tokens = this.props.location.pathname.split('/');

        this.state = {
            id: tokens[2],
            poll: {},
            loading: true,
        };

        this.makeData = this.makeData.bind(this);
    }

    componentDidMount = async () => {
        await apis.getPollById(this.state.id).then( poll => {
            this.setState({
                poll: poll.data.data,
                loading: false
            })
        })
    }

    makeData = () => {
        let ret = {
            totalVotes: 0,
            votes: [],
            data: [],
        };

        this.state.poll.answers.forEach((key, i) => {
                ret.totalVotes += this.state.poll.results[i];
                ret.votes.push(this.state.poll.results[i]);
                ret.data.push(
                    { 
                        label: key,
                        value: this.state.poll.results[i]
                    }
                );
            }
        );

        return ret;
    }

    render(){
        

        if(this.state.loading){
            return null;
        } else {
            return(
                <div className="PollResults">
                    <h1>{this.state.poll.question}</h1>
                    <PollData pollData={this.makeData()} />
                </div>
            )
        }
    }
}

export default PollResults