d3.select("#playground ul")
    .selectAll("li")
    .data([10, 20, 30])
    .text(d => d)
    .enter()
    .append("li")
    .text(d => d);

const svgWidth = 800;
const svgHeight = 700;
const margin = { top: 20, right: 20, bottom: 40, left: 60 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

const svg = d3.select("#playground").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("d3_dailySampledTP_timeseries.csv").then(data => {
    console.log(data);
    const parseData = d3.timeParse("%Y%m%d");
    data.forEach(d => {
        d.date = parseData(d.date);
        d.value = +d["Mike Webb (Inflow)"];
    });

    const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([height, 0]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);  

    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

    chartGroup.append("g")
        .call(yAxis);

    const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.value));

    chartGroup.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);

    chartGroup.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.date))
        .attr("cy", d => yScale(d.value))
        .attr("r", 2.5)
        .attr("fill", "red");


svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", margin.top / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Mike Webb (Inflow) Time Series");

});


