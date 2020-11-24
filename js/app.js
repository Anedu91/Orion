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

const chart3 = createChart("salesChart");
const chart7 = createChart("earningChart");
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
        data: [12, 10, 40, 20, 20, 30, 45, 60, 22, 15, 12, 70],
      },
      {
        backgroundColor: "#991BFA",
        borderColor: "#991BFA",
        data: [80, 15, 8, 80, 40, 15, 25, 30, 100, 83, 10, 30],
      },
    ],
  },
  options: {
    legend: false,
    cornerRadius: 10,
    scales: {
      gridLines: false,
      yAxes: [
        {
          display: false,
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: true,
          display: false,
          barThickness: 15,
          labels: [
            "jan",
            "feb",
            "march",
            "april",
            "may",
            "june",
            "july",
            "aug",
            "sep",
            "october",
            "nov",
            "dic",
          ],
        },
      ],
    },
    layout: {
      padding: {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5,
      },
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
// round corners
Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
  draw: function (ease) {
    var ctx = this.chart.ctx;
    var easingDecimal = ease || 1;
    var arcs = this.getMeta().data;
    Chart.helpers.each(arcs, function (arc, i) {
      arc.transition(easingDecimal).draw();

      var pArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
      var pColor = pArc._view.backgroundColor;

      var vm = arc._view;
      var radius = (vm.outerRadius + vm.innerRadius) / 2;
      var thickness = (vm.outerRadius - vm.innerRadius) / 2;
      var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
      var angle = Math.PI - vm.endAngle - Math.PI / 2;

      ctx.save();
      ctx.translate(vm.x, vm.y);

      ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
      ctx.beginPath();
      ctx.arc(
        radius * Math.sin(startAngle),
        radius * Math.cos(startAngle),
        thickness,
        0,
        2 * Math.PI
      );
      ctx.fill();

      ctx.fillStyle = vm.backgroundColor;
      ctx.beginPath();
      ctx.arc(
        radius * Math.sin(angle),
        radius * Math.cos(angle),
        thickness,
        0,
        2 * Math.PI
      );
      ctx.fill();

      ctx.restore();
    });
  },
});

// write text plugin
Chart.pluginService.register({
  afterUpdate: function (chart) {
    if (chart.config.options.elements.center) {
      var helpers = Chart.helpers;
      var centerConfig = chart.config.options.elements.center;
      var globalConfig = Chart.defaults.global;
      var ctx = chart.chart.ctx;

      var fontStyle = helpers.getValueOrDefault(
        centerConfig.fontStyle,
        globalConfig.defaultFontStyle
      );
      var fontFamily = helpers.getValueOrDefault(
        centerConfig.fontFamily,
        globalConfig.defaultFontFamily
      );

      if (centerConfig.fontSize) var fontSize = centerConfig.fontSize;
      // figure out the best font size, if one is not specified
      else {
        ctx.save();
        var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
        var maxFontSize = helpers.getValueOrDefault(
          centerConfig.maxFontSize,
          256
        );
        var maxText = helpers.getValueOrDefault(
          centerConfig.maxText,
          centerConfig.text
        );

        do {
          ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
          var textWidth = ctx.measureText(maxText).width;

          // check if it fits, is within configured limits and that we are not simply toggling back and forth
          if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
            fontSize += 1;
          else {
            // reverse last step
            fontSize -= 1;
            break;
          }
        } while (true);
        ctx.restore();
      }

      // save properties
      chart.center = {
        font: helpers.fontString(fontSize, fontStyle, fontFamily),
        fillStyle: helpers.getValueOrDefault(
          centerConfig.fontColor,
          globalConfig.defaultFontColor
        ),
      };
    }
  },
  afterDraw: function (chart) {
    if (chart.center) {
      var centerConfig = chart.config.options.elements.center;
      var ctx = chart.chart.ctx;

      ctx.save();
      ctx.font = chart.center.font;
      ctx.fillStyle = chart.center.fillStyle;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.fillText(centerConfig.text, centerX, centerY);
      ctx.restore();
    }
  },
});
const salesChartOptions = {
  type: "RoundedDoughnut",
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
    maintainAspectRatio: false,
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
    cutoutPercentage: 80,
    layout: {
      padding: {
        top: 5,
        left: 0,
        right: 0,
        bottom: 5,
      },
    },
    elements: {
      arc: {
        roundedCornersFor: 0,
      },
      center: {
        // the longest text that could appear in the center
        maxText: "100%",
        text: "57%",
        fontColor: "#fff",
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontStyle: "normal",
        // fontSize: 16,
        // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
        // if these are not specified either, we default to 1 and 256
        minFontSize: 1,
        maxFontSize: 256,
      },
    },
  },
};

//Charts Inicialization

const barChartInstance = new Chart(chart1, barChartOptions);

const lineChartInstance = new Chart(chart2, lineChartOptions);

const presentationChartInstance = new Chart(chart6, presentationOptions);
const developmentChartInstance = new Chart(chart4, developmentOptions);
const researchChartChartInstance = new Chart(chart5, researchOptions);

const salesChartInstance = new Chart(chart3, salesChartOptions);
const earningChartInstance = new Chart(chart7, salesChartOptions);
