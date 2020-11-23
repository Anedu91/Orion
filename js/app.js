// Selector variables

const createChart = (name) => {
  return document.getElementById(`${name}`).getContext("2d");
};
const chart1 = createChart("barChart");
const chart2 = createChart("lineChart");
const gradient1 = chart2.createLinearGradient(500, 0, 100, 0);
const gradient2 = chart2.createLinearGradient(500, 0, 100, 0);

gradient1.addColorStop(0, "#991bfa");
gradient1.addColorStop(0, "#e323ff");
gradient2.addColorStop(0, "#f17401");
gradient2.addColorStop(0, "#ffb524");

// const chart3 = createChart("salesChart");
const chart4 = createChart("developmentChart");
const chart5 = createChart("researchChart");
const chart6 = createChart("presentationChart");

// Charts Options
/*EARNING BARS OPTIONS */
const barChartOptions = {
  type: "bar",

  data: {
    datasets: [
      {
        backgroundColor: "#01F1E3",
        borderColor: "#01F1E3",
        data: [12, 10, 5, 2, 20, 30, 45, 60, 22, 15, 12, 70],
        pointRadius: 4,
        pointHitRadius: 10,
      },
      {
        backgroundColor: "#991BFA",
        borderColor: "#991BFA",
        data: [80, 15, 8, 80, 40, 15, 25, 30, 100, 83, 10, 30],
        pointRadius: 4,
        pointHitRadius: 10,
      },
    ],
  },
  options: {
    legend: false,
    scales: {
      gridLines: false,
      yAxes: [
        {
          display: false,
        },
      ],
      xAxes: [
        {
          stacked: true,
          display: false,
          labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
        },
      ],
    },
  },
};
/*EARNING LINES OPTIONS */
const lineChartOptions = {
  type: "line",

  data: {
    datasets: [
      {
        borderColor: gradient1,
        backgroundColor: "rgba(0, 0, 0,0)",
        data: [12, 10, 5, 2, 20, 30, 45, 50],
        pointRadius: 0,
        borderWidth: 4,
      },
      {
        borderColor: gradient2,
        backgroundColor: "rgba(0, 0, 0,0)",
        data: [20, 12, 5, 20, 50, 28, 45, 25],
        pointRadius: 0,
        borderWidth: 4,
      },
    ],
  },
  options: {
    legend: false,
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
            stepSize: 25,
            max: 100,
          },
        },
      ],
      xAxes: [
        {
          display: false,
          labels: ["", "", "", "", "", "", "", ""],
        },
      ],
    },
    tooltips: false,
    layout: {
      padding: {
        top: 10,
        left: 20,
        right: 20,
        bottom: 10,
      },
    },
  },
};
/*PRESENTATION, DEVELOPMENT AND RESEARCH OPTIONS */
const lineOptions = {
  legend: false,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
    xAxes: [
      {
        display: true,
        labels: ["", "", "", ""],
      },
    ],
  },
  tooltips: false,
  layout: {
    padding: {
      top: 5,
      left: 0,
      right: 0,
      bottom: 5,
    },
  },
};
const presentationOptions = {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#991bfa",
        data: [2, 60, 10, 50],
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  },
  options: lineOptions,
};
const developmentOptions = {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#4dffdf",
        data: [2, 60, 10, 50],
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  },
  options: lineOptions,
};

const researchOptions = {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#f17401",
        data: [2, 60, 10, 50],
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  },
  options: lineOptions,
};
/* EARNINGS CIRCLE OPTIONS */
// const salesChartOptions = {
//   type: "doughnut",
//   data: {
//     datasets: [
//       {
//         data: [10, 15, 30],
//         backgroundColor: ["#7517F8", "#FF7D05", "#02C751"],
//         borderWidth: 0,
//         borderAlign: "inner",
//       },
//     ],
//     labels: ["red", "blue", "green"],
//   },
//   options: {
//     responsive: true,
//     legend: {
//       display: false,
//     },
//     title: {
//       display: false,
//       text: "Chart.js Doughnut Chart",
//     },
//     animation: {
//       animateScale: true,
//       animateRotate: true,
//     },
//     cutoutPercentage: 70,
//     layout: {
//       padding: {
//         top: 5,
//         left: 0,
//         right: 0,
//         bottom: 5,
//       },
//     },
//   },
// };

//Charts Inicialization

const barChartInstance = new Chart(chart1, barChartOptions);

const lineChartInstance = new Chart(chart2, lineChartOptions);

const presentationChartInstance = new Chart(chart6, presentationOptions);
const developmentChartInstance = new Chart(chart4, developmentOptions);
const researchChartChartInstance = new Chart(chart5, researchOptions);

// const salesChartInstance = new Chart(chart3, salesChartOptions);
