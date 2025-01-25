import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const BarGraph = ({xAxisData, yChartSeries, SIUnits, yAxisTitle, colors }) => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: xAxisData,
        },
        yaxis: {
            title: {
                text: yAxisTitle
            }
        },
        fill: {
            opacity: 1,
            colors: colors || ["#39c37c", "#d92550"]
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return SIUnits + "" + val;
                }
            }
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Income',
            data: [4000, 3000, 3500, 5000, 4500, 5200, 6100]
        },
        {
            name: 'Expenditure',
            data: [2500, 2000, 2300, 3000, 3200, 3400, 3900]
        }
    ]);

    return (
        <Chart
            options={chartOptions}
            series={yChartSeries}
            type="bar"
            height={250}
        />
                
    );
};

export default BarGraph;
