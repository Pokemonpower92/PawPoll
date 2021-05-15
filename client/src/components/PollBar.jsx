import { React, useEffect } from 'react';
import * as d3 from 'd3';

export default function PollBar(props) {

    const { pollData } = props;

    useEffect(() => {
        const width  = 300;
        const height = 300;

        const data = pollData.data.sort( (a, b) => {
            return d3.descending(a.value, b.value)
        })

        const margin = {
            top: 1,
            right: 25,
            bottom: 15,
            left: 25
        };

        const colorScale = d3     
            .scaleSequential()      
            .interpolator(d3.interpolateCool)      
            .domain([0, data.length]);

        function drawChart() {
            d3.select('#bar-container')
                .select('svg')
                .remove();

            const svg = d3.select("#bar-container").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            svg
                .selectAll("rect")
                .data(data.map( a => {
                    return a.value;
                }))
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * 75)
                .attr("y", (d, i) => height - 7 * d)
                .attr("width", 25)
                .attr("height", (d) => d * 7)
                .style('fill', (_, i) => colorScale(i))
            
            svg
                .selectAll("text")
                .data(data.map( a => {
                    return a.value
                }))
                .enter()
                .append("text")
                .style("font-size", 18)
                .attr("fill", "white")
                .attr("x", (d, i) => i * 75)
                .attr("y", (d, i) => height - 7 * d - 3)
                .text(d => d);
               
        };

        drawChart();
    }, [pollData.data]);

    return <div id="bar-container" />;
}