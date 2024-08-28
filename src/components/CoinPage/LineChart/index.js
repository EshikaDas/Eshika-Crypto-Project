import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis && {
        position: "right",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;




// plugins is an object that allows you to configure plugins for the chart.
// In this case, we're using the legend plugin.
// The legend plugin is used to display a legend for the chart, which shows the colors and labels for each dataset.
// legend

// legend is an object that configures the legend plugin.
// display: This property determines whether the legend is displayed or not. In this case, we're setting it to true if multiAxis is true, and false otherwise. This means that the legend will only be displayed if the chart has multiple axes.
// responsive

// responsive is a boolean property that determines whether the chart is responsive or not.
// When set to true, the chart will automatically adjust its size and layout to fit the container it's rendered in.
// In this case, we're setting responsive to true, which means the chart will be responsive.
// interaction

// interaction is an object that configures how the chart responds to user interactions, such as clicks and hover events.
// mode: This property determines the interaction mode for the chart. In this case, we're setting it to "index", which means that the chart will respond to clicks on individual data points.
// intersect: This property determines whether the chart will intersect with other charts or elements on the page. In this case, we're setting it to false, which means the chart will not intersect with other elements.
// scales

// scales is an object that configures the scales for the chart.
// In this case, we're defining two scales: crypto1 and crypto2.
// crypto1: This scale is positioned on the left side of the chart.
// crypto2: This scale is only displayed if multiAxis is true, and is positioned on the right side of the chart.
// Here's a summary of the options object:

// plugins: Configures plugins for the chart.
// legend: Configures the legend plugin.
// responsive: Determines whether the chart is responsive or not.
// interaction: Configures how the chart responds to user interactions.
// scales: Configures the scales for the chart.
// From the Chart.js documentation, here are some additional details on each of these options:

// plugins: Chart.js documentation - Plugins
// legend: Chart.js documentation - Legend
// responsive: Chart.js documentation - Responsive
// interaction: Chart.js documentation - Interaction
// scales: Chart.js documentation - Scales

//-----------------------------------------------------------------------
// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// function LineChart({ chartData }) {
//   const options = {
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//     responsive: true,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     scales: {
//       y: {
//         position: "left",
//       },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// }

// export default LineChart;