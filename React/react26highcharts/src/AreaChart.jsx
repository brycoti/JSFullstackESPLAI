import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AreaChart = () => {
    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Visitas Diarias a un Sitio Web'
        },
        subtitle: {
            text: 'Fuente: Google Analytics'
        },
        xAxis: {
            categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Número de visitas'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' visitas'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Visitas',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default AreaChart;
