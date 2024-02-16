import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// Importar módulo 3D
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts);

const AreaChart3D = () => {
    const options = {
        chart: {
            type: 'area',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Gráfico de Área 3D'
        },
        plotOptions: {
            area: {
                depth: 100
            }
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0]
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default AreaChart3D;
