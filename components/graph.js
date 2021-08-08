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

const getMultiElements = (quantity) => {
    let els =  []
    for(let i = 0; i < (quantity ?? 1); i++){
        els.unshift(getElement(new Date(Date.now() - i*1000)));
    }
    return els;
}
const LineChart = ({
    width,
    height,
    className,
    colorsArray = []
}) => {

    return ( 
      <Line 
        height = { height }
        width = { width }
        className = { className }
        plugins = { [] }
        data = {
            {

                datasets: [{
                    label: 'Dataset 1',
                    borderColor: colorsArray[0] ?? 'rgba(33,21,81, 0.5)',
                    borderDash: [8, 4],
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    data: getMultiElements(15)
                }, {
                    label: 'Dataset 2',
                    borderColor: colorsArray[1] ?? 'rgba(255, 165, 0, 0.8)',
                    fill: false,
                    data: getMultiElements(15)
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
                            //duration: 5000,
                            //refresh: 10000,
                            delay: 1000,
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