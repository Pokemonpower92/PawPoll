import { React, useEffect } from 'react';
import * as d3 from 'd3';

export default function PollPie(props) {

    const { pollData } = props;

    
    const width  = 300;
    const height = 350;

    useEffect(() => {
        const colorScale = d3     
            .scaleSequential()      
            .interpolator(d3.interpolateCool)      
            .domain([0, pollData.data.length]);

        function drawChart() {
            d3.select('#pie-container')
                .select('svg')
                .remove();
    
            const svg = d3
                .select('#pie-container')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', `translate(${width / 2}, ${height / 2})`);
            
            const arcGenerator = d3
                .arc()
                .innerRadius(0)
                .outerRadius(150);
    
            const pieGenerator = d3
                .pie()
                .padAngle(0)
                .value((d) => d.value);
    
            const arc = svg
                .selectAll()
                .data(pieGenerator(pollData.data))
                .enter();
            
            // Append arcs
            arc
                .append('path')
                .attr('d', arcGenerator)
                .style('fill', (_, i) => colorScale(i))
                .style('stroke', '#ffffff')
                .style('stroke-width', 0);
            
            arc
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'middle')
                .text((d) => {
                    return d.data.value === 0 ? "" : d.data.label;
                })
                .style('fill', 'white')
                .attr('transform', (d) => {
                    const [x, y] = arcGenerator.centroid(d);
                    return `translate(${x}, ${y})`;
                });
    
        };

        drawChart();
    }, [pollData.data]);


    return <div id="pie-container" />;
}