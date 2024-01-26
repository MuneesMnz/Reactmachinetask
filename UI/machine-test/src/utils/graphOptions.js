export const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const pieLegentShow = [
  { label: "Category A", color: "#67C587" },
  { label: "Category B", color: "#88D1A1" },
  { label: "Category C", color: "#A9DEBA" },
  { label: "Category D", color: "#C9EAD4 " },
  { label: "Category E", color: "#EAF6ED" },
];

export const Lineoptions = {
  scales: {
    x: [
      {
        type: "linear",
        position: "bottom",
      },
    ],
    y: {
      ticks: {
        stepSize: 4,
        max: 20,
        min: 0,
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },

  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 5,
      hoverRadius: 7,
    },
    line: {
      tension: 0.3,
    },
  },
};
