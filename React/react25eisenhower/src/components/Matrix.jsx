import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './matrix.css';

const ItemType = 'ITEM';

const CAIXES = ["Do", "Decide", "Delegate", "Delete"];

// Function to load items from localStorage
const loadItems = () => {
  const storedItems = localStorage.getItem('items');
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [
    { nom: "dormir", caixa: "Do" },
    { nom: "programar", caixa: "Decide" },
    { nom: "fumar", caixa: "Delete" },
    { nom: "meditar", caixa: "Do" },
    { nom: "pasear", caixa: "Decide" },
    { nom: "coser", caixa: "Delegate" },
  ];
};

const Item = ({ name, onRemove }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, name },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="border p-4 bg-red-200 mb-4 flex justify-between"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {name}
      {onRemove && (
        <button onClick={() => onRemove(name)} className="bg-red-500 text-white p-1">X</button>
      )}
    </div>
  );
};

const Box = ({ children, title, mouItem, onRemoveItem }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    drop: (item, monitor) => mouItem(item.name, title),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`bg-slate-100 p-8 min-h-[400px] border ${isOver ? 'bg-blue-800' : ''}`}>
      <h2 className="text-xl text-center mb-4">{title}</h2>
      {children.map(child => React.cloneElement(child, { onRemove: title === "Delete" ? onRemoveItem : null }))}
    </div>
  );
};

export default function Matrix() {
  const [items, setItems] = useState(loadItems);
  const [newItemName, setNewItemName] = useState('');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const mouItem = (item, caixa) => {
    const nousItems = items.map(it => it.nom === item ? { ...it, caixa: caixa } : it);
    setItems(nousItems);
  };

  const removeItem = (itemName) => {
    setItems(items.filter(item => item.nom !== itemName));
  };

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = { nom: newItemName, caixa: "Do" };
    setItems([...items, newItem]);
    setNewItemName('');
  };

  return (
    <>
      <h1>Eisenhower's Matrix</h1>
      <form onSubmit={addNewItem} className="mb-4">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add new item"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Item</button>
      </form>

      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-2 gap-2">
          {CAIXES.map(caixa => (
            <Box key={caixa} title={caixa} mouItem={mouItem} onRemoveItem={removeItem}>
              {items.filter(e => e.caixa === caixa).map(e => <Item key={e.nom} name={e.nom} />)}
            </Box>
          ))}
        </div>
      </DndProvider>
    </>
  );
}
