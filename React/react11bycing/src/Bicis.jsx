import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

  // Filtra las estaciones según el número de bicicletas disponibles.
  const estacionesFiltradas = bicis.filter(bici => bici.free_bikes >= disponibles);

  // Si no hay estaciones filtradas, el centro del mapa puede ser un valor predeterminado o el centro de todas las estaciones.
  const centralPosition = estacionesFiltradas.length > 0 ? estacionesFiltradas.reduce(
    (acc, bici) => {
      acc[0] += bici.latitude / estacionesFiltradas.length;
      acc[1] += bici.longitude / estacionesFiltradas.length;
      return acc;
    },
    [0, 0]
  ) : [0, 0]; // Puedes reemplazar [0, 0] con unas coordenadas centrales predeterminadas.

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h2 className="text-2xl font-bold mb-4">Estaciones de Bicis</h2>
      <MapContainer center={centralPosition} zoom={12} scrollWheelZoom={true} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {estacionesFiltradas.map((bici, index) => (
              <Marker key={index} position={[bici.latitude, bici.longitude]}>
                <Popup>
                  {bici.name} <br />
                  Bicis disponibles: {bici.free_bikes} <br />
                  Slots vacíos: {bici.empty_slots}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
      {estacionesFiltradas.length > 0 ? (
        <>
          <table className="table-auto w-full text-center whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-bold tracking-wide text-center uppercase border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Bicis disponibles</th>
                <th className="px-4 py-3">Slots vacíos</th>
                <th className="px-4 py-3">Latitud</th>
                <th className="px-4 py-3">Longitud</th>
              </tr>
            </thead>
            <tbody>
              {estacionesFiltradas.map((bici, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm">{bici.name}</td>
                  <td className="px-4 py-3 text-sm">{bici.free_bikes}</td>
                  <td className="px-4 py-3 text-sm">{bici.empty_slots}</td>
                  <td className="px-4 py-3 text-sm">{bici.latitude}</td>
                  <td className="px-4 py-3 text-sm">{bici.longitude}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </>
      ) : (
        <p>No hay estaciones con {disponibles} o más bicis disponibles.</p>
      )}
    </div>
  );
}
