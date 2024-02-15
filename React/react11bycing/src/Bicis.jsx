import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // I

export default function Bicis({ disponibles }) {
  const [bicis, setBicis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.citybik.es/v2/networks/bicing')
      .then(resp => resp.json())
      .then(data => {
        setBicis(data.network.stations);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando estaciones de bicis...</div>;
  }

  const estacionesFiltradas = bicis.filter(bici => bici.free_bikes >= disponibles);

  const centralPosition = bicis.reduce(
    (acc, bici) => {
      acc[0] += bici.latitude / bicis.length;
      acc[1] += bici.longitude / bicis.length;
      return acc;
    },
    [0, 0]
  );

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h2 className="text-2xl font-bold mb-4">Estaciones de Bicis</h2>
      {estacionesFiltradas.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Bicis disponibles</th>
                <th className="px-4 py-3">Slots vacíos</th>
                <th className="px-4 py-3">Latitud</th>
                <th className="px-4 py-3">Longitud</th>
              </tr>
            </thead>
            <tbody className=" divide-y dark:divide-gray-700">
              {estacionesFiltradas.map((bici, index) => (
                <tr key={index} className>
                  <td className="px-4 py-3">{bici.name}</td>
                  <td className="px-4 py-3">{bici.free_bikes}</td>
                  <td className="px-4 py-3">{bici.empty_slots}</td>
                  <td className="px-4 py-3">{bici.latitude}</td>
                  <td className="px-4 py-3">{bici.longitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">No hay estaciones con {disponibles} o más bicis disponibles.</p>
      )}

<MapContainer center={centralPosition} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bicis.map((bici, index) => (
        <Marker key={index} position={[bici.latitude, bici.longitude]}>
          <Popup>
            {bici.name} <br />
            Bicis disponibles: {bici.free_bikes} <br />
            Slots vacíos: {bici.empty_slots}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}