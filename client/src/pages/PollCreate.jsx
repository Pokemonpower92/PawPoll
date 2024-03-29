import { Component } from 'react';
import apis from '../api';
import "../styles/PollCreate.css"

class PollCreate extends Component{


    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answers: [
                "",
            ]
        }

        this.insertPoll = this.insertPoll.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
    }

    insertPoll = async (evt) => {
        evt.preventDefault();

        const payload = {
            question: this.state.question,
            answers: this.state.answers.filter(s => s !== "")
        }

        await apis.createPoll(payload).then(res => {
            this.props.history.push({
                pathname:  `/poll/${res.data.id}`,
                state: {id: res.data.id}
            });
        })
    }

    handleQuestionChange = (evt) =>{
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleAnswerChange = (evt) => {
        let newAnswers = [...this.state.answers];
        newAnswers[evt.target.name] = evt.target.value;

        this.setState({
            answers: [...newAnswers],
        })
    }

    addAnswer = (evt) =>{
        evt.preventDefault();

        this.setState({
            answers: [...this.state.answers, ""]
        })
    }

    deleteAnswer = (i, evt) => {
        evt.preventDefault();
        const newAnswers = [...this.state.answers];
        newAnswers.splice(i, 1)

        this.setState({
            question: this.state.question,
            answers: [...newAnswers],
        })
    }

    render(){
        return(
            <div className="PollCreate">
                <form >
                    <input
                        type="text"
                        name="question"
                        value={this.state.question}
                        placeholder="Enter your question"
                        onChange={this.handleQuestionChange}
                        className="PollCreate-question"
                    />
                    {this.state.answers.map(function(ans, i) {
                        if(i !== this.state.answers.length - 1) {
                            return(
                                <div className="PollCreate-answer">
                                    <input
                                        type="text"
                                        name={i}
                                        value={ans}
                                        placeholder={`Answer ${i+1}`}
                                        className="PollCreate-answer-input"
                                        onChange={this.handleAnswerChange.bind(this)}
                                    />
                                    <span className="PollCreate-answer-button-span">
                                        <button
                                            classname="PollCreate-answer-button"
                                            onClick={this.deleteAnswer.bind(this, i)}
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </div>
                            );
                        } else {
                            return(
                                <div className="PollCreate-answer">
                                    <input
                                        type="text"
                                        name={i}
                                        value={ans}
                                        placeholder={`Answer ${i+1}`}
                                        className="PollCreate-answer-input"
                                        onClick={this.addAnswer}
                                        onChange={this.handleAnswerChange.bind(this)}
                                    />
                                    <span className="PollCreate-answer-button-span">
                                        <button
                                            classname="PollCreate-answer-button"
                                            onClick={this.deleteAnswer.bind(this, i)}
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </div>
                            );
                        }
                    }, this)}
                </form>
                <div className="PollCreate-form-buttons">
                        <button
                            className="PollCreate-form-submit"
                            onClick={this.insertPoll}
                        >
                            Post poll!
                        </button>
                    </div>
            </div>
        )
    }
}

export default PollCreate;