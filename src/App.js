import React, { useState } from 'react';
import './App.css';
import { BasicCard } from './components/Card';
import AutoGrid from './components/MainGrid';
import Grid from '@mui/material/Grid';
import { StatsTable, WeaponTable } from './components/Table';
import { TroopButton, FloatingActionButton } from './components/Buttons';
import { AccordionExpandDefault, SimpleAccordionExpand } from './components/Expand';
import { AbilitiesTabs, PloysTabs } from './components/Tabs';
import Avatar from '@mui/material/Avatar';
import RulesRender from './views/RulesRender';
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

  const deleteTroop = (troopID) => {
    console.log("deleting", troopID);
    setSelectedTroops(prevTroops => {
      const index = prevTroops.findIndex(troop => troopID === troop.id);
      if (index !== -1) {
        const updatedTroops = [...prevTroops];
        updatedTroops.splice(index, 1);
        return updatedTroops;
      }
      return prevTroops;
    });
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
      <div key={factionName} style={{ marginBottom: '5px' }}>
        <AccordionExpandDefault
          name={factionName}
          details={
            <>
              <div style={{ marginBottom: '10px' }}>
                <SimpleAccordionExpand
                  name={'Tropas'}
                  details={factions[factionName].Troops.map((troopData) => {
                    const troopName = Object.keys(troopData)[0];
                    const stats = troopData[troopName].stats;
                    const abilities = troopData[troopName].abilities;
                    const weapons = troopData[troopName].weapons;
                    const unique_actions = troopData[troopName].unique_actions;
                    const datacard_related = troopData[troopName].datacard_related;
                    const image = troopData[troopName].image;
                    return (
                      <div key={troopName} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <div style={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}>{<Avatar src={image} alt='' />}{troopName}</div>
                        <TroopButton
                          increase={() => toggleTroop(factionName, troopName, stats, abilities, weapons, unique_actions, datacard_related, image)}
                        />
                      </div>
                    );
                  })}
                />
              </div>
              {factions[factionName].Abilities.length > 0 ?
                <div style={{ marginBottom: '10px' }}>
                  <SimpleAccordionExpand
                    name={'Abilities'}
                    details={<AbilitiesTabs array={factions[factionName].Abilities} />}
                  />
                </div>
                :
                null}
              {factions[factionName].Strategic_Ploys.length > 0 ?
                <div style={{ marginBottom: '10px' }}>
                  <SimpleAccordionExpand
                    name={'Strategic Ploys'}
                    details={<PloysTabs array={factions[factionName].Strategic_Ploys} />}
                  />
                </div>
                :
                null}
              {factions[factionName].Tactical_Ploys.length > 0 ?
                  <SimpleAccordionExpand
                    name={'Tactical Ploys'}
                    details={<PloysTabs array={factions[factionName].Tactical_Ploys} />}
                  />
                :
                null}
            </>
          }
        />
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
      <Grid container spacing={1} columns={30} marginBottom={2}>
        <Grid item xs={28}>
          <AccordionExpandDefault
            name={troop.w === '0' ? troop.name + ' ☠️' : troop.name + ' ❤️: ' + troop.w}
            details={
              <div key={troop.id}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                  <img src={troop.image} alt='troop_image' />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <SimpleAccordionExpand
                    name={'Estadísticas'}
                    details={StatsTable(troop.stats, wRender(troop))}
                  />
                </div>
                {troop.abilities.length === 0 ? null :
                  <div style={{ marginBottom: '10px' }}>
                    <SimpleAccordionExpand
                      name={'Habilidades'}
                      details={<AbilitiesTabs array={troop.abilities} />}
                    />
                  </div>}
                <div style={{ marginBottom: '10px' }}>
                  <SimpleAccordionExpand
                    name={'Armas'}
                    details={WeaponTable(troop.weapons)}
                  />
                </div>
                {troop.unique_actions.length === 0 ? null :
                  <div style={{ marginBottom: '10px' }}>
                    <SimpleAccordionExpand
                      name={'Acciones únicas'}
                      details={<AbilitiesTabs array={troop.unique_actions} />}
                    />
                  </div>}
                {troop.datacard_related.length === 0 ? null :
                  <div style={{ marginBottom: '10px' }}>
                    <strong> Datacard Related: </strong>
                    <ul>
                      {troop.datacard_related.map((datacard, index) => (
                        <li key={index}>{datacard}</li>
                      ))}
                    </ul>
                  </div>}
              </div>
            }
          />
        </Grid>
        <Grid item xs={1} alignContent={'center'}>
          <FloatingActionButton
            onClick={deleteTroop.bind(this, troop.id)}
          />
        </Grid>
      </Grid>
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
                {/* <h2>Tropas Seleccionadas:</h2> */}
                {renderSelectedTroops()}
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
