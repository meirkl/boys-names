import React from 'react';
import { names } from './names.json';

const item = (items: string[]) =>
  items[Math.floor(Math.random() * items.length)];

const App: React.FC = () => {
  const [name, setName] = React.useState(item(names));

  const clickHandler = () => {
    setName(item(names));
  };

  return (
    <div className="parent">
      <div className="child">
        <button className="btn" onClick={clickHandler}>
          הצג שם
        </button>
        <h1 className="result">{name}</h1>
      </div>
    </div>
  );
};

export default App;
