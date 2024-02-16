import C2048 from './C2048'
import Stars from './Stars'
import Meteo from './Meteo'
import Barres from './Barres'
import Pie from './Pie'
import Reloj from './Reloj'
import RelojInternacional from './RelojInternacional'
import Crono from './Crono'
import AreaChart from './AreaChart'
import ScatterChart from './ScatterChart'
import AreaChart3D from './Area3Dchart'
import KPIChart from './KPIChart'
import Temporizador from './Temporizador'

import './App.css'



export default function App () {

    return (
        <>
            <div className="grid grid-cols-1 gap-2 grid-col mt-10 bg-pink-300">
                <div className=" flex flex-row gap-8">
                    <Reloj />
                    <div >
                        <Crono />
                    </div>
                    <div>
                        <RelojInternacional/>
                    </div>
                    <div>
                        <Temporizador />
                    </div>

                </div>
                <div >
                    <Meteo />

                </div>
                <div>
                    <Barres />

                </div>
                <div> 
                    <Pie />

                </div>
                
                <div>
                <h1>Gráfico de Área con Highcharts en React</h1>
                      <AreaChart />
                </div>

                <div>
                    <h1>Gráfico de Dispersión con Highcharts en React</h1>
                    <ScatterChart />
                </div>

                <div>
                    <h1>Gráfico 3D con Highcharts en React</h1>
                    <AreaChart3D />
                </div>

                <div>
                    <h1>KPI con Highcharts en React</h1>
                    <KPIChart />
                </div>


            </div>
        </>
    )
}
