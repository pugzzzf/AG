let exp = "Math.sin(x)"

const yValues = [];
const xValues = [];
for (let x = 0; x < 10; x += 0.1)
{
    xValues.push(x);
    yValues.push(eval(exp));
}

const data = [{x: xValues, y: yValues, mode:"markers"}];
const layout = {title: "y = " + exp};
Plotly.newPlot("test", data, layout)