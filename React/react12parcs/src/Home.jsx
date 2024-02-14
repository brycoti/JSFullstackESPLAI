
import { useContext} from 'react';
import Contexte  from './Contexte'; 

function Home(){

    const {idioma} = useContext(Contexte)


    return (
        <>
        <h1 className="text-3xl font-bold underline ctext-xl text-red-500'">Home</h1>
        <p className='text-xl text-red-500'>{idioma == 'esp' ? 'Bienvenido' : 'Welcome'}</p>
        <p className='text-xl text-red-500'>{idioma == 'esp' ? 'Esta es la lista de parques' : 'This is the list of parks'}</p>
        <p className='text-xl text-red-500'>{idioma == 'esp' ? 'Mira los parques!' : 'See the parks!'}</p>
        </>
    )
}

export default Home;
