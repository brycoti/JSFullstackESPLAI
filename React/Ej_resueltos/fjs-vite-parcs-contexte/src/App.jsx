
function App() {

  const [idioma, setIdioma] = useState("ca");

  const dades = {
    dadesParcs, 
    idioma,
    setIdioma
  }

  return (
    <Contexte.Provider value={dades}>
      <div className="p-[50px]">

      <TriaIdioma />
        <div className="flex justify-between mb-10">
          <Link className="border px-4 py-2 bg-blue-700 text-white" to="/" >Inici</Link>
          <Link className="border px-4 py-2 bg-blue-700 text-white" to="/parc/montseny">Montseny</Link>
          <Link className="border px-4 py-2 bg-blue-700 text-white" to="/parc/vallvidrera">Vallvidrera</Link>
          <Link className="border px-4 py-2 bg-blue-700 text-white" to="/parc/collserola">Collserola</Link>
        </div>

        <div className="bg-blue-200 p-10">
          <Outlet />
        </div>

      </div>
    </Contexte.Provider>
  )
}

export default App
