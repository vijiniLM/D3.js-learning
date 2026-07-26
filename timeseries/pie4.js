const width = 400;
const height = 400;
const radius = Math.min(width, height) / 2;

const svg = d3.select("#playground").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

const color = d3.scaleOrdinal(d3.schemeCategory10);

    const data = [
        {year: "2018", population: 100},
        {year: "2019", population: 150},
        {year: "2020", population: 200},
                {year: "2021", population: 250},

    ];


    const pie = d3.pie()
        .value(d => d.population);

        console.log(pie(data));


    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);   

        const label= d3.arc()
        .innerRadius(radius - 40)
        .outerRadius(radius - 40);

        const arcs = svg.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

        const path = arcs.append("path")
        .attr("d", arc)
        .attr("fill", d => color(d.data.year));

        const text = arcs.append("text")
        .attr("transform", d => `translate(${label.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .text(d => d.data.year);    