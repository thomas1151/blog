import React, {
    useEffect,
    useState
} from 'react';
import {
    Line,
    Chart
} from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
import ChartStreaming from "chartjs-plugin-streaming";
import 'chartjs-adapter-luxon';

Chart.register(ChartStreaming);

const getElement = (date) => {
    return ({
        x: date ?? Date.now(),
        y: Math.random()
    })
}
const LineChart = ({
    width,
    height
}) => {

    return ( 
      <Line 
        height = { height }
        width = { width }
        className = "bg-primary"
        plugins = { [] }
        data = {
            {

                datasets: [{
                    label: 'Dataset 1',
                    borderColor: 'rgba(33,21,81, 0.5)',
                    borderDash: [8, 4],
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    data: [].fill(0, 5, () => getElement())
                }, {
                    label: 'Dataset 2',
                    borderColor: 'rgba(255, 165, 0, 0.8)',
                    fill: false,
                    data: [].fill(0, 5, () => getElement())
                }]
            }
        }
        options = {
            {
                maintainAspectRatio: false,
                backgroundColor: "transparent",
                plugins: {
                    legend: {
                        display: false
                    }
                },
                drawBorder: false,

                scales: {
                    y: {
                        display: false,
                    },
                    x: {
                        display: false,
                        type: 'realtime',
                        realtime: {
                            delay: 2000,
                            onRefresh: chart => {
                                chart.data.datasets.forEach(dataset => {
                                    dataset.data.push(getElement());
                                });
                            }
                        }
                    }
                }
            }
        }
        />
    );
}

export default LineChart;