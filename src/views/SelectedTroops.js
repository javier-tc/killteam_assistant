import Grid from '@mui/material/Grid';
import { AccordionExpandDefault, SimpleAccordionExpand } from '../components/Expand';
import { StatsTable, WeaponTable } from '../components/Table';
import { AbilitiesTabs } from '../components/Tabs';
import { FloatingActionButton } from '../components/Buttons';


export default function RenderSelectedTroops({ selectedTroops, setSelectedTroops }) {
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

  const wRender = (troop) => (
    <input
      type="number"
      value={troop.w}
      onChange={(e) => handleWChange(troop.id, e.target.value)}
      style={
        {
          width: 'auto',
          maxWidth: '33px',
          color: troop.w === '0' ? 'red' : 'inherit',
          backgroundColor: 'inherit',
          borderRadius: 6,
        }
      }
    />
  );

  const deleteTroop = (troopID) => {
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

  if (selectedTroops.length === 0) {
    return <h2>No hay tropas seleccionadas</h2>;
  }

  return selectedTroops.map((troop) => (
    <Grid container spacing={1} marginBottom={2} columns={{ xs: 16, sm: 16, md: 16, lg: 16 }}>
      <Grid item xs={14} sm={15} md={15} lg={15}>
        <AccordionExpandDefault
          name={troop.w === '0' ? troop.name + ' ☠️' : <div style={{ textAlign: 'left' }}>{troop.name} <br /> ❤️: {troop.w}</div>}
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
                    name={'Acciones únicas'}
                    details={<AbilitiesTabs array={troop.unique_actions} />}
                  />
                </div>}
              {troop.datacard_related.length === 0 ? null :
                <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                  <strong style={{ color: '#C3510A' }}> Datacard Related: </strong>
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
      <Grid item xs={2} sm={1} md={1} lg={1} style={{ alignContent: 'center' }}>
        <FloatingActionButton
          onClick={deleteTroop.bind(this, troop.id)}
        />
      </Grid>
    </Grid>
  ));
};