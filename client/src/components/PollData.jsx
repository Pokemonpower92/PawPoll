import React from 'react';
import { PollBar, PollPie } from '.';

export default function PollData(props) {
    const { pollData } = props;

    return(
        <div class="PollData">
            <PollBar pollData={pollData} />
            <PollPie pollData={pollData} />
        </div>
    )
}