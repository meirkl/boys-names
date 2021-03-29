import React from 'react';
import { names } from './names.json';

const item = (items: string[]) =>
  items[Math.floor(Math.random() * items.length)];

const App: React.FC = () => {
  const [name, setName] = React.useState(item(names));
  const [showFavorite, setShowFavorite] = React.useState(false);

  const storeAddItem = (item: string) => {
    const favorites = localStorage.getItem('favorites') ?? '[]';
    const data = JSON.parse(favorites) as string[];
    data.push(item);
    localStorage.setItem('favorites', JSON.stringify(data));
  };

  const clickHandler = () => {
    setName(item(names));
  };

  const toggleView = () => {
    setShowFavorite(showFavorite => !showFavorite);
  };

  if (showFavorite) {
    const favorites = localStorage.getItem('favorites') ?? '[]';
    const data = JSON.parse(favorites) as string[];
    return (
      <div>
        <div>
          <ul>
            {data.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <button className="btn like-btn" onClick={toggleView}>
          חזור
        </button>
      </div>
    );
  }

  return (
    <div className="parent">
      <div className="child">
        <button className="btn show-btn" onClick={clickHandler}>
          הצג שם
        </button>
        <h1 className="result">{name}</h1>
        <button className="btn like-btn" onClick={() => storeAddItem(name)}>
          ❤️ הוסף למועדפים
        </button>
      </div>
      <button className="btn like-btn" onClick={toggleView}>
        ❤️ הצג מועדפים
      </button>
    </div>
  );
};

export default App;
