import React from "react";
import Chart from "react-apexcharts";

// Theme-based label color
const getAxisLabelColor = () =>
  localStorage.getItem("theme") === "light" ? "#000000" : "#ffffff";

const ReusableChart = ({
  type = "bar",
  height = 300,
  width = "100%",
  series = [],
  categories = [],
  labels = [],
  colors = [],
  horizontal = false,
  showToolbar = true,
  toolbarOptions = {},     // ✅ full control over toolbar.tools
  responsiveOptions = [],  // ✅ full control over responsive
  customOptions = {},      // ✅ allow full merge of custom config
}) => {
  const defaultOptions = {
    chart: {
      type,
      height,
      toolbar: {
        show: showToolbar,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          ...toolbarOptions, // ✅ merge toolbar controls
        },
      },
    },
    colors,
    theme: {
      mode: localStorage.getItem("theme") === "dark" ? "dark" : "light",
    },
    xaxis: {
      categories,
      labels: {
        style: { colors: getAxisLabelColor() },
      },
    },
    yaxis: {
      labels: {
        style: { colors: getAxisLabelColor() },
      },
    },
    plotOptions:
      type === "bar"
        ? {
            bar: {
              horizontal,
            },
          }
        : {},
    labels: type === "donut" ? labels : undefined,
    responsive: responsiveOptions,
  };

  // Merge custom options
  const mergedOptions = {
    ...defaultOptions,
    ...customOptions,
    xaxis: {
      ...defaultOptions.xaxis,
      ...customOptions.xaxis,
      labels: {
        ...defaultOptions.xaxis.labels,
        ...(customOptions.xaxis?.labels || {}),
      },
    },
    yaxis: {
      ...defaultOptions.yaxis,
      ...customOptions.yaxis,
      labels: {
        ...defaultOptions.yaxis.labels,
        ...(customOptions.yaxis?.labels || {}),
      },
    },
  };

  return (
    <div className="mb-4">
      <Chart
        options={mergedOptions}
        series={series}
        type={type}
        height={height}
        width={width}
      />
    </div>
  );
};

export default ReusableChart;
