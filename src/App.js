import React, { useState } from 'react';
import './App.css';
import BasicCard from './components/Card';
import AutoGrid from './components/MainGrid';
import Factions from './data/Factions.json';

const factions = Factions;
const factionNames = Object.keys(factions);

function App() {
  const [selectedTroops, setSelectedTroops] = useState([]);

  const toggleTroop = (factionName, troopName, action) => {
    if (action === 'increase') {
      const troop = {
        id: `${factionName}-${troopName}-${Date.now()}`,
        faction: factionName,
        name: troopName,
        count: 1,
        w: factions[factionName].Troops.find(troopData => troopData[troopName]).stats.W
      };
      setSelectedTroops(prevTroops => [...prevTroops, troop]);
    } else if (action === 'decrease') {
      setSelectedTroops(prevTroops => {
        const index = prevTroops.findIndex(troop => troop.faction === factionName && troop.name === troopName);
        if (index !== -1) {
          const updatedTroops = [...prevTroops];
          if (updatedTroops[index].count > 1) {
            updatedTroops[index].count--;
          } else {
            updatedTroops.splice(index, 1);
          }
          return updatedTroops;
        }
        return prevTroops;
      });
    }
  };

  const handleWChange = (id, newValue) => {
    setSelectedTroops(prevTroops => {
      return prevTroops.map(troop => {
        if (troop.id === id) {
          return { ...troop, w: newValue };
        }
        return troop;
      });
    });
  };

  const renderFactionSelectors = () => {
    return factionNames.map((factionName, index) => (
      <div key={factionName}>
        <h4>{factionName}</h4>
        {factions[factionName].Troops.map((troopData) => {
          const troopName = Object.keys(troopData)[0];
          return (
            <div key={troopName}>
              <button onClick={() => toggleTroop(factionName, troopName, 'increase')}>
                {troopName} +
              </button>
              <button onClick={() => toggleTroop(factionName, troopName, 'decrease')}>
                {troopName} -
              </button>
            </div>
          );
        })}
      </div>
    ));
  };

  const renderSelectedTroops = () => {
    return selectedTroops.map((troop) => (
      <div key={troop.id}>
        <h3>{troop.name}</h3>
        <ul>
          {Object.entries(factions[troop.faction].Troops.find(
            (troopData) => troopData[troop.name]
          )[troop.name].stats).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong> 
              {key === 'W' ? 
                <input 
                  type="number" 
                  value={troop.w} 
                  onChange={(e) => handleWChange(troop.id, e.target.value)}
                  style={{ color: troop.w === '0' ? 'red' : 'inherit' }}
                /> 
                : value}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="App">
      <BasicCard
        content={
          <AutoGrid
            left={renderFactionSelectors()}
            middle={
              <div>
                <h2>Tropas Seleccionadas:</h2>
                {renderSelectedTroops()}
              </div>
            }
            right={<div>Right</div>}
          />
        }
      />
    </div>
  );
}

export default App;
