import React from 'react';
import { PollBar, PollPie } from '.';
import "../styles/PollData.css"

export default function PollData(props) {
    const { pollData } = props;

    return(
        <div class="PollData">
            <PollBar className="PollData-bar" pollData={pollData} />
            <PollPie className="PollData-pie" pollData={pollData} />
        </div>
    )
}