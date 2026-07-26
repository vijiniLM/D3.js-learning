

        

const svg = d3.select("#playground").append("svg")
    .attr("width", 800)
    .attr("height", 400);

   

const margin = { top: 20, right: 20, bottom: 40, left: 60 };
const width =700;
const height = 300;


 const chart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    

const data=[
    {rating :"very poor", proportion: 0.05},
            {rating :"poor", proportion: 0.1},
            {rating :"average", proportion: 0.2},
            {rating :"good", proportion: 0.7},
            {rating :"excellent", proportion: 0.15}
        ];



        const x= d3.scaleBand()
        .domain(data.map(d=>d.rating))
        .range([0,width])
        .padding(0.2);


        const y= d3.scaleLinear()
        .domain([0, d3.max(data, d=>d.proportion)])
        .range([height, 0]);    


        const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y).ticks(5);  


chart.append("g")   
.attr("transform", `translate(0, ${height})`)
.call(xAxis)    
.selectAll("text")
.attr("transform", "rotate(-30)")
.style("text-anchor", "end"); 

chart.append("g")
.call(yAxis);

chart.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", d => x(d.rating))
.attr("y", d => y(d.proportion))
.attr("width", x.bandwidth())
.attr("height", d => height - y(d.proportion))
.attr("fill", "steelblue");

chart.selectAll("text.label")
.data(data)
.enter()
.append("text")
.attr("class", "label")
.attr("x", d => x(d.rating) + x.bandwidth() / 2)
.attr("y", d => y(d.proportion) - 5)
.style("text-anchor", "middle")
.text(d => d.proportion.toFixed(2));

svg.selectAll("rect")
.on("mouseover", function(){

    d3.select(this).attr("fill", "red");
})
.on("mouseout", function() {
    d3.select(this).attr("fill", "steelblue");
}); 

/*

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

*/
