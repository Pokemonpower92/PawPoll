import { Component } from 'react';
import apis from '../api';

class PollPage extends Component{
    
    constructor(props){
        super(props);
        const location = this.props.location.pathname;

        this.state = {
            id: location.substring(location.lastIndexOf('/') + 1),
            poll: {},
            loading: true
        }

        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    }

    componentDidMount = async () => {
        await apis.getPollById(this.state.id).then( poll => {
            this.setState({
                poll: poll.data.data,
                loading: false
            })
        })
    }

    handleSelectAnswer = async (i) => {
        const payload = {...this.state.poll};
        const id = this.state.poll._id;

        payload.results[i]++;

        await apis.updatePoll(id, payload).then(res => {
            console.log(payload);
            this.props.history.push({
                pathname:  `/poll/${res.data.id}/results`,
                state: {id: res.data.id}
            });
        }).catch( e => {
            console.log(id);
        })

    }

    render(){
        if(this.state.loading){
            return <h1>get fucked boi</h1>
        } else{ 
            return(
                <div className="PollPage">
                    <h1>{this.state.poll.question}</h1>
                    {this.state.poll.answers.map(function (a, i) {
                        return(
                            <div 
                                className="PollPage-answer"
                                onClick={this.handleSelectAnswer.bind(this, i)}
                            >
                                <p>{a}</p>
                            </div>
                        )
                    }, this)}
                </div>
            )
        }
    }
}

export default PollPage;