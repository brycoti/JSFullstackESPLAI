import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import more from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

// Inicializar módulos
more(Highcharts);
solidGauge(Highcharts);

const MultipleKPIGauge = () => {
    const options = {
        chart: {
            type: 'solidgauge',
            height: '100%',
            events: {
                render: function () {
                    let chart = this,
                        { series } = chart;

                    series.forEach((serie, i) => {
                        if (!serie.center) return;
                        let center = serie.center,
                            paneCenterX = parseFloat(center[0]) / 100 * chart.plotWidth,
                            paneCenterY = parseFloat(center[1]) / 100 * chart.plotHeight,
                            offsetX = (chart.plotLeft + paneCenterX) - (chart.plotWidth / series.length * i + chart.plotWidth / series.length / 2),
                            offsetY = chart.plotTop + paneCenterY - chart.plotHeight / 2;

                        serie.group.attr({
                            translateX: offsetX,
                            translateY: offsetY,
                        });
                    });
                }
            }
        },
        title: {
            text: 'KPIs Múltiples en Medidores'
        },
        tooltip: {
            enabled: false
        },
        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['20%', '50%'],
            size: '100%'
        }, {
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['50%', '50%'],
            size: '100%'
        }, {
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['80%', '50%'],
            size: '100%'
        }],
        yAxis: [{
            min: 0,
            max: 200,
            lineWidth: 0,
            tickPositions: []
        }, {
            min: 0,
            max: 200,
            lineWidth: 0,
            tickPositions: []
        }, {
            min: 0,
            max: 200,
            lineWidth: 0,
            tickPositions: []
        }],
        series: [{
            name: 'KPI 1',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }],
            yAxis: 0
        }, {
            name: 'KPI 2',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '112%',
                innerRadius: '88%',
                y: 125
            }],
            yAxis: 1
        }, {
            name: 'KPI 3',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '112%',
                innerRadius: '88%',
                y: 140
            }],
            yAxis: 2
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: "400px" } }} />
        </div>
    );
};

export default MultipleKPIGauge;
