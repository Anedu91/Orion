// Selector variables
const barChart = document.querySelector("#barChart").getContext("2d");

const lineChart = document.querySelector("#lineChart").getContext("2d");
const gradientStroke = lineChart.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#FFD422");
gradientStroke.addColorStop(1, "#FF7D05");

const salesChart = document.querySelector("#salesChart").getContext("2d");

const presentationChart = document
  .querySelector("#presentationChart")
  .getContext("2d");
const developmentChart = document
  .querySelector("#developmentChart")
  .getContext("2d");
const researchChart = document.querySelector("#researchChart").getContext("2d");

// Charts Options

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

const lineChartOptions = {
  type: "line",

  data: {
    datasets: [
      {
        borderColor: gradientStroke,
        backgroundColor: "rgba(0, 0, 0,0)",
        data: [12, 10, 5, 2, 20, 30, 45, 50],
        pointRadius: 0,
        borderWidth: 4,
      },
      {
        borderColor: gradientStroke,
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

const lineChart2Options = {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: gradientStroke,
        data: [2, 60, 10, 50],
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  },
  options: {
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
  },
};

const salesChartOptions = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [10, 15, 30],
        backgroundColor: ["#7517F8", "#FF7D05", "#02C751"],
        borderWidth: 0,
        borderAlign: "inner",
      },
    ],
    labels: ["red", "blue", "green"],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Doughnut Chart",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    cutoutPercentage: 70,
    layout: {
      padding: {
        top: 5,
        left: 0,
        right: 0,
        bottom: 5,
      },
    },
  },
};

//Charts Inicialization

const barChartInstance = new Chart(barChart, barChartOptions);

const lineChartInstance = new Chart(lineChart, lineChartOptions);

const presentationChartInstance = new Chart(
  presentationChart,
  lineChart2Options
);
const developmentChartInstance = new Chart(developmentChart, lineChart2Options);
const researchChartChartInstance = new Chart(researchChart, lineChart2Options);

const salesChartInstance = new Chart(salesChart, salesChartOptions);
