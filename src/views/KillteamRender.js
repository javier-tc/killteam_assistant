import { AccordionExpandDefault, SimpleAccordionExpand } from '../components/Expand';
import { TroopButton } from '../components/Buttons';
import { AbilitiesTabs, PloysTabs } from '../components/Tabs';
import Avatar from '@mui/material/Avatar';


const basePath = process.env.NODE_ENV === 'production' ? '' : 'killteam_assistant/';


export default function RenderFactionSelectors({ factions, factionNames, toggleTroop }) {

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
                  const image = basePath + troopData[troopName].image;
                  //console.log(image);
                  return (
                    <div
                      key={troopName}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '5px',
                        border: '1px solid #363636',
                        borderRadius: '5px',
                        padding: '10px'
                      }}
                    >
                      <div style={{ marginRight: 'auto', display: 'flex', alignItems: 'start' }}>
                        {<Avatar src={image} alt='' sx={{ marginRight: '5px' }} />}
                        {troopName}
                      </div>
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
