import React, { useState } from 'react';
import './App.css';
import { BasicCard } from './components/Card';
import AutoGrid from './components/MainGrid';
import RenderSelectedTroops from './views/SelectedTroops';
import RulesRender from './views/RulesRender';
import RenderFactionSelectors from './views/KillteamRender';
import Kill_Teams from './data/Kill_Teams.json';

const factions = Kill_Teams;
const factionNames = Object.keys(factions);

function App() {
  const [selectedTroops, setSelectedTroops] = useState([]);

  const toggleTroop = (factionName, troopName, stats, abilities, weapons, unique_actions, datacard_related, image) => {
    const troop = {
      id: `${factionName}-${troopName}-${Date.now()}`,
      faction: factionName,
      name: troopName,
      stats: stats,
      w: stats.W,
      abilities: abilities,
      weapons: weapons,
      unique_actions: unique_actions,
      datacard_related: datacard_related,
      image: image,
      count: 1,
    };
    setSelectedTroops(prevTroops => [...prevTroops, troop]);
  };


  return (
    <div className="App">
      <BasicCard
        content={
          <AutoGrid
            left={RenderFactionSelectors(
              {
                factions,
                factionNames,
                toggleTroop
              }
            )}
            middle={
              <div>
                {RenderSelectedTroops(
                  {
                    selectedTroops,
                    setSelectedTroops
                  }
                )}
              </div>
            }
            right={RulesRender()}
          />
        }
      />
    </div>
  );
}

export default App;
