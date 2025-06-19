import React from 'react'

const use = () => {
  return (
    <div>
        // 1. Bar Chart (Vertical)
<ReusableChart
  type="bar"
  height={300}
  series={[{ name: "Sales", data: [10, 20, 30, 40] }]}
  categories={["Q1", "Q2", "Q3", "Q4"]}
  colors={["#008FFB"]}
/>

// 2. Bar Chart (Horizontal)
<ReusableChart
  type="bar"
  height={300}
  horizontal={true}
  series={[{ name: "Revenue", data: [400, 300, 200, 100] }]}
  categories={["North", "South", "East", "West"]}
  colors={["#FEB019"]}
/>

{/* 3. Line Chart */}
<ReusableChart
  type="line"
  height={300}
  series={[
    { name: "Users", data: [30, 40, 35, 50] },
    { name: "Visitors", data: [20, 30, 25, 45] },
  ]}
  categories={["Week 1", "Week 2", "Week 3", "Week 4"]}
  colors={["#00E396", "#FF4560"]}
/>

{/* 4. Area Chart */}

<ReusableChart
  type="area"
  height={300}
  series={[{ name: "Engagement", data: [10, 15, 20, 18] }]}
  categories={["Jan", "Feb", "Mar", "Apr"]}
  colors={["#775DD0"]}
/>

{/* Donut Chart */}
<ReusableChart
  type="donut"
  height={250}
  series={[44, 55, 13, 33]}
  labels={["Chrome", "Firefox", "Safari", "Edge"]}
  colors={["#008FFB", "#00E396", "#FEB019", "#FF4560"]}
/>

{/* Pie Chart */}
<ReusableChart
  type="pie"
  height={250}
  series={[25, 30, 20, 25]}
  labels={["Asia", "Europe", "America", "Africa"]}
  colors={["#775DD0", "#FF4560", "#00E396", "#FEB019"]}
/>

{/* Radial Bar (Circular Progress) */}
<ReusableChart
  type="radialBar"
  height={250}
  series={[70]}
  labels={["Progress"]}
  colors={["#FF4560"]}
  customOptions={{
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
  }}
/>
{/* 8. Heatmap */}

<ReusableChart
  type="heatmap"
  height={350}
  series={[
    {
      name: "Metric 1",
      data: [80, 70, 60, 50, 40],
    },
    {
      name: "Metric 2",
      data: [30, 60, 90, 100, 20],
    },
  ]}
  customOptions={{
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  }}
  colors={["#008FFB"]}
/>

{/* 9. Radar Chart */}
<ReusableChart
  type="radar"
  height={300}
  series={[{ name: "Skills", data: [80, 90, 70, 85, 60] }]}
  labels={["JS", "React", "Node", "CSS", "Python"]}
  colors={["#00E396"]}
/>

{/* 10. Polar Area Chart */}
<ReusableChart
  type="polarArea"
  height={300}
  series={[14, 23, 21, 17, 15]}
  labels={["A", "B", "C", "D", "E"]}
  colors={["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]}
/>

    10. Bubble Chart
<ReusableChart

    type="bubble"
    height={300}
    series={[
      {
        name: "Bubble Series",
        data: [
          { x: "A", y: 30, z: 10 },
          { x: "B", y: 40, z: 20 },
          { x: "C", y: 50, z: 30 },
        ],
      },
    ]}
    customOptions={{
      chart: {
        zoom: {
          enabled: true,
        },
      },
      xaxis: {
        type: "category",
      },
    }}
    colors={["#FF4560"]}
/>
    11. Scatter Chart
<ReusableChart
    type="scatter"
    height={300}
    series={[
      {
        name: "Scatter Series",
        data: [
          [10, 20],
          [15, 25],
          [20, 30],
          [25, 35],
        ],
      },
    ]}
    customOptions={{
      chart: {
        zoom: {
          enabled: true,
        },
      },
      xaxis: {
        type: "numeric",
      },
    }}
    colors={["#00E396"]}
/>

    12. Mixed Chart
<ReusableChart
    type="mixed"
    height={300}
    series={[
      { name: "Bar Series", type: "bar", data: [10, 20, 30, 40] },
        { name: "Line Series", type: "line", data: [30, 40, 35, 50] },
    ]}
    categories={["Q1", "Q2", "Q3", "Q4"]}
    colors={["#008FFB", "#00E396"]}
    customOptions={{
        chart: {
            stacked: false,
        },
        xaxis: {
            type: "category",
        },
        }}
    responsiveOptions={[
        {
            breakpoint: 600,
            options: {
                chart: {
                    height: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ]}
    />

    {/* 13. Sparkline Chart */} 
<ReusableChart

    type="sparkline"
    height={100}
    series={[{ data: [10, 20, 30, 40, 50] }]}
    customOptions={{
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
    }}
    colors={["#008FFB"]}
/>
    </div>
  )
}

export default use



