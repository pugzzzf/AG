var trace1 =
{
    x: [1, 2, 3],
    y: [4, 5, 6],
    type: "scatter"
};

var trace2 =
{
    x: [1, 2, 3],
    y: [32, 40, 43],
    xaxis: 'x2',
    yaxis: 'y2',
    type: "scatter"
};

var trace3 =
{
    x: [1, 2, 3],
    y: [210, 250, 230],
    xaxis: 'x3',
    yaxis: 'y3',
    type: "scatter"
};

var trace4 =
{
    x: [1, 2, 3],
    y: [10, 8, 9],
    xaxis: 'x4',
    yaxis: 'y4',
    type: "scatter"
};

var data = [trace1, trace2, trace3, trace4];

var layout =
{
    grid: {rows: 2, columns: 2, pattern: 'independent'},
}
Plotly.newPlot("test", data, layout)