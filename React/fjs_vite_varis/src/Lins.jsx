import React, { useState, useEffect } from 'react';

function Lins() {

    // Utilitzem un array de booleans per representar l'estat del grid
    const [grid, setGrid] = useState(Array(16).fill(false));

    // Funció per canviar l'estat d'un item del grid quan es prem
    const toggleItem = (index) => {
        const newGrid = [...grid];
        newGrid[index] = !newGrid[index];
        setGrid(newGrid);
    };

    // Funció per desar l'estat actual del grid al local storage
    const saveToLocalStorage = () => {
        localStorage.setItem('gridState', JSON.stringify(grid));
    };

    // Funció per carregar l'estat del grid des del local storage
    const loadFromLocalStorage = () => {
        const savedGrid = JSON.parse(localStorage.getItem('gridState'));
        if (savedGrid) {
            setGrid(savedGrid);
        }
    };

    // Funció per reiniciar el grid
    const resetGrid = () => {
        setGrid(Array(16).fill(false));
        //localStorage.removeItem('gridState');
    };

    // Carrega l'estat del grid des del local storage al carregar la pàgina
    useEffect(() => {
        loadFromLocalStorage();
    }, []);

    return (
        <div className="container mx-auto p-[40px]">
            <div className="grid grid-cols-4 gap-2 mt-10">
                {grid.map((item, index) => (
                    <button
                        key={index}
                        className={`w-16 h-16 ${item ? 'bg-blue-500' : 'bg-gray-200'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        onClick={() => toggleItem(index)}
                    />
                ))}
            </div>
            <div className="mt-5 flex justify-center space-x-2">
                <button
                    className="btn border p-2 rounded-md"
                    onClick={saveToLocalStorage}
                >
                    Desar
                </button>
                <button
                    className="btn border p-2 rounded-md"
                    onClick={resetGrid}
                >
                    Net
                </button>
                <button
                    className="btn border p-2 rounded-md"
                    onClick={loadFromLocalStorage}
                >
                    Carregar
                </button>
            </div>
        </div>
    );
}

export default Lins;
