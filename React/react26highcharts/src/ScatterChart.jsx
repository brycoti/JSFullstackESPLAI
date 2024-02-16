import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ScatterChart = () => {
    const options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Densidad de población versus Calidad de vida por ciudad'
        },
        subtitle: {
            text: 'Fuente: WorldCities.com'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Densidad de población (habitantes por km²)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Índice de Calidad de Vida'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} hab/km², {point.y}'
                }
            }
        },
        series: [{
            name: 'Ciudades',
            color: 'rgba(223, 83, 83, .5)',
            data: [
                [6449, 70], [5472, 68], [7042, 84], [8504, 91], [9940, 75],
                [11744, 80], [12342, 78], [13776, 88], [15086, 74], [15552, 99]
            ]
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default ScatterChart;
