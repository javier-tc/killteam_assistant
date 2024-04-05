import React, { useState } from 'react';
import './App.css';
import { BasicCard, TroopsCard } from './components/Card';
import AutoGrid from './components/MainGrid';
import Factions from './data/Factions.json';
import { StatsTable, WeaponTable } from './components/Table';
import { TroopButton } from './components/Buttons';
import { AccordionExpandDefault } from './components/Expand';

const factions = Factions;
const factionNames = Object.keys(factions);

function App() {
  const [selectedTroops, setSelectedTroops] = useState([]);

  const toggleTroop = (factionName, troopName, stats, abilities, weapons, unique_actions, action) => {
    if (action === 'increase') {
      const troop = {
        id: `${factionName}-${troopName}-${Date.now()}`,
        faction: factionName,
        name: troopName,
        stats: stats,
        w: stats.W,
        abilities: abilities,
        weapons: weapons,
        unique_actions: unique_actions,
        count: 1,
      };
      setSelectedTroops(prevTroops => [...prevTroops, troop]);
      console.log(selectedTroops);
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
      <AccordionExpandDefault 
        factionName={factionName}
        />
        {factions[factionName].Troops.map((troopData) => {
          const troopName = Object.keys(troopData)[0];
          const stats = troopData[troopName].stats;
          const abilities = troopData[troopName].abilities;
          const weapons = troopData[troopName].weapons;
          const unique_actions = troopData[troopName].unique_actions;
          //console.log(troopData[troopName]);

          return (
            <div key={troopName}>
              {troopName}
              <TroopButton 
                increase={() => toggleTroop(factionName, troopName, stats, abilities, weapons, unique_actions, 'increase')}
                decrease={() => toggleTroop(factionName, troopName, stats, abilities, weapons, unique_actions, 'decrease')}
                />
            </div>
          );
        })}
      </div>
    ));
  };

  const wRender = (troop) => (
    <input
      type="number"
      value={troop.w}
      onChange={(e) => handleWChange(troop.id, e.target.value)}
      style={
        {
          width: '30px',
          color: troop.w === '0' ? 'red' : 'inherit'
        }
      }
    />
  );

  const renderSelectedTroops = () => {
    return selectedTroops.map((troop) => (
      <TroopsCard
        content={
          <div key={troop.id}>
            <h3>{troop.name}</h3>
            <ul>
              {StatsTable(troop.stats, wRender(troop))}
            </ul>
            {troop.abilities.length === 0 ? null :
              <div>
                <strong>Abilities:</strong>
                <ul>
                  {troop.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                  ))}
                </ul>
              </div>}
            <div>
              <strong>Weapons:</strong>
              <ul>
                {WeaponTable(troop.weapons)}
              </ul>
            </div>
            {troop.unique_actions.length === 0 ? null :
              <div>
                <strong>Unique Actions:</strong>
                <ul>
                  {troop.unique_actions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>}
          </div>
        }
      />
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
